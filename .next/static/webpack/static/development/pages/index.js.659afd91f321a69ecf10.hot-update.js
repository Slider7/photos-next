webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./api/unsplash.js":
/*!*************************!*\
  !*** ./api/unsplash.js ***!
  \*************************/
/*! exports provided: API_DEFAULT_PARAMS, unsplash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DEFAULT_PARAMS", function() { return API_DEFAULT_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsplash", function() { return unsplash; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var API_DEFAULT_PARAMS = {
  per_page: 30,
  client_id: 'add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2'
};
var unsplash = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://api.unsplash.com/'
});

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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_unsplash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/unsplash */ "./api/unsplash.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Main_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Main.js */ "./components/Main.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about */ "./pages/about.js");









var _jsxFileName = "C:\\Projects\\photos-next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var APIkey = 'add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2';

var App = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getPhotos", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var pageNum,
          responce,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageNum = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
              _context.next = 3;
              return _api_unsplash__WEBPACK_IMPORTED_MODULE_12__["unsplash"].get('search/photos', {
                params: {
                  API_DEFAULT_PARAMS: _api_unsplash__WEBPACK_IMPORTED_MODULE_12__["API_DEFAULT_PARAMS"],
                  page: pageNum
                }
              });

            case 3:
              responce = _context.sent;

              _this.setState({
                images: responce.data.results
              });
              /*
              fetch(
                `https://api.unsplash.com/photos/?client_id=${APIkey}&per_page=30&page=${pageNum}`
              )
                .then(res => res.json())
                .then(jsonData => {
                  this.setState({
                    images: jsonData,
                    pageNum,
                    isLoading: false
                  });
                })
                .catch(error => console.error('Ошибка при запросе данных: ', error));
              */


            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.searchPhotos = _this.searchPhotos.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.scrollPhotos = _this.scrollPhotos.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.resetPhotos = _this.resetPhotos.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      images: [],
      query: '',
      pageNum: 1,
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "searchPhotos",
    value: function () {
      var _searchPhotos = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(query) {
        var pageNum,
            fetchResult,
            images,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pageNum = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
                _context2.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://api.unsplash.com/search/photos/?client_id=".concat(APIkey, "&query=").concat(query, "&page=").concat(pageNum, "&per_page=30"));

              case 3:
                fetchResult = _context2.sent;
                _context2.next = 6;
                return fetchResult.json();

              case 6:
                images = _context2.sent;

                if (images.total === 0) {
                  this.setState({
                    images: [],
                    query: '',
                    pageNum: 1,
                    isLoading: false
                  });
                } else {
                  sessionStorage.setItem('photos-query', query);
                  sessionStorage.setItem('photos-pageNum', pageNum);
                  this.setState({
                    images: images.results,
                    query: query,
                    pageNum: pageNum,
                    isLoading: false
                  });
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function searchPhotos(_x) {
        return _searchPhotos.apply(this, arguments);
      }

      return searchPhotos;
    }()
  }, {
    key: "scrollPhotos",
    value: function () {
      var _scrollPhotos = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(evt) {
        var pageNum;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                pageNum = this.state.pageNum;
                if (evt.target.id === 'prev30' && pageNum > 1) pageNum -= 1;
                if (evt.target.id === 'next30') pageNum += 1;

                if (!this.state.query) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 6;
                return this.searchPhotos(this.state.query, pageNum);

              case 6:
                _context3.next = 10;
                break;

              case 8:
                _context3.next = 10;
                return this.getPhotos(pageNum);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function scrollPhotos(_x2) {
        return _scrollPhotos.apply(this, arguments);
      }

      return scrollPhotos;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var query, pageNum;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = sessionStorage.getItem('photos-query');
                pageNum = sessionStorage.getItem('photos-pageNum');

                if (!(query && pageNum)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 5;
                return this.searchPhotos(query, pageNum);

              case 5:
                _context4.next = 9;
                break;

              case 7:
                _context4.next = 9;
                return this.getPhotos(1);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "resetPhotos",
    value: function () {
      var _resetPhotos = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                sessionStorage.setItem('photos-query', '');
                sessionStorage.setItem('photos-pageNum', 0);
                this.setState({
                  query: '',
                  pageNum: 1
                });
                _context5.next = 5;
                return this.getPhotos(1);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function resetPhotos() {
        return _resetPhotos.apply(this, arguments);
      }

      return resetPhotos;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        searchPhotos: this.searchPhotos,
        scrollPhotos: this.scrollPhotos,
        resetPhotos: this.resetPhotos,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 7
        }
      }, this.state.isLoading ? __jsx("h2", {
        style: {
          textAlign: 'center',
          marginTop: '50%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }
      }, "Loading...") : __jsx(_components_Main_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        data: this.state.images,
        apiKey: APIkey,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdW5zcGxhc2guanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQVBJX0RFRkFVTFRfUEFSQU1TIiwicGVyX3BhZ2UiLCJjbGllbnRfaWQiLCJ1bnNwbGFzaCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIkFQSWtleSIsIkFwcCIsInBhZ2VOdW0iLCJnZXQiLCJwYXJhbXMiLCJwYWdlIiwicmVzcG9uY2UiLCJzZXRTdGF0ZSIsImltYWdlcyIsImRhdGEiLCJyZXN1bHRzIiwic2VhcmNoUGhvdG9zIiwiYmluZCIsInNjcm9sbFBob3RvcyIsInJlc2V0UGhvdG9zIiwic3RhdGUiLCJxdWVyeSIsImlzTG9hZGluZyIsImZldGNoIiwiZmV0Y2hSZXN1bHQiLCJqc29uIiwidG90YWwiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJldnQiLCJ0YXJnZXQiLCJpZCIsImdldFBob3RvcyIsImdldEl0ZW0iLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGtCQUFrQixHQUFHO0FBQ2hDQyxVQUFRLEVBQUUsRUFEc0I7QUFFaENDLFdBQVMsRUFBRTtBQUZxQixDQUEzQjtBQUtBLElBQU1DLFFBQVEsR0FBRUMsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ2xDQyxTQUFPLEVBQUU7QUFEeUIsQ0FBYixDQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsTUFBTSxHQUNWLGtFQURGOztJQUdxQkMsRzs7Ozs7QUFDbkIsaUJBQWM7QUFB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QUFMLENBQWUsQ0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLUkwsOEJBQWMsQ0FBQ0MsT0FBZixDQUF1QixjQUF2QixFQUF1QyxFQUF2QztBQUNBRCw4QkFBYyxDQUFDQyxPQUFmLENBQXVCLGdCQUF2QixFQUF5QyxDQUF6QztBQUNBLHFCQUFLaEIsUUFBTCxDQUFjO0FBQ1pTLHVCQUFLLEVBQUUsRUFESztBQUVaZCx5QkFBTyxFQUFFO0FBRkcsaUJBQWQ7O3VCQUlNLEtBQUt5QixTQUFMLENBQWUsQ0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR0M7QUFDUCxhQUNFLE1BQUMsOERBQUQ7QUFDRSxvQkFBWSxFQUFFLEtBQUtoQixZQURyQjtBQUVFLG9CQUFZLEVBQUUsS0FBS0UsWUFGckI7QUFHRSxtQkFBVyxFQUFFLEtBQUtDLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRyxLQUFLQyxLQUFMLENBQVdFLFNBQVgsR0FDQztBQUFJLGFBQUssRUFBRTtBQUFFWSxtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLG1CQUFTLEVBQUU7QUFBbEMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELEdBR0MsTUFBQyw0REFBRDtBQUFNLFlBQUksRUFBRSxLQUFLZixLQUFMLENBQVdQLE1BQXZCO0FBQStCLGNBQU0sRUFBRVIsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJKLENBREY7QUFhRDs7OztFQTVHOEIrQiw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42NTlhZmQ5MWYzMjFhNjllY2YxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUElfREVGQVVMVF9QQVJBTVMgPSB7XHJcbiAgcGVyX3BhZ2U6IDMwLFxyXG4gIGNsaWVudF9pZDogJ2FkZDcwMjlhZjU1N2E5MzRjODczN2RkMjU5NGQyMzQ1YTRhZTM3ZDFiZjE1NGU1MjRkZjVmMDdkOTA1NGRhZjInXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5zcGxhc2g9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS8nXHJcbn0pO1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IHVuc3BsYXNoLCBBUElfREVGQVVMVF9QQVJBTVMgfSBmcm9tICcuLi9hcGkvdW5zcGxhc2gnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluLmpzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9hYm91dCc7XHJcblxyXG5jb25zdCBBUElrZXkgPVxyXG4gICdhZGQ3MDI5YWY1NTdhOTM0Yzg3MzdkZDI1OTRkMjM0NWE0YWUzN2QxYmYxNTRlNTI0ZGY1ZjA3ZDkwNTRkYWYyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZWFyY2hQaG90b3MgPSB0aGlzLnNlYXJjaFBob3Rvcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zY3JvbGxQaG90b3MgPSB0aGlzLnNjcm9sbFBob3Rvcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldFBob3RvcyA9IHRoaXMucmVzZXRQaG90b3MuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICBxdWVyeTogJycsXHJcbiAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFBob3RvcyA9IGFzeW5jIChwYWdlTnVtID0gMSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCB1bnNwbGFzaC5nZXQoJ3NlYXJjaC9waG90b3MnLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIEFQSV9ERUZBVUxUX1BBUkFNUyxcclxuICAgICAgICBwYWdlOiBwYWdlTnVtXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogcmVzcG9uY2UuZGF0YS5yZXN1bHRzIH0pO1xyXG4gICAgLypcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy8/Y2xpZW50X2lkPSR7QVBJa2V5fSZwZXJfcGFnZT0zMCZwYWdlPSR7cGFnZU51bX1gXHJcbiAgICApXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihqc29uRGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZXM6IGpzb25EYXRhLFxyXG4gICAgICAgICAgcGFnZU51bSxcclxuICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0LfQsNC/0YDQvtGB0LUg0LTQsNC90L3Ri9GFOiAnLCBlcnJvcikpO1xyXG4gICAgKi9cclxuICB9O1xyXG5cclxuICBhc3luYyBzZWFyY2hQaG90b3MocXVlcnksIHBhZ2VOdW0gPSAxKSB7XHJcbiAgICBjb25zdCBmZXRjaFJlc3VsdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3MvP2NsaWVudF9pZD0ke0FQSWtleX0mcXVlcnk9JHtxdWVyeX0mcGFnZT0ke3BhZ2VOdW19JnBlcl9wYWdlPTMwYFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IGZldGNoUmVzdWx0Lmpzb24oKTtcclxuICAgIGlmIChpbWFnZXMudG90YWwgPT09IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgICBxdWVyeTogJycsXHJcbiAgICAgICAgcGFnZU51bTogMSxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncGhvdG9zLXF1ZXJ5JywgcXVlcnkpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaG90b3MtcGFnZU51bScsIHBhZ2VOdW0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbWFnZXM6IGltYWdlcy5yZXN1bHRzLFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIHBhZ2VOdW0sXHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNjcm9sbFBob3RvcyhldnQpIHtcclxuICAgIGxldCBwYWdlTnVtID0gdGhpcy5zdGF0ZS5wYWdlTnVtO1xyXG4gICAgaWYgKGV2dC50YXJnZXQuaWQgPT09ICdwcmV2MzAnICYmIHBhZ2VOdW0gPiAxKSBwYWdlTnVtIC09IDE7XHJcbiAgICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gJ25leHQzMCcpIHBhZ2VOdW0gKz0gMTtcclxuICAgIGlmICh0aGlzLnN0YXRlLnF1ZXJ5KSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2VhcmNoUGhvdG9zKHRoaXMuc3RhdGUucXVlcnksIHBhZ2VOdW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRQaG90b3MocGFnZU51bSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncGhvdG9zLXF1ZXJ5Jyk7XHJcbiAgICBjb25zdCBwYWdlTnVtID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncGhvdG9zLXBhZ2VOdW0nKTtcclxuICAgIGlmIChxdWVyeSAmJiBwYWdlTnVtKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2VhcmNoUGhvdG9zKHF1ZXJ5LCBwYWdlTnVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0UGhvdG9zKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVzZXRQaG90b3MoKSB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaG90b3MtcXVlcnknLCAnJyk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaG90b3MtcGFnZU51bScsIDApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgcGFnZU51bTogMVxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCB0aGlzLmdldFBob3RvcygxKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXRcclxuICAgICAgICBzZWFyY2hQaG90b3M9e3RoaXMuc2VhcmNoUGhvdG9zfVxyXG4gICAgICAgIHNjcm9sbFBob3Rvcz17dGhpcy5zY3JvbGxQaG90b3N9XHJcbiAgICAgICAgcmVzZXRQaG90b3M9e3RoaXMucmVzZXRQaG90b3N9XHJcbiAgICAgID5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnNTAlJyB9fT5Mb2FkaW5nLi4uPC9oMj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPE1haW4gZGF0YT17dGhpcy5zdGF0ZS5pbWFnZXN9IGFwaUtleT17QVBJa2V5fSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==