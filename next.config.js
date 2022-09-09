/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/isen_ouest_companion/' : undefined,
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
