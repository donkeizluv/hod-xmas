/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]; // required to make Konva & react-konva work
    return config;
  },
  experimental: {
    optimizePackageImports: [
      "@solana/web3.js",
      "@solana/spl-token",
      "@coral-xyz/anchor",
      "@chakra-ui/react",
      "framer-motion",
      "@metaplex-foundation/mpl-token-metadata",
      "@metaplex-foundation/umi",
    ],
  },
};

module.exports = nextConfig;
