"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Componentes_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Componentes/Navbar */ \"(app-pages-browser)/./src/app/Componentes/Navbar.js\");\n/* harmony import */ var _Componentes_Buscador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Componentes/Buscador */ \"(app-pages-browser)/./src/app/Componentes/Buscador.js\");\n/* harmony import */ var _Componentes_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Componentes/Footer */ \"(app-pages-browser)/./src/app/Componentes/Footer.js\");\n/* harmony import */ var _Componentes_Donaciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Componentes/Donaciones */ \"(app-pages-browser)/./src/app/Componentes/Donaciones.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [isDonacionOpen, setIsDonacionOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleDonacionClick = ()=>setIsDonacionOpen(true);\n    const handleCloseModal = ()=>setIsDonacionOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onDonacionClick: handleDonacionClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Buscador__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            isDonacionOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Donaciones__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClose: handleCloseModal\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"sa8IYesh/MV/4ISU1gTwInMUTD4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ1M7QUFDSTtBQUNKO0FBQ007QUFFakMsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFckQsTUFBTVEsc0JBQXNCLElBQU1ELGtCQUFrQjtJQUNwRCxNQUFNRSxtQkFBbUIsSUFBTUYsa0JBQWtCO0lBRWpELHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNULDJEQUFNQTtnQkFBQ1UsaUJBQWlCSDs7Ozs7OzBCQUN6Qiw4REFBQ04sNkRBQVFBOzs7OztZQUVSSSxnQ0FBa0IsOERBQUNGLCtEQUFRQTtnQkFBQ1EsU0FBU0g7Ozs7OzswQkFFdEMsOERBQUNOLDJEQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtHQWhCd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL0NvbXBvbmVudGVzL05hdmJhclwiO1xuaW1wb3J0IEJ1c2NhZG9yIGZyb20gXCIuL0NvbXBvbmVudGVzL0J1c2NhZG9yXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0NvbXBvbmVudGVzL0Zvb3RlclwiO1xuaW1wb3J0IERvbmFjaW9uIGZyb20gXCIuL0NvbXBvbmVudGVzL0RvbmFjaW9uZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lzRG9uYWNpb25PcGVuLCBzZXRJc0RvbmFjaW9uT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRG9uYWNpb25DbGljayA9ICgpID0+IHNldElzRG9uYWNpb25PcGVuKHRydWUpO1xuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4gc2V0SXNEb25hY2lvbk9wZW4oZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXZiYXIgb25Eb25hY2lvbkNsaWNrPXtoYW5kbGVEb25hY2lvbkNsaWNrfSAvPlxuICAgICAgPEJ1c2NhZG9yIC8+XG5cbiAgICAgIHtpc0RvbmFjaW9uT3BlbiAmJiA8RG9uYWNpb24gb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gLz59XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk5hdmJhciIsIkJ1c2NhZG9yIiwiRm9vdGVyIiwiRG9uYWNpb24iLCJIb21lIiwiaXNEb25hY2lvbk9wZW4iLCJzZXRJc0RvbmFjaW9uT3BlbiIsImhhbmRsZURvbmFjaW9uQ2xpY2siLCJoYW5kbGVDbG9zZU1vZGFsIiwiZGl2Iiwib25Eb25hY2lvbkNsaWNrIiwib25DbG9zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});