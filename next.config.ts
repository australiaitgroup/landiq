import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/landq-ai-brand',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
