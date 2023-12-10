/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
