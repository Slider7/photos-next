webpackHotUpdate("static\\development\\pages\\index.js",{

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
              return _api_unsplash__WEBPACK_IMPORTED_MODULE_12__["default"].get('search/photos', {
                params: {
                  per_page: 15,
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
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getPhotos(1);

              case 2:
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
          lineNumber: 107,
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
          lineNumber: 113,
          columnNumber: 11
        }
      }, "Loading...") : __jsx(_components_Main_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        data: this.state.images,
        apiKey: APIkey,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBUElrZXkiLCJBcHAiLCJwYWdlTnVtIiwidW5zcGxhc2giLCJnZXQiLCJwYXJhbXMiLCJwZXJfcGFnZSIsInBhZ2UiLCJyZXNwb25jZSIsInNldFN0YXRlIiwiaW1hZ2VzIiwiZGF0YSIsInJlc3VsdHMiLCJzZWFyY2hQaG90b3MiLCJiaW5kIiwic2Nyb2xsUGhvdG9zIiwicmVzZXRQaG90b3MiLCJzdGF0ZSIsInF1ZXJ5IiwiaXNMb2FkaW5nIiwiZmV0Y2giLCJmZXRjaFJlc3VsdCIsImpzb24iLCJ0b3RhbCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImV2dCIsInRhcmdldCIsImlkIiwiZ2V0UGhvdG9zIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQ1Ysa0VBREY7O0lBR3FCQyxHOzs7OztBQUNuQixpQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLGtaQWNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0MscUJBQVAsMkRBQWlCLENBQWpCO0FBQUE7QUFBQSxxQkFDYUMsc0RBQVEsQ0FBQ0MsR0FBVCxDQUFhLGVBQWIsRUFBOEI7QUFDbkRDLHNCQUFNLEVBQUU7QUFBRUMsMEJBQVEsRUFBRSxFQUFaO0FBQWdCQyxzQkFBSSxFQUFFTDtBQUF0QjtBQUQyQyxlQUE5QixDQURiOztBQUFBO0FBQ0pNLHNCQURJOztBQUlWLG9CQUFLQyxRQUFMLENBQWM7QUFBRUMsc0JBQU0sRUFBRUYsUUFBUSxDQUFDRyxJQUFULENBQWNDO0FBQXhCLGVBQWQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUxVO0FBQUE7QUFBQTtBQUFBO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxHQUdDLE1BQUMsNERBQUQ7QUFBTSxZQUFJLEVBQUUsS0FBS2QsS0FBTCxDQUFXUCxNQUF2QjtBQUErQixjQUFNLEVBQUVWLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSSixDQURGO0FBYUQ7Ozs7RUExRzhCZ0MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNWFhYmJlZTIyMTM0NmRlYTBiYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHVuc3BsYXNoIGZyb20gJy4uL2FwaS91bnNwbGFzaCc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluLmpzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9hYm91dCc7XHJcblxyXG5jb25zdCBBUElrZXkgPVxyXG4gICdhZGQ3MDI5YWY1NTdhOTM0Yzg3MzdkZDI1OTRkMjM0NWE0YWUzN2QxYmYxNTRlNTI0ZGY1ZjA3ZDkwNTRkYWYyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZWFyY2hQaG90b3MgPSB0aGlzLnNlYXJjaFBob3Rvcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zY3JvbGxQaG90b3MgPSB0aGlzLnNjcm9sbFBob3Rvcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldFBob3RvcyA9IHRoaXMucmVzZXRQaG90b3MuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICBxdWVyeTogJycsXHJcbiAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFBob3RvcyA9IGFzeW5jIChwYWdlTnVtID0gMSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCB1bnNwbGFzaC5nZXQoJ3NlYXJjaC9waG90b3MnLCB7XHJcbiAgICAgIHBhcmFtczogeyBwZXJfcGFnZTogMTUsIHBhZ2U6IHBhZ2VOdW0gfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VzOiByZXNwb25jZS5kYXRhLnJlc3VsdHMgfSk7XHJcbiAgICAvKlxyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zLz9jbGllbnRfaWQ9JHtBUElrZXl9JnBlcl9wYWdlPTMwJnBhZ2U9JHtwYWdlTnVtfWBcclxuICAgIClcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGpzb25EYXRhID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlczoganNvbkRhdGEsXHJcbiAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0L/RgNC+0YHQtSDQtNCw0L3QvdGL0YU6ICcsIGVycm9yKSk7XHJcbiAgICAqL1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIHNlYXJjaFBob3RvcyhxdWVyeSwgcGFnZU51bSA9IDEpIHtcclxuICAgIGNvbnN0IGZldGNoUmVzdWx0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvcy8/Y2xpZW50X2lkPSR7QVBJa2V5fSZxdWVyeT0ke3F1ZXJ5fSZwYWdlPSR7cGFnZU51bX0mcGVyX3BhZ2U9MzBgXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgZmV0Y2hSZXN1bHQuanNvbigpO1xyXG4gICAgaWYgKGltYWdlcy50b3RhbCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaG90b3MtcXVlcnknLCBxdWVyeSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Bob3Rvcy1wYWdlTnVtJywgcGFnZU51bSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGltYWdlczogaW1hZ2VzLnJlc3VsdHMsXHJcbiAgICAgICAgcXVlcnksXHJcbiAgICAgICAgcGFnZU51bSxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2Nyb2xsUGhvdG9zKGV2dCkge1xyXG4gICAgbGV0IHBhZ2VOdW0gPSB0aGlzLnN0YXRlLnBhZ2VOdW07XHJcbiAgICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gJ3ByZXYzMCcgJiYgcGFnZU51bSA+IDEpIHBhZ2VOdW0gLT0gMTtcclxuICAgIGlmIChldnQudGFyZ2V0LmlkID09PSAnbmV4dDMwJykgcGFnZU51bSArPSAxO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucXVlcnkpIHtcclxuICAgICAgYXdhaXQgdGhpcy5zZWFyY2hQaG90b3ModGhpcy5zdGF0ZS5xdWVyeSwgcGFnZU51bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldFBob3RvcyhwYWdlTnVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLypjb25zdCBxdWVyeSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Bob3Rvcy1xdWVyeScpO1xyXG4gICAgY29uc3QgcGFnZU51bSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Bob3Rvcy1wYWdlTnVtJyk7XHJcbiAgICBpZiAocXVlcnkgJiYgcGFnZU51bSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNlYXJjaFBob3RvcyhxdWVyeSwgcGFnZU51bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldFBob3RvcygxKTtcclxuICAgIH0qL1xyXG4gICAgYXdhaXQgdGhpcy5nZXRQaG90b3MoMSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXNldFBob3RvcygpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Bob3Rvcy1xdWVyeScsICcnKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Bob3Rvcy1wYWdlTnVtJywgMCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICBwYWdlTnVtOiAxXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHRoaXMuZ2V0UGhvdG9zKDEpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHNlYXJjaFBob3Rvcz17dGhpcy5zZWFyY2hQaG90b3N9XHJcbiAgICAgICAgc2Nyb2xsUGhvdG9zPXt0aGlzLnNjcm9sbFBob3Rvc31cclxuICAgICAgICByZXNldFBob3Rvcz17dGhpcy5yZXNldFBob3Rvc31cclxuICAgICAgPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc1MCUnIH19PkxvYWRpbmcuLi48L2gyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TWFpbiBkYXRhPXt0aGlzLnN0YXRlLmltYWdlc30gYXBpS2V5PXtBUElrZXl9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9