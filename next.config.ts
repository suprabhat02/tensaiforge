import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // recommended for static hosting
  reactStrictMode: true,
  // Gzip-compress all server responses (HTML, JSON, JS chunks).
  compress: true,
  // Remove the X-Powered-By: Next.js response header.
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    // Cache optimized images for 30 days instead of the default 60 seconds.
    // Prevents redundant re-processing of the same Unsplash images on repeat
    // visits, which directly improves LCP on warm loads.
    minimumCacheTTL: 2592000,
  },
  experimental: {
    // optimizePackageImports rewrites barrel-file imports into direct paths so
    // Webpack/Turbopack only bundles the symbols actually used.
    // @tabler/icons-react ships 4000+ icons — without this, ALL of them are
    // parsed and included even if only 2 are used (carousel.tsx).
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@tabler/icons-react",
      "sonner",
    ],
  },
};
export default nextConfig;
