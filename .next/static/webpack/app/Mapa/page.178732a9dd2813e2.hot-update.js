"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Mapa/page",{

/***/ "(app-pages-browser)/./src/Componentes/Boton.js":
/*!**********************************!*\
  !*** ./src/Componentes/Boton.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Boton = (param)=>{\n    let { text = \"Send\", onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"flex items-center bg-blue-600 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3\",\n        children: [\n            text,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"w-5 h-5\",\n                stroke: \"currentColor\",\n                strokeWidth: \"1.5\",\n                viewBox: \"0 0 24 24\",\n                fill: \"none\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5\",\n                    strokeLinejoin: \"round\",\n                    strokeLinecap: \"round\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Boton.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Boton.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Boton.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Boton;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Boton);\nvar _c;\n$RefreshReg$(_c, \"Boton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRlcy9Cb3Rvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxRQUFRO1FBQUMsRUFBRUMsT0FBTyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0M7UUFDQ0QsU0FBU0E7UUFDVEUsV0FBVTs7WUFFVEg7MEJBQ0QsOERBQUNJO2dCQUNDRCxXQUFVO2dCQUNWRSxRQUFPO2dCQUNQQyxhQUFZO2dCQUNaQyxTQUFRO2dCQUNSQyxNQUFLO2dCQUNMQyxPQUFNOzBCQUVOLDRFQUFDQztvQkFDQ0MsR0FBRTtvQkFDRkMsZ0JBQWU7b0JBQ2ZDLGVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0tBdkJNZDtBQXlCTixpRUFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRlcy9Cb3Rvbi5qcz80MzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEJvdG9uID0gKHsgdGV4dCA9IFwiU2VuZFwiLCBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGdhcC0xIHB4LTQgcHktMiBjdXJzb3ItcG9pbnRlciBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVzdCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNDAwIGR1cmF0aW9uLTMwMCBob3ZlcjpnYXAtMiBob3Zlcjp0cmFuc2xhdGUteC0zXCJcclxuICAgID5cclxuICAgICAge3RleHR9XHJcbiAgICAgIDxzdmdcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01XCJcclxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk02IDEyIDMuMjY5IDMuMTI1QTU5Ljc2OSA1OS43NjkgMCAwIDEgMjEuNDg1IDEyIDU5Ljc2OCA1OS43NjggMCAwIDEgMy4yNyAyMC44NzVMNS45OTkgMTJabTAgMGg3LjVcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvdG9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3RvbiIsInRleHQiLCJvbkNsaWNrIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwic3ZnIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZUxpbmVjYXAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Componentes/Boton.js\n"));

/***/ })

});