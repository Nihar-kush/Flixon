/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["themoviezflix.co.com"],
  },
};

module.exports = nextConfig;
