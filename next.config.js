/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const redirects = require('./config/redirects');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },
  env: {
    // NODE_ENV: 'development',
  },
};
