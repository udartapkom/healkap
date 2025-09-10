import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/healkap' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/healkap/' : '',
};

export default nextConfig;
