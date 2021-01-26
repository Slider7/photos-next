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

            case 6:
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
          lineNumber: 106,
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
          lineNumber: 112,
          columnNumber: 11
        }
      }, "Loading...") : __jsx(_components_Main_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        data: this.state.images,
        apiKey: APIkey,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBUElrZXkiLCJBcHAiLCJwYWdlTnVtIiwidW5zcGxhc2giLCJnZXQiLCJwYXJhbXMiLCJwZXJfcGFnZSIsInBhZ2UiLCJyZXNwb25jZSIsInNldFN0YXRlIiwiaW1hZ2VzIiwiZGF0YSIsInJlc3VsdHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJpc0xvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJzZWFyY2hQaG90b3MiLCJiaW5kIiwic2Nyb2xsUGhvdG9zIiwicmVzZXRQaG90b3MiLCJzdGF0ZSIsInF1ZXJ5IiwiZmV0Y2hSZXN1bHQiLCJ0b3RhbCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImV2dCIsInRhcmdldCIsImlkIiwiZ2V0UGhvdG9zIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQ1Ysa0VBREY7O0lBR3FCQyxHOzs7OztBQUNuQixpQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLGtaQWNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0MscUJBQVAsMkRBQWlCLENBQWpCO0FBQUE7QUFBQSxxQkFDYUMsc0RBQVEsQ0FBQ0MsR0FBVCxDQUFhLGVBQWIsRUFBOEI7QUFDbkRDLHNCQUFNLEVBQUU7QUFBRUMsMEJBQVEsRUFBRSxFQUFaO0FBQWdCQyxzQkFBSSxFQUFFTDtBQUF0QjtBQUQyQyxlQUE5QixDQURiOztBQUFBO0FBQ0pNLHNCQURJOztBQUlWLG9CQUFLQyxRQUFMLENBQWM7QUFBRUMsc0JBQU0sRUFBRUYsUUFBUSxDQUFDRyxJQUFULENBQWNDO0FBQXhCLGVBQWQ7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QUwsQ0FBYztBQUNaaUIsdUJBQUssRUFBRSxFQURLO0FBRVp4Qix5QkFBTyxFQUFFO0FBRkcsaUJBQWQ7O3VCQUlNLEtBQUtnQyxTQUFMLENBQWUsQ0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR0M7QUFDUCxhQUNFLE1BQUMsOERBQUQ7QUFDRSxvQkFBWSxFQUFFLEtBQUtiLFlBRHJCO0FBRUUsb0JBQVksRUFBRSxLQUFLRSxZQUZyQjtBQUdFLG1CQUFXLEVBQUUsS0FBS0MsV0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtHLEtBQUtDLEtBQUwsQ0FBV1AsU0FBWCxHQUNDO0FBQUksYUFBSyxFQUFFO0FBQUVpQixtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLG1CQUFTLEVBQUU7QUFBbEMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELEdBR0MsTUFBQyw0REFBRDtBQUFNLFlBQUksRUFBRSxLQUFLWCxLQUFMLENBQVdmLE1BQXZCO0FBQStCLGNBQU0sRUFBRVYsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJKLENBREY7QUFhRDs7OztFQTFHOEJxQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44MjFjMGFhOGI1ZTczOGZjMTkyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgdW5zcGxhc2ggZnJvbSAnLi4vYXBpL3Vuc3BsYXNoJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbi5qcyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vYWJvdXQnO1xyXG5cclxuY29uc3QgQVBJa2V5ID1cclxuICAnYWRkNzAyOWFmNTU3YTkzNGM4NzM3ZGQyNTk0ZDIzNDVhNGFlMzdkMWJmMTU0ZTUyNGRmNWYwN2Q5MDU0ZGFmMic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VhcmNoUGhvdG9zID0gdGhpcy5zZWFyY2hQaG90b3MuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2Nyb2xsUGhvdG9zID0gdGhpcy5zY3JvbGxQaG90b3MuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVzZXRQaG90b3MgPSB0aGlzLnJlc2V0UGhvdG9zLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRQaG90b3MgPSBhc3luYyAocGFnZU51bSA9IDEpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgdW5zcGxhc2guZ2V0KCdzZWFyY2gvcGhvdG9zJywge1xyXG4gICAgICBwYXJhbXM6IHsgcGVyX3BhZ2U6IDE1LCBwYWdlOiBwYWdlTnVtIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogcmVzcG9uY2UuZGF0YS5yZXN1bHRzIH0pO1xyXG4gICAgXHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvP2NsaWVudF9pZD0ke0FQSWtleX0mcGVyX3BhZ2U9MzAmcGFnZT0ke3BhZ2VOdW19YFxyXG4gICAgKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oanNvbkRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2VzOiBqc29uRGF0YSxcclxuICAgICAgICAgIHBhZ2VOdW0sXHJcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0L/RgNC4INC30LDQv9GA0L7RgdC1INC00LDQvdC90YvRhTogJywgZXJyb3IpKTtcclxuICAgIFxyXG4gIH07XHJcblxyXG4gIGFzeW5jIHNlYXJjaFBob3RvcyhxdWVyeSwgcGFnZU51bSA9IDEpIHtcclxuICAgIGNvbnN0IGZldGNoUmVzdWx0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvcy8/Y2xpZW50X2lkPSR7QVBJa2V5fSZxdWVyeT0ke3F1ZXJ5fSZwYWdlPSR7cGFnZU51bX0mcGVyX3BhZ2U9MzBgXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgZmV0Y2hSZXN1bHQuanNvbigpO1xyXG4gICAgaWYgKGltYWdlcy50b3RhbCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaG90b3MtcXVlcnknLCBxdWVyeSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Bob3Rvcy1wYWdlTnVtJywgcGFnZU51bSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGltYWdlczogaW1hZ2VzLnJlc3VsdHMsXHJcbiAgICAgICAgcXVlcnksXHJcbiAgICAgICAgcGFnZU51bSxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2Nyb2xsUGhvdG9zKGV2dCkge1xyXG4gICAgbGV0IHBhZ2VOdW0gPSB0aGlzLnN0YXRlLnBhZ2VOdW07XHJcbiAgICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gJ3ByZXYzMCcgJiYgcGFnZU51bSA+IDEpIHBhZ2VOdW0gLT0gMTtcclxuICAgIGlmIChldnQudGFyZ2V0LmlkID09PSAnbmV4dDMwJykgcGFnZU51bSArPSAxO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucXVlcnkpIHtcclxuICAgICAgYXdhaXQgdGhpcy5zZWFyY2hQaG90b3ModGhpcy5zdGF0ZS5xdWVyeSwgcGFnZU51bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldFBob3RvcyhwYWdlTnVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLypjb25zdCBxdWVyeSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Bob3Rvcy1xdWVyeScpO1xyXG4gICAgY29uc3QgcGFnZU51bSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Bob3Rvcy1wYWdlTnVtJyk7XHJcbiAgICBpZiAocXVlcnkgJiYgcGFnZU51bSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNlYXJjaFBob3RvcyhxdWVyeSwgcGFnZU51bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldFBob3RvcygxKTtcclxuICAgIH0qL1xyXG4gICAgYXdhaXQgdGhpcy5nZXRQaG90b3MoMSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXNldFBob3RvcygpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Bob3Rvcy1xdWVyeScsICcnKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Bob3Rvcy1wYWdlTnVtJywgMCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICBwYWdlTnVtOiAxXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHRoaXMuZ2V0UGhvdG9zKDEpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHNlYXJjaFBob3Rvcz17dGhpcy5zZWFyY2hQaG90b3N9XHJcbiAgICAgICAgc2Nyb2xsUGhvdG9zPXt0aGlzLnNjcm9sbFBob3Rvc31cclxuICAgICAgICByZXNldFBob3Rvcz17dGhpcy5yZXNldFBob3Rvc31cclxuICAgICAgPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc1MCUnIH19PkxvYWRpbmcuLi48L2gyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TWFpbiBkYXRhPXt0aGlzLnN0YXRlLmltYWdlc30gYXBpS2V5PXtBUElrZXl9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9