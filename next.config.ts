
// Configured remote image domains for ImgBB


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "i.ibb.co.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "sports-gear-rental-api.onrender.com" },
    ],
  },
};

export default nextConfig;