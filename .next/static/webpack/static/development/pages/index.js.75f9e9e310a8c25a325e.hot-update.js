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
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageNum = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
              _context.next = 3;
              return _this.getPhotos(1);

            case 3:
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
    key: "resetPhotos",
    value: function () {
      var _resetPhotos = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sessionStorage.setItem('photos-query', '');
                sessionStorage.setItem('photos-pageNum', 0);
                this.setState({
                  query: '',
                  pageNum: 1
                });
                _context2.next = 5;
                return this.getPhotos(1);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBUElrZXkiLCJBcHAiLCJwYWdlTnVtIiwiZ2V0UGhvdG9zIiwic2VhcmNoUGhvdG9zIiwiYmluZCIsInNjcm9sbFBob3RvcyIsInJlc2V0UGhvdG9zIiwic3RhdGUiLCJpbWFnZXMiLCJxdWVyeSIsImlzTG9hZGluZyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInNldFN0YXRlIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQ1Ysa0VBREY7O0lBR3FCQyxHOzs7OztBQUNuQixpQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLGtaQWNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU9DLHFCQUFQLDJEQUFpQixDQUFqQjtBQUFBO0FBQUEscUJBZ0VKLE1BQUtDLFNBQUwsQ0FBZSxDQUFmLENBaEVJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZEU7O0FBRVosVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix5R0FBcEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLHlHQUFwQjtBQUNBLFVBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIseUdBQW5CO0FBRUEsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRSxFQURHO0FBRVhDLFdBQUssRUFBRSxFQUZJO0FBR1hSLGFBQU8sRUFBRSxDQUhFO0FBSVhTLGVBQVMsRUFBRTtBQUpBLEtBQWI7QUFOWTtBQVliOzs7Ozs7Ozs7O0FBc0VDQyw4QkFBYyxDQUFDQyxPQUFmLENBQXVCLGNBQXZCLEVBQXVDLEVBQXZDO0FBQ0FELDhCQUFjLENBQUNDLE9BQWYsQ0FBdUIsZ0JBQXZCLEVBQXlDLENBQXpDO0FBQ0EscUJBQUtDLFFBQUwsQ0FBYztBQUNaSix1QkFBSyxFQUFFLEVBREs7QUFFWlIseUJBQU8sRUFBRTtBQUZHLGlCQUFkOzt1QkFJTSxLQUFLQyxTQUFMLENBQWUsQ0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR0M7QUFDUCxhQUNFLE1BQUMsOERBQUQ7QUFDRSxvQkFBWSxFQUFFLEtBQUtDLFlBRHJCO0FBRUUsb0JBQVksRUFBRSxLQUFLRSxZQUZyQjtBQUdFLG1CQUFXLEVBQUUsS0FBS0MsV0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtHLEtBQUtDLEtBQUwsQ0FBV0csU0FBWCxHQUNDO0FBQUksYUFBSyxFQUFFO0FBQUVJLG1CQUFTLEVBQUUsUUFBYjtBQUF1QkMsbUJBQVMsRUFBRTtBQUFsQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsR0FHQyxNQUFDLDREQUFEO0FBQU0sWUFBSSxFQUFFLEtBQUtSLEtBQUwsQ0FBV0MsTUFBdkI7QUFBK0IsY0FBTSxFQUFFVCxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkosQ0FERjtBQWFEOzs7O0VBMUc4QmlCLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc1ZjllOWUzMTBhOGMyNWEzMjVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB1bnNwbGFzaCBmcm9tICcuLi9hcGkvdW5zcGxhc2gnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluLmpzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9hYm91dCc7XHJcblxyXG5jb25zdCBBUElrZXkgPVxyXG4gICdhZGQ3MDI5YWY1NTdhOTM0Yzg3MzdkZDI1OTRkMjM0NWE0YWUzN2QxYmYxNTRlNTI0ZGY1ZjA3ZDkwNTRkYWYyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZWFyY2hQaG90b3MgPSB0aGlzLnNlYXJjaFBob3Rvcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zY3JvbGxQaG90b3MgPSB0aGlzLnNjcm9sbFBob3Rvcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldFBob3RvcyA9IHRoaXMucmVzZXRQaG90b3MuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICBxdWVyeTogJycsXHJcbiAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFBob3RvcyA9IGFzeW5jIChwYWdlTnVtID0gMSkgPT4ge1xyXG4gICAgLypjb25zdCByZXNwb25jZSA9IGF3YWl0IHVuc3BsYXNoLmdldCgnc2VhcmNoL3Bob3RvcycsIHtcclxuICAgICAgcGFyYW1zOiB7IHBlcl9wYWdlOiAxNSwgcGFnZTogcGFnZU51bSB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZXM6IHJlc3BvbmNlLmRhdGEucmVzdWx0cyB9KTtcclxuICAgIFxyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zLz9jbGllbnRfaWQ9JHtBUElrZXl9JnBlcl9wYWdlPTMwJnBhZ2U9JHtwYWdlTnVtfWBcclxuICAgIClcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGpzb25EYXRhID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlczoganNvbkRhdGEsXHJcbiAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0L/RgNC+0YHQtSDQtNCw0L3QvdGL0YU6ICcsIGVycm9yKSk7XHJcbiAgICBcclxuICB9O1xyXG5cclxuICBhc3luYyBzZWFyY2hQaG90b3MocXVlcnksIHBhZ2VOdW0gPSAxKSB7XHJcbiAgICBjb25zdCBmZXRjaFJlc3VsdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3MvP2NsaWVudF9pZD0ke0FQSWtleX0mcXVlcnk9JHtxdWVyeX0mcGFnZT0ke3BhZ2VOdW19JnBlcl9wYWdlPTMwYFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IGZldGNoUmVzdWx0Lmpzb24oKTtcclxuICAgIGlmIChpbWFnZXMudG90YWwgPT09IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgICBxdWVyeTogJycsXHJcbiAgICAgICAgcGFnZU51bTogMSxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncGhvdG9zLXF1ZXJ5JywgcXVlcnkpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaG90b3MtcGFnZU51bScsIHBhZ2VOdW0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbWFnZXM6IGltYWdlcy5yZXN1bHRzLFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIHBhZ2VOdW0sXHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNjcm9sbFBob3RvcyhldnQpIHtcclxuICAgIGxldCBwYWdlTnVtID0gdGhpcy5zdGF0ZS5wYWdlTnVtO1xyXG4gICAgaWYgKGV2dC50YXJnZXQuaWQgPT09ICdwcmV2MzAnICYmIHBhZ2VOdW0gPiAxKSBwYWdlTnVtIC09IDE7XHJcbiAgICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gJ25leHQzMCcpIHBhZ2VOdW0gKz0gMTtcclxuICAgIGlmICh0aGlzLnN0YXRlLnF1ZXJ5KSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2VhcmNoUGhvdG9zKHRoaXMuc3RhdGUucXVlcnksIHBhZ2VOdW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRQaG90b3MocGFnZU51bSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8qY29uc3QgcXVlcnkgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwaG90b3MtcXVlcnknKTtcclxuICAgIGNvbnN0IHBhZ2VOdW0gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwaG90b3MtcGFnZU51bScpO1xyXG4gICAgaWYgKHF1ZXJ5ICYmIHBhZ2VOdW0pIHtcclxuICAgICAgYXdhaXQgdGhpcy5zZWFyY2hQaG90b3MocXVlcnksIHBhZ2VOdW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXRQaG90b3MoMSk7XHJcbiAgICB9Ki9cclxuICAgIGF3YWl0IHRoaXMuZ2V0UGhvdG9zKDEpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVzZXRQaG90b3MoKSB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaG90b3MtcXVlcnknLCAnJyk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaG90b3MtcGFnZU51bScsIDApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgcGFnZU51bTogMVxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCB0aGlzLmdldFBob3RvcygxKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXRcclxuICAgICAgICBzZWFyY2hQaG90b3M9e3RoaXMuc2VhcmNoUGhvdG9zfVxyXG4gICAgICAgIHNjcm9sbFBob3Rvcz17dGhpcy5zY3JvbGxQaG90b3N9XHJcbiAgICAgICAgcmVzZXRQaG90b3M9e3RoaXMucmVzZXRQaG90b3N9XHJcbiAgICAgID5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnNTAlJyB9fT5Mb2FkaW5nLi4uPC9oMj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPE1haW4gZGF0YT17dGhpcy5zdGF0ZS5pbWFnZXN9IGFwaUtleT17QVBJa2V5fSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==