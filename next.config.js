const path = require('path');

module.exports = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname, './'),
  },
  output: 'export',
  images: {
    unoptimized: true, 
  },
};