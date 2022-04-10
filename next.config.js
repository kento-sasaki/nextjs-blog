/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'tsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/articles',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
