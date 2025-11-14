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
  },
  experimental: {
    // הערה: בגרסאות חדשות של Next.js זה לפעמים לא נחוץ, אבל נשאיר אם זה עובד לך
    modern: true,
  }
};

module.exports = nextConfig;