/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages
  output: 'export',
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
