const routes = require('./routes');

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs-playground' : '',
  exportPathMap: async function () {
    return routes.getRoutes()
  }
}