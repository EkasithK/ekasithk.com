import type { NextConfig } from "next";

// Static export for Cloudflare Pages (outputs to ./out on `next build`).
// Image optimization must be disabled for a fully static export.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
