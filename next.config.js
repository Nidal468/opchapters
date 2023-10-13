/** @type {import('next').NextConfig} */
const nextConfig = {};
  
  module.exports = nextConfig;
  
  module.exports = {
    async rewrites() {
      return [
        {
          source: '/ads.txt',
          destination: '/ads.txt',
        },
      ];
    },
  };