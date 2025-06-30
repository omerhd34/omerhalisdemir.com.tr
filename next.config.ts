import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker için gerekli ayarlar
  output: "standalone",

  // Server ayarları
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Image optimization
  images: {
    unoptimized: true, // Docker için önerilir
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
