// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

(module.exports = {
  images: {
    domains: [ "i0.wp.com", "demo.themefisher.com", "images.unsplash.com" ],
  },
}), nextConfig;