/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.themoviedb.org","www.streamlord.com","images.unsplash.com"],
  },
};

module.exports = nextConfig;
