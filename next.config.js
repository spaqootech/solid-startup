/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  webpack: (config) => {
    // Ensure optimized chunk splitting for better performance
    config.optimization.splitChunks = {
      chunks: "all",
    };
    return config;
  },
};

module.exports = nextConfig;
