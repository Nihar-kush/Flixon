/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["themoviesflix.cx", "themoviesflix.eu.com", "hdmoviesflix.space"],
  },
};

module.exports = nextConfig;
