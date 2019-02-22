webpackHotUpdate("static/development/pages/index.js",{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! faker */ "./node_modules/faker/index.js"),
    lorem = _require.lorem;

var _routeCount = 1000;
module.exports = {
  routeCount: _routeCount,
  getRoutes: function getRoutes() {
    var routes = {
      '/': {
        page: '/',
        query: {
          title: "Home Page"
        }
      } // Subtract 1 to include the root page '/'

    };

    for (var i = 0; i < _routeCount; i++) {
      routes["/p/".concat(lorem.slug())] = {
        page: '/post',
        query: {
          title: lorem.words()
        }
      };
    }

    return routes;
  }
};

/***/ })

})
//# sourceMappingURL=index.js.57b6d355540be11448a5.hot-update.js.map