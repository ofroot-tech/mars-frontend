import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "app"),
      "@/components": path.resolve(__dirname, "app/components"),
    };
    return config;
  },
};

export default nextConfig;
