/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'tsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/articles/page/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
