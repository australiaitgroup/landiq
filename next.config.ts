import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/landiq-brand',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
