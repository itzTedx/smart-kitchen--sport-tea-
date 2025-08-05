import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Turbopack optimizations
  experimental: {
    optimizeCss: true,
    // Optimize package imports for Turbopack
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
    ],
  },

  // Turbopack configuration (stable)
  turbopack: {
    rules: {
      // Optimize image loading
      "*.jpg": {
        loaders: ["@vercel/turbopack-swc-loader"],
        as: "*.jpg",
      },
      "*.png": {
        loaders: ["@vercel/turbopack-swc-loader"],
        as: "*.png",
      },
      "*.webp": {
        loaders: ["@vercel/turbopack-swc-loader"],
        as: "*.webp",
      },
      "*.avif": {
        loaders: ["@vercel/turbopack-swc-loader"],
        as: "*.avif",
      },
    },
  },

  // Compression settings
  compress: true,

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
