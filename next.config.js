const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "app"),
      "@/components": path.resolve(__dirname, "app/components"),
      "@/app/components": path.resolve(__dirname, "app/components"),
    };
    return config;
  },
};

module.exports = nextConfig;
