/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  env: {
    key: "testing env"
  },
  sassOptions: {
    includePaths: [path.join("__dirname", "styles")],
  },
}

module.exports = nextConfig
