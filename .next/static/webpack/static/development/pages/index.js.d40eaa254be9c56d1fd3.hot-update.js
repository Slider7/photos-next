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









var _jsxFileName = "C:\\Projects\\photos-next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






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
              return _api_unsplash__WEBPACK_IMPORTED_MODULE_11__["unsplash"].get('search/photos', {
                params: {
                  API_DEFAULT_PARAMS: _api_unsplash__WEBPACK_IMPORTED_MODULE_11__["API_DEFAULT_PARAMS"],
                  page: pageNum
                }
              });

            case 3:
              responce = _context.sent;

              _this.setState({
                images: responce.data.results
              });

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
      var _searchPhotos = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(q) {
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
                return _api_unsplash__WEBPACK_IMPORTED_MODULE_11__["unsplash"].get('search/photos', {
                  params: {
                    API_DEFAULT_PARAMS: _api_unsplash__WEBPACK_IMPORTED_MODULE_11__["API_DEFAULT_PARAMS"],
                    query: q,
                    page: pageNum
                  }
                });

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
                  _context4.next = 5;
                  break;
                }

                _context4.next = 7;
                break;

              case 5:
                _context4.next = 7;
                return this.getPhotos(1);

              case 7:
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
          lineNumber: 93,
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
          lineNumber: 99,
          columnNumber: 11
        }
      }, "Loading...") : __jsx(_components_Main_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        data: this.state.images,
        apiKey: APIkey,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwYWdlTnVtIiwidW5zcGxhc2giLCJnZXQiLCJwYXJhbXMiLCJBUElfREVGQVVMVF9QQVJBTVMiLCJwYWdlIiwicmVzcG9uY2UiLCJzZXRTdGF0ZSIsImltYWdlcyIsImRhdGEiLCJyZXN1bHRzIiwic2VhcmNoUGhvdG9zIiwiYmluZCIsInNjcm9sbFBob3RvcyIsInJlc2V0UGhvdG9zIiwic3RhdGUiLCJxdWVyeSIsImlzTG9hZGluZyIsInEiLCJmZXRjaFJlc3VsdCIsImpzb24iLCJ0b3RhbCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImV2dCIsInRhcmdldCIsImlkIiwiZ2V0UGhvdG9zIiwiZ2V0SXRlbSIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIkFQSWtleSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0lBRXFCQSxHOzs7OztBQUNuQixpQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLGtaQWNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0MscUJBQVAsMkRBQWlCLENBQWpCO0FBQUE7QUFBQSxxQkFDYUMsdURBQVEsQ0FBQ0MsR0FBVCxDQUFhLGVBQWIsRUFBOEI7QUFDbkRDLHNCQUFNLEVBQUU7QUFDTkMsb0NBQWtCLEVBQWxCQSxpRUFETTtBQUVOQyxzQkFBSSxFQUFFTDtBQUZBO0FBRDJDLGVBQTlCLENBRGI7O0FBQUE7QUFDSk0sc0JBREk7O0FBT1Ysb0JBQUtDLFFBQUwsQ0FBYztBQUFFQyxzQkFBTSxFQUFFRixRQUFRLENBQUNHLElBQVQsQ0FBY0M7QUFBeEIsZUFBZDs7QUFQVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWRFOztBQUVaLFVBQUtDLFlBQUwsR0FBb0Is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LEVBQUUsS0FBS0MsV0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtHLEtBQUtDLEtBQUwsQ0FBV0UsU0FBWCxHQUNDO0FBQUksYUFBSyxFQUFFO0FBQUVZLG1CQUFTLEVBQUUsUUFBYjtBQUF1QkMsbUJBQVMsRUFBRTtBQUFsQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsR0FHQyxNQUFDLDREQUFEO0FBQU0sWUFBSSxFQUFFLEtBQUtmLEtBQUwsQ0FBV1AsTUFBdkI7QUFBK0IsY0FBTSxFQUFFdUIsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJKLENBREY7QUFhRDs7OztFQWxHOEJDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQ0MGVhYTI1NGJlOWM1NmQxZmQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmltcG9ydCB7IHVuc3BsYXNoLCBBUElfREVGQVVMVF9QQVJBTVMgfSBmcm9tICcuLi9hcGkvdW5zcGxhc2gnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZWFyY2hQaG90b3MgPSB0aGlzLnNlYXJjaFBob3Rvcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zY3JvbGxQaG90b3MgPSB0aGlzLnNjcm9sbFBob3Rvcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldFBob3RvcyA9IHRoaXMucmVzZXRQaG90b3MuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICBxdWVyeTogJycsXHJcbiAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFBob3RvcyA9IGFzeW5jIChwYWdlTnVtID0gMSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCB1bnNwbGFzaC5nZXQoJ3NlYXJjaC9waG90b3MnLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIEFQSV9ERUZBVUxUX1BBUkFNUyxcclxuICAgICAgICBwYWdlOiBwYWdlTnVtXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogcmVzcG9uY2UuZGF0YS5yZXN1bHRzIH0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIHNlYXJjaFBob3RvcyhxLCBwYWdlTnVtID0gMSkge1xyXG4gICAgY29uc3QgZmV0Y2hSZXN1bHQgPSBhd2FpdCB1bnNwbGFzaC5nZXQoJ3NlYXJjaC9waG90b3MnLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIEFQSV9ERUZBVUxUX1BBUkFNUyxcclxuICAgICAgICBxdWVyeTogcSxcclxuICAgICAgICBwYWdlOiBwYWdlTnVtXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgZmV0Y2hSZXN1bHQuanNvbigpO1xyXG4gICAgaWYgKGltYWdlcy50b3RhbCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaG90b3MtcXVlcnknLCBxdWVyeSk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Bob3Rvcy1wYWdlTnVtJywgcGFnZU51bSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGltYWdlczogaW1hZ2VzLnJlc3VsdHMsXHJcbiAgICAgICAgcXVlcnksXHJcbiAgICAgICAgcGFnZU51bSxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2Nyb2xsUGhvdG9zKGV2dCkge1xyXG4gICAgbGV0IHBhZ2VOdW0gPSB0aGlzLnN0YXRlLnBhZ2VOdW07XHJcbiAgICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gJ3ByZXYzMCcgJiYgcGFnZU51bSA+IDEpIHBhZ2VOdW0gLT0gMTtcclxuICAgIGlmIChldnQudGFyZ2V0LmlkID09PSAnbmV4dDMwJykgcGFnZU51bSArPSAxO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucXVlcnkpIHtcclxuICAgICAgYXdhaXQgdGhpcy5zZWFyY2hQaG90b3ModGhpcy5zdGF0ZS5xdWVyeSwgcGFnZU51bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldFBob3RvcyhwYWdlTnVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgcXVlcnkgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwaG90b3MtcXVlcnknKTtcclxuICAgIGNvbnN0IHBhZ2VOdW0gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwaG90b3MtcGFnZU51bScpO1xyXG4gICAgaWYgKHF1ZXJ5ICYmIHBhZ2VOdW0pIHtcclxuICAgICAgLy9hd2FpdCB0aGlzLnNlYXJjaFBob3RvcyhxdWVyeSwgcGFnZU51bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmdldFBob3RvcygxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHJlc2V0UGhvdG9zKCkge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncGhvdG9zLXF1ZXJ5JywgJycpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncGhvdG9zLXBhZ2VOdW0nLCAwKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBxdWVyeTogJycsXHJcbiAgICAgIHBhZ2VOdW06IDFcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgdGhpcy5nZXRQaG90b3MoMSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0XHJcbiAgICAgICAgc2VhcmNoUGhvdG9zPXt0aGlzLnNlYXJjaFBob3Rvc31cclxuICAgICAgICBzY3JvbGxQaG90b3M9e3RoaXMuc2Nyb2xsUGhvdG9zfVxyXG4gICAgICAgIHJlc2V0UGhvdG9zPXt0aGlzLnJlc2V0UGhvdG9zfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzUwJScgfX0+TG9hZGluZy4uLjwvaDI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxNYWluIGRhdGE9e3RoaXMuc3RhdGUuaW1hZ2VzfSBhcGlLZXk9e0FQSWtleX0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=