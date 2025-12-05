/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for App Router (Next.js 14)
  experimental: {
    // App Router is stable in Next.js 14, but keeping this for any future features
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Optimize images automatically
  images: {
    domains: [],
  },
}

module.exports = nextConfig