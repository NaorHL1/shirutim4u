/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // מומלץ
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
