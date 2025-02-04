/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Remove or comment out the following line:
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/guides/articles/nicotine-pouch-trends",
        destination: "/articles/nicotine-pouch-trends",
        permanent: true,
      },
      {
        source: "/guides/reviews/top-brands-2024",
        destination: "/articles/top-brands-2025",
        permanent: true,
      },
      {
        source: "/guides/health/nicotine-effects",
        destination: "/health/nicotine-effects",
        permanent: true,
      },
      {
        source: "/guides/beginners/getting-started",
        destination: "/beginners/getting-started",
        permanent: true,
      },
      {
        source: "/guides",
        destination: "/articles",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
