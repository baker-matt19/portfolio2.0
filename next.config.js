/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        reactStrictMode: true,
        images: {
          loader: "akamai",
          path: "/",
        },
      },
    
}

module.exports = nextConfig
