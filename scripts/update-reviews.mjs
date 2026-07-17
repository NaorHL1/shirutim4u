import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import https from 'https';

const REVIEWS_URL = 'https://www.google.com/maps/place/%D7%90.%D7%9C+%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D+%D7%A0%D7%99%D7%99%D7%93%D7%99%D7%9D%E2%80%AD/@31.4062525,35.0817938,7z/data=!4m8!3m7!1s0x6247bd42ca023a1d:0xd4dda985d4341ecd!8m2!3d31.4062525!4d35.0817938!9m1!1b1!16s%2Fg%2F11xf6mc13p?entry=ttu';
const AVATARS_DIR = path.join(process.cwd(), 'public', 'images', 'avatars');
const DATA_FILE = path.join(process.cwd(), 'components', 'reviews-data.ts');

if (!fs.existsSync(AVATARS_DIR)) {
  fs.mkdirSync(AVATARS_DIR, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    // If it's not a real image or empty, skip
    if (!url || !url.startsWith('http')) return resolve(false);
    
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return resolve(false);
      }
      const writeStream = fs.createWriteStream(filepath);
      res.pipe(writeStream);
      writeStream.on('finish', () => {
        writeStream.close();
        resolve(true);
      });
    }).on('error', (err) => {
      resolve(false);
    });
  });
}

(async () => {
  console.log('🚀 Starting Google Reviews Scraper...');
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(REVIEWS_URL, { waitUntil: 'networkidle2' });

  console.log('✅ Page loaded. Finding the reviews scrolling container...');

  // Inject a small wait and try to find the container robustly
  await new Promise(r => setTimeout(r, 3000));

  console.log('⏬ Scrolling down to load all reviews...');
  let lastHeight = 0;
  let sameHeightCount = 0;

  while (sameHeightCount < 10) {
    await page.evaluate(() => {
      // Find the main scrollable container for reviews
      const containers = Array.from(document.querySelectorAll('div')).filter(el => 
        el.scrollHeight > el.clientHeight && 
        (getComputedStyle(el).overflowY.includes('auto') || getComputedStyle(el).overflowY.includes('scroll')) &&
        el.querySelector('.jftiEf') // Must contain at least one review
      );
      
      const el = containers[0];
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    });

    await new Promise(r => setTimeout(r, 1500));

    const currentHeight = await page.evaluate(() => {
      const containers = Array.from(document.querySelectorAll('div')).filter(el => 
        el.scrollHeight > el.clientHeight && 
        el.querySelector('.jftiEf')
      );
      return containers[0] ? containers[0].scrollHeight : 0;
    });

    if (currentHeight === lastHeight) {
      sameHeightCount++;
    } else {
      sameHeightCount = 0;
      lastHeight = currentHeight;
      const count = await page.evaluate(() => document.querySelectorAll('.jftiEf').length);
      console.log(`Loaded ${count} reviews...`);
    }
  }

  console.log('🔎 Extracting reviews data...');
  const reviewsData = await page.evaluate(() => {
    const reviewElements = Array.from(document.querySelectorAll('.jftiEf'));
    const result = [];
    
    reviewElements.forEach(container => {
      // Name
      const nameEl = container.querySelector('.d4r55');
      const name = nameEl ? nameEl.textContent.trim() : 'Reviewer';
      
      // Text
      const textEl = container.querySelector('.wiiorb') || container.querySelector('.MyEned');
      const text = textEl ? textEl.textContent.trim() : '';
      
      // Image
      const imgEl = container.querySelector('img.N3F5fc') || container.querySelector('.WEBjve img');
      let image = '';
      if (imgEl) {
        const src = imgEl.getAttribute('src');
        if (src && src.startsWith('http')) {
          image = src;
        }
      }
      
      // Link (Share button usually has the link or we link to the place)
      const linkEl = container.querySelector('button[data-href]') || container.querySelector('a.w8nwRe');
      let link = '';
      if (linkEl && linkEl.getAttribute('data-href')) {
        link = linkEl.getAttribute('data-href');
      } else if (linkEl && linkEl.getAttribute('href')) {
        link = linkEl.getAttribute('href');
      }

      result.push({ name, text, image, link });
    });
    
    return result;
  });

  console.log(`✅ Extracted ${reviewsData.length} unique reviews.`);
  
  // Download images and format output
  const colors = ['bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 'bg-rose-500', 'bg-amber-500', 'bg-cyan-500', 'bg-indigo-500', 'bg-pink-500', 'bg-teal-500'];
  
  const finalReviews = [];
  
  for (let i = 0; i < reviewsData.length; i++) {
    const r = reviewsData[i];
    let localImagePath = null;
    
    if (r.image) {
      // Create a safe filename
      const safeName = r.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const filename = `avatar_${safeName}_${i}.jpg`;
      const filepath = path.join(AVATARS_DIR, filename);
      
      console.log(`Downloading avatar for ${r.name}...`);
      const success = await downloadImage(r.image, filepath);
      if (success) {
        localImagePath = `/images/avatars/${filename}`;
      }
    }
    
    finalReviews.push({
      name: r.name,
      text: r.text,
      initial: r.name ? r.name.charAt(0) : '',
      image: localImagePath,
      link: r.link,
      color: colors[i % colors.length]
    });
  }

  // Generate TypeScript file
  const fileContent = `// Auto-generated by scripts/update-reviews.mjs
export const googleReviews = ${JSON.stringify(finalReviews, null, 2)};
`;

  fs.writeFileSync(DATA_FILE, fileContent);
  console.log('🎉 Successfully saved all data to components/reviews-data.ts');
  
  await browser.close();
})();
