/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        destination: "http://34.66.214.23/:path*",
        source: "/a/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
