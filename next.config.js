/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"]
  },
  env: {
    mapbox_key: "pk.eyJ1IjoiYWJjNDA0NzY1IiwiYSI6ImNrYW1sM2cwbjE1OXUyenA2YnU2eGFueHkifQ.Y_cYZgHNUvw_lGeQ8_l7-w"
  }
}

module.exports = nextConfig
