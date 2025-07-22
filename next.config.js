/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  
  // SEO and performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false
}

module.exports = nextConfig
