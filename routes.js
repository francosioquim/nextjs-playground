const {lorem} = require('faker')
const _routeCount = 1000

module.exports = {
    routeCount: _routeCount,
    getRoutes: function() {
        let routes = {}

        // Subtract 1 to include the root page '/'
        for (let i = 0; i < _routeCount; i++) {
            routes[`/p/${lorem.slug()}`] = { page: '/post', query: { title: lorem.words() } }
        }

        return routes
    }
}
