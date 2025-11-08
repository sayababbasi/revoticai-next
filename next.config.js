/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // ✅ Ensure code splitting is aggressive
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 2000000, // ~2 MB chunks
    };

    // Enable gzip compression (for smaller uploads)
    config.performance = {
      maxAssetSize: 25000000,
      maxEntrypointSize: 25000000,
    };

    return config;
  },
};

module.exports = nextConfig;
