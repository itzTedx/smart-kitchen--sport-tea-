import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  typedRoutes: true,
  reactCompiler: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Turbopack optimizations
  experimental: {
    // Optimize package imports for Turbopack
    optimizePackageImports: ["lucide-react", "radix-ui"],
  },

  // Compression settings
  compress: true,

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    qualities: [75, 85, 100],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
