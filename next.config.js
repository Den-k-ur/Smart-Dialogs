/** @type {import('next').NextConfig} */
const commonRuntimeConfig = {
  reactStrictMode: true,
};

const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  env: commonRuntimeConfig,
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  ...(commonRuntimeConfig.ENV === 'developmennt' ? {} : { output: 'standalone' }),
};

module.exports = nextConfig;
