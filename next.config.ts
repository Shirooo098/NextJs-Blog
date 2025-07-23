import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nrcchrydkogqpdhxnmac.supabase.co",
        pathname: "/storage/v1/object/public/**"
      }
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    ppr: true
  }
};

export default nextConfig;
