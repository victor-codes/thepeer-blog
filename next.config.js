/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [640, 768, 820, 900, 1024],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "techcrunch.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "beta.techcrunch.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/avatar/**",
      },
    ],
  },
};

module.exports = nextConfig;
