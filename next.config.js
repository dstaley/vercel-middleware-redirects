/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/redirect",
        destination: "/redirected-from-config",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
