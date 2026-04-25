require('dotenv').config();
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    UNSPLASH_KEY: process.env.UNSPLASH_KEY,
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/photo': { page: '/photo', query: { id: 'random' } }
    };
  }
});