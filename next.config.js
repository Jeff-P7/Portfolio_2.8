/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
};

// const withTM = require('next-transpile-modules')(['./src/components/shared']);

module.exports = nextConfig;
// module.exports = { nextConfig, withTM: withTM({}) };


// module.exports = withTM({});