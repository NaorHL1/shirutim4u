/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT_BUILD === 'true';

const nextConfig = {
  output: isExport ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: isExport ? true : false,
    unoptimized: isExport ? true : false,
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
  modern: true,
}
};

module.exports = nextConfig;
