/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.themoviedb.org","i.postimg.cc","images.unsplash.com"],
  },
};

module.exports = nextConfig;
