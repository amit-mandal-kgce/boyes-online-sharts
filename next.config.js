/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  experimental: {
    pageDataCollectionTimeout: 1000 * 60 * 5, // 5 minutes (adjust as needed)
  },
  // Other configuration options...
};
