/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT_BUILD === 'true';

const nextConfig = {
  output: isExport ? 'export' : undefined,
  // שינינו את זה ל-false כדי למנוע את שגיאות ההפניה בקבצים
  trailingSlash: false,
  images: {
    // מחקתי את השורה הכפולה שהיתה כאן
    unoptimized: isExport ? true : false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
  }
};

module.exports = nextConfig;