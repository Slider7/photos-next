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
/* harmony import */ var _api_unsplash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/unsplash */ "./api/unsplash.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Main_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Main.js */ "./components/Main.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about */ "./pages/about.js");









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
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageNum = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;

              /*const responce = await unsplash.get('search/photos', {
                params: { per_page: 15, page: pageNum }
              });
              this.setState({ images: responce.data.results });*/
              isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://api.unsplash.com/photos/?client_id=".concat(APIkey, "&per_page=30&page=").concat(pageNum)).then(function (res) {
                return res.json();
              }).then(function (jsonData) {
                _this.setState({
                  images: jsonData,
                  pageNum: pageNum,
                  isLoading: false
                });
              })["catch"](function (error) {
                return console.error('Ошибка при запросе данных: ', error);
              });

            case 2:
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
      return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        searchPhotos: this.searchPhotos,
        scrollPhotos: this.scrollPhotos,
        resetPhotos: this.resetPhotos,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
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
          lineNumber: 109,
          columnNumber: 11
        }
      }, "Loading...") : __jsx(_components_Main_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        data: this.state.images,
        apiKey: APIkey,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBUElrZXkiLCJBcHAiLCJwYWdlTnVtIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImpzb25EYXRhIiwic2V0U3RhdGUiLCJpbWFnZXMiLCJpc0xvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJzZWFyY2hQaG90b3MiLCJiaW5kIiwic2Nyb2xsUGhvdG9zIiwicmVzZXRQaG90b3MiLCJzdGF0ZSIsInF1ZXJ5IiwiZmV0Y2hSZXN1bHQiLCJ0b3RhbCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlc3VsdHMiLCJldnQiLCJ0YXJnZXQiLCJpZCIsImdldFBob3RvcyIsImdldEl0ZW0iLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUNWLGtFQURGOztJQUdxQkMsRzs7Ozs7QUFDbkIsaUJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWSxrWkFjRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPQyxxQkFBUCwyREFBaUIsQ0FBakI7O0FBQ1Y7Ozs7QUFLQUMsd0VBQUssc0RBQzJDSCxNQUQzQywrQkFDc0VFLE9BRHRFLEVBQUwsQ0FHR0UsSUFISCxDQUdRLFVBQUFDLEdBQUc7QUFBQSx1QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxlQUhYLEVBSUdGLElBSkgsQ0FJUSxVQUFBRyxRQUFRLEVBQUk7QUFDaEIsc0JBQUtDLFFBQUwsQ0FBYztBQUNaQyx3QkFBTSxFQUFFRixRQURJO0FBRVpMLHlCQUFPLEVBQVBBLE9BRlk7QUFHWlEsMkJBQVMsRUFBRTtBQUhDLGlCQUFkO0FBS0QsZUFWSCxXQVdTLFVBQUFDLEtBQUs7QUFBQSx1QkFB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YUFDRSxNQUFDLDhEQUFEO0FBQ0Usb0JBQVksRUFBRSxLQUFLZCxZQURyQjtBQUVFLG9CQUFZLEVBQUUsS0FBS0UsWUFGckI7QUFHRSxtQkFBVyxFQUFFLEtBQUtDLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRyxLQUFLQyxLQUFMLENBQVdQLFNBQVgsR0FDQztBQUFJLGFBQUssRUFBRTtBQUFFbUIsbUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxtQkFBUyxFQUFFO0FBQWxDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxHQUdDLE1BQUMsNERBQUQ7QUFBTSxZQUFJLEVBQUUsS0FBS2IsS0FBTCxDQUFXUixNQUF2QjtBQUErQixjQUFNLEVBQUVULE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSSixDQURGO0FBYUQ7Ozs7RUF4RzhCK0IsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZWU0ZGM4OWI4YTE5NTY5MTNkMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuaW1wb3J0IHVuc3BsYXNoIGZyb20gJy4uL2FwaS91bnNwbGFzaCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL01haW4uanMnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2Fib3V0JztcclxuXHJcbmNvbnN0IEFQSWtleSA9XHJcbiAgJ2FkZDcwMjlhZjU1N2E5MzRjODczN2RkMjU5NGQyMzQ1YTRhZTM3ZDFiZjE1NGU1MjRkZjVmMDdkOTA1NGRhZjInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlYXJjaFBob3RvcyA9IHRoaXMuc2VhcmNoUGhvdG9zLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNjcm9sbFBob3RvcyA9IHRoaXMuc2Nyb2xsUGhvdG9zLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnJlc2V0UGhvdG9zID0gdGhpcy5yZXNldFBob3Rvcy5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlczogW10sXHJcbiAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgcGFnZU51bTogMSxcclxuICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0UGhvdG9zID0gYXN5bmMgKHBhZ2VOdW0gPSAxKSA9PiB7XHJcbiAgICAvKmNvbnN0IHJlc3BvbmNlID0gYXdhaXQgdW5zcGxhc2guZ2V0KCdzZWFyY2gvcGhvdG9zJywge1xyXG4gICAgICBwYXJhbXM6IHsgcGVyX3BhZ2U6IDE1LCBwYWdlOiBwYWdlTnVtIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogcmVzcG9uY2UuZGF0YS5yZXN1bHRzIH0pOyovXHJcblxyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zLz9jbGllbnRfaWQ9JHtBUElrZXl9JnBlcl9wYWdlPTMwJnBhZ2U9JHtwYWdlTnVtfWBcclxuICAgIClcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGpzb25EYXRhID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlczoganNvbkRhdGEsXHJcbiAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0L/RgNC+0YHQtSDQtNCw0L3QvdGL0YU6ICcsIGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgc2VhcmNoUGhvdG9zKHF1ZXJ5LCBwYWdlTnVtID0gMSkge1xyXG4gICAgY29uc3QgZmV0Y2hSZXN1bHQgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9zZWFyY2gvcGhvdG9zLz9jbGllbnRfaWQ9JHtBUElrZXl9JnF1ZXJ5PSR7cXVlcnl9JnBhZ2U9JHtwYWdlTnVtfSZwZXJfcGFnZT0zMGBcclxuICAgICk7XHJcbiAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBmZXRjaFJlc3VsdC5qc29uKCk7XHJcbiAgICBpZiAoaW1hZ2VzLnRvdGFsID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGltYWdlczogW10sXHJcbiAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Bob3Rvcy1xdWVyeScsIHF1ZXJ5KTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncGhvdG9zLXBhZ2VOdW0nLCBwYWdlTnVtKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaW1hZ2VzOiBpbWFnZXMucmVzdWx0cyxcclxuICAgICAgICBxdWVyeSxcclxuICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBzY3JvbGxQaG90b3MoZXZ0KSB7XHJcbiAgICBsZXQgcGFnZU51bSA9IHRoaXMuc3RhdGUucGFnZU51bTtcclxuICAgIGlmIChldnQudGFyZ2V0LmlkID09PSAncHJldjMwJyAmJiBwYWdlTnVtID4gMSkgcGFnZU51bSAtPSAxO1xyXG4gICAgaWYgKGV2dC50YXJnZXQuaWQgPT09ICduZXh0MzAnKSBwYWdlTnVtICs9IDE7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5xdWVyeSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNlYXJjaFBob3Rvcyh0aGlzLnN0YXRlLnF1ZXJ5LCBwYWdlTnVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0UGhvdG9zKHBhZ2VOdW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Bob3Rvcy1xdWVyeScpO1xyXG4gICAgY29uc3QgcGFnZU51bSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Bob3Rvcy1wYWdlTnVtJyk7XHJcbiAgICBpZiAocXVlcnkgJiYgcGFnZU51bSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNlYXJjaFBob3RvcyhxdWVyeSwgcGFnZU51bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldFBob3RvcygxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHJlc2V0UGhvdG9zKCkge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncGhvdG9zLXF1ZXJ5JywgJycpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncGhvdG9zLXBhZ2VOdW0nLCAwKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBxdWVyeTogJycsXHJcbiAgICAgIHBhZ2VOdW06IDFcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgdGhpcy5nZXRQaG90b3MoMSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0XHJcbiAgICAgICAgc2VhcmNoUGhvdG9zPXt0aGlzLnNlYXJjaFBob3Rvc31cclxuICAgICAgICBzY3JvbGxQaG90b3M9e3RoaXMuc2Nyb2xsUGhvdG9zfVxyXG4gICAgICAgIHJlc2V0UGhvdG9zPXt0aGlzLnJlc2V0UGhvdG9zfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzUwJScgfX0+TG9hZGluZy4uLjwvaDI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxNYWluIGRhdGE9e3RoaXMuc3RhdGUuaW1hZ2VzfSBhcGlLZXk9e0FQSWtleX0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=