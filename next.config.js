const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportPathMap: function() {
    return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/photo': { page: '/photo', query: { id: 'random' } }
    };
  }
})
