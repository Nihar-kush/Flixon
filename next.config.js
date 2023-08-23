/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["themoviesflix.com.de","i.postimg.cc","moviesflixer.lat","images.unsplash.com","themoviesflix.gr.com"],
  },
};

module.exports = nextConfig;
