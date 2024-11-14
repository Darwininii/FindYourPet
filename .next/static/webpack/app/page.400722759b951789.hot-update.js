/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Componentes/Ayuda.js":
/*!**************************************!*\
  !*** ./src/app/Componentes/Ayuda.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Componentes_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Componentes/Navbar */ \"(app-pages-browser)/./src/app/Componentes/Navbar.js\");\n/* harmony import */ var _Componentes_Buscador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Componentes/Buscador */ \"(app-pages-browser)/./src/app/Componentes/Buscador.js\");\n/* harmony import */ var _Componentes_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Componentes/Footer */ \"(app-pages-browser)/./src/app/Componentes/Footer.js\");\n/* harmony import */ var _Componentes_Donaciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Componentes/Donaciones */ \"(app-pages-browser)/./src/app/Componentes/Donaciones.js\");\n/* harmony import */ var _Componentes_Ayuda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Componentes/Ayuda */ \"(app-pages-browser)/./src/app/Componentes/Ayuda.js\");\n/* harmony import */ var _Componentes_Ayuda__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Componentes_Ayuda__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"inicio\");\n    const renderSection = ()=>{\n        switch(activeSection){\n            case \"donacion\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Donaciones__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 16,\n                    columnNumber: 16\n                }, this);\n            case \"ayuda\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Componentes_Ayuda__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 18,\n                    columnNumber: 16\n                }, this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Buscador__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 20,\n                    columnNumber: 16\n                }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onSectionChange: setActiveSection\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: renderSection()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"N92jsHLlzwi3h/5s76o4ny92tpw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDUztBQUNJO0FBQ0o7QUFDTTtBQUNSO0FBRXpCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNUyxnQkFBZ0I7UUFDcEIsT0FBUUY7WUFDTixLQUFLO2dCQUNILHFCQUFPLDhEQUFDSCwrREFBUUE7Ozs7O1lBQ2xCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLDJEQUFLQTs7Ozs7WUFDZjtnQkFDRSxxQkFBTyw4REFBQ0gsNkRBQVFBOzs7OztRQUNwQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNROzswQkFFQyw4REFBQ1QsMkRBQU1BO2dCQUFDVSxpQkFBaUJIOzs7Ozs7MEJBQ3pCLDhEQUFDSTswQkFBTUg7Ozs7OzswQkFDUCw4REFBQ04sMkRBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBdEJ3Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vQ29tcG9uZW50ZXMvTmF2YmFyXCI7XG5pbXBvcnQgQnVzY2Fkb3IgZnJvbSBcIi4vQ29tcG9uZW50ZXMvQnVzY2Fkb3JcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vQ29tcG9uZW50ZXMvRm9vdGVyXCI7XG5pbXBvcnQgRG9uYWNpb24gZnJvbSBcIi4vQ29tcG9uZW50ZXMvRG9uYWNpb25lc1wiO1xuaW1wb3J0IEF5dWRhIGZyb20gXCIuL0NvbXBvbmVudGVzL0F5dWRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uLCBzZXRBY3RpdmVTZWN0aW9uXSA9IHVzZVN0YXRlKFwiaW5pY2lvXCIpO1xuXG4gIGNvbnN0IHJlbmRlclNlY3Rpb24gPSAoKSA9PiB7XG4gICAgc3dpdGNoIChhY3RpdmVTZWN0aW9uKSB7XG4gICAgICBjYXNlIFwiZG9uYWNpb25cIjpcbiAgICAgICAgcmV0dXJuIDxEb25hY2lvbiAvPjtcbiAgICAgIGNhc2UgXCJheXVkYVwiOlxuICAgICAgICByZXR1cm4gPEF5dWRhIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxCdXNjYWRvciAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIEFxdcOtIHBhc2Ftb3Mgc2V0QWN0aXZlU2VjdGlvbiBjb21vIHByb3AgYSBOYXZiYXIgKi99XG4gICAgICA8TmF2YmFyIG9uU2VjdGlvbkNoYW5nZT17c2V0QWN0aXZlU2VjdGlvbn0gLz5cbiAgICAgIDxtYWluPntyZW5kZXJTZWN0aW9uKCl9PC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTmF2YmFyIiwiQnVzY2Fkb3IiLCJGb290ZXIiLCJEb25hY2lvbiIsIkF5dWRhIiwiSG9tZSIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwicmVuZGVyU2VjdGlvbiIsImRpdiIsIm9uU2VjdGlvbkNoYW5nZSIsIm1haW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});