import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages deployment.
  // The build output lands in `out/` — set that as your Pages output directory.
  // See: https://developers.cloudflare.com/pages/framework-guides/nextjs/
  output: 'export',

  // Ensure every route has a trailing slash so Cloudflare Pages resolves
  // index.html files correctly from the `out/` directory.
  trailingSlash: true,

  // Disable Next.js image optimisation — not available in static exports.
  // Replace with a CDN or on-demand image transform when images are added.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
