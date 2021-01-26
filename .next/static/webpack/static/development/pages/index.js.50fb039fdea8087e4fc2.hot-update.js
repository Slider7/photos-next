webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./api/unsplash.js":
/*!*************************!*\
  !*** ./api/unsplash.js ***!
  \*************************/
/*! exports provided: API_DEFAULT_PARAMS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DEFAULT_PARAMS", function() { return API_DEFAULT_PARAMS; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var API_DEFAULT_PARAMS = {
  maxResults: 5,
  key: 'key'
};
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2'
  }
}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdW5zcGxhc2guanMiXSwibmFtZXMiOlsiQVBJX0RFRkFVTFRfUEFSQU1TIiwibWF4UmVzdWx0cyIsImtleSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGtCQUFrQixHQUFHO0FBQ2hDQyxZQUFVLEVBQUUsQ0FEb0I7QUFFaENDLEtBQUcsRUFBRTtBQUYyQixDQUEzQjtBQUtRQywyR0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDMUJDLFNBQU8sRUFBRSwyQkFEaUI7QUFFMUJDLFNBQU8sRUFBRTtBQUNQQyxpQkFBYSxFQUNYO0FBRks7QUFGaUIsQ0FBYixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41MGZiMDM5ZmRlYTgwODdlNGZjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUElfREVGQVVMVF9QQVJBTVMgPSB7XHJcbiAgbWF4UmVzdWx0czogNSxcclxuICBrZXk6ICdrZXknXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6ICdodHRwczovL2FwaS51bnNwbGFzaC5jb20vJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBBdXRob3JpemF0aW9uOlxyXG4gICAgICAnQ2xpZW50LUlEIGFkZDcwMjlhZjU1N2E5MzRjODczN2RkMjU5NGQyMzQ1YTRhZTM3ZDFiZjE1NGU1MjRkZjVmMDdkOTA1NGRhZjInXHJcbiAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==