import type { NextConfig } from "next";

// Set by the GitHub Actions workflow (e.g. "/tensaiforge").
// Empty string means the site is served from the domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // Emit a fully-static `out/` directory
  trailingSlash: true, // index.html per page — required by GitHub Pages
  basePath, // Sub-path when deployed under a repo subdirectory
  assetPrefix: basePath ? `${basePath}/` : "",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    unoptimized: true, // Next.js Image Optimization is not available in static export
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};
export default nextConfig;
