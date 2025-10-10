/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    unoptimized: true,
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
