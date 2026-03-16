import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages / Workers deployment via @cloudflare/next-on-pages
  // Switch to 'nodejs' if deploying to a Node.js runtime instead
  // See: https://developers.cloudflare.com/pages/framework-guides/nextjs/
};

export default nextConfig;
