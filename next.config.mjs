/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/identicons/**',
      },
    ],
  },
  // Simple performance optimizations
  poweredByHeader: false,
  compress: true,
}

export default nextConfig 