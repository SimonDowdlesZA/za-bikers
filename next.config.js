/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/:path((?!maintenance$|logo$|images/).*)',
        destination: '/maintenance',
        permanent: false,
      },
    ]
  },
}