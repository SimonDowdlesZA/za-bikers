/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;

/* module.exports = {
  async redirects() {
    return [
      {
        source: '/:path(^(?!.*\bmaintenance\b).*$)',
        destination: '/maintenance',
        permanent: false,
      },
    ]
  },
} */