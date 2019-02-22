const routes = require('./routes')
const routesList = routes.getRoutes()

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs-playground' : '',
  exportPathMap: async function () {
    return routesList
  },
  env: {
    routes: routesList
  }
}