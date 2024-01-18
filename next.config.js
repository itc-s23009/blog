/** @type {import('next').NextConfig} */
module.nextConfig = {
  images: {
    remortePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/*/*/*'
      }
    ]
  }
}
