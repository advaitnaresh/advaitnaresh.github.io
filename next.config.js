/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

module.exports = nextConfig;
