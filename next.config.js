/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/ads1.txt',
        destination: '/ads1.txt',
      },
    ];
  },
};

module.exports = nextConfig;
