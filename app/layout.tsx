import './css/style.css'
import Script from 'next/script'
import { Rubik } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shirutim4u.com'),
  title: {
    default: 'השכרת שירותים ניידים מפוארים לאירועים וחתונות בטבע | א.ל שירותים ניידים',
    template: '%s | א.ל שירותים ניידים',
  },
  description: 'השכרת שירותים ניידים מפוארים לאירועים, חתונות בטבע, כנסים והפקות שטח. תאי שירותים מרווחים ומעוצבים, עצמאיים לחלוטין ללא צורך בתשתיות מים וחשמל, עם איש שירות צמוד בפריסה ארצית.',
  keywords: [
    'השכרת שירותים ניידים',
    'שירותים ניידים להשכרה',
    'שירותים מפוארים להשכרה',
    'שירותים לאירועים',
    'תאי שירותים להשכרה',
    'להשכיר שירותים ניידים',
    'שירותים ניידים מפוארים',
    'השכרת שירותים ניידים מפוארים',
    'שירותים ניידים לחתונה בטבע',
    'שירותים ניידים לאירועים',
    'א.ל שירותים ניידים',
  ],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: '/',
    languages: {
      'he-IL': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'השכרת שירותים ניידים מפוארים לאירועים וחתונות | א.ל שירותים ניידים',
    description:
      'שירותים ניידים מפוארים ברמת מלון 5 כוכבים: עיצוב מרווח, כיורים עם מים זורמים, תאורת אווירה, מראות גדולות ואיש תחזוקה צמוד בפריסה ארצית.',
    url: 'https://www.shirutim4u.com',
    siteName: 'א.ל שירותים ניידים',
    locale: 'he_IL',
    images: [
      {
        url: '/images/toiletimg2.jpeg',
        width: 1200,
        height: 630,
        alt: 'תא שירותים נייד מפואר מבפנים - א.ל שירותים ניידים',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'השכרת שירותים ניידים מפוארים לאירועים | א.ל שירותים ניידים',
    description: 'קרונות שירותים ניידים מפוארים לחתונות בטבע ואירועים בפריסה ארצית. עצמאיים לחלוטין בשטח עם איש שירות צמוד.',
    images: ['/images/toiletimg2.jpeg'],
  },
  icons: { 
    icon: '/favicon.ico',
    apple: '/favicon/apple-icon-180x180.png',
  },
  manifest: '/favicon/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={`${rubik.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>

        {/* סקריפט הנגישות - עם הגנה מפני אתחול כפול בדפדפני מובייל */}
        <Script src="/acctoolbar.min.js" strategy="lazyOnload" />
        <Script id="init-acctoolbar" strategy="lazyOnload">
          {`
            (function() {
              var attempts = 0;
              function initMicAccessTool() {
                if (document.getElementById('mic-init-access-tool') || window.micAccessTool) {
                  return;
                }
                if (typeof MicAccessTool !== 'undefined') {
                  window.micAccessTool = new MicAccessTool({
                    link: '/',
                    contact: 'mailto:shirutim4u@gmail.com',
                    buttonPosition: 'left',
                    forceLang: 'he-IL'
                  });
                } else if (attempts < 40) {
                  attempts++;
                  setTimeout(initMicAccessTool, 100);
                }
              }
              initMicAccessTool();
            })();
          `}
        </Script>

        {/* רכיב Analytics הרשמי - מבטיח מעקב נכון ב-SPA */}
        <GoogleAnalytics gaId="G-EPTQYXQ530" />
      </body>
    </html>
  )
}