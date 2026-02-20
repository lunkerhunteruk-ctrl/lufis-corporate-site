import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 2,
  },
  async rewrites() {
    return [
      {
        source: "/pitareci",
        destination: "/pitareci/index.html",
      },
      {
        source: "/pitareci/contact",
        destination: "/pitareci/contact.html",
      },
      {
        source: "/pitareci/privacy",
        destination: "/pitareci/privacy.html",
      },
      {
        source: "/pitareci/terms",
        destination: "/pitareci/terms.html",
      },
      {
        source: "/pitareci/tokushoho",
        destination: "/pitareci/tokushoho.html",
      },
    ];
  },
};

export default nextConfig;
