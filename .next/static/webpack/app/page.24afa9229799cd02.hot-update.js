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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Componentes_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Componentes/Navbar */ \"(app-pages-browser)/./src/app/Componentes/Navbar.js\");\n/* harmony import */ var _Componentes_Buscador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Componentes/Buscador */ \"(app-pages-browser)/./src/app/Componentes/Buscador.js\");\n/* harmony import */ var _Componentes_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Componentes/Footer */ \"(app-pages-browser)/./src/app/Componentes/Footer.js\");\n/* harmony import */ var _Componentes_Contenedor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Componentes/Contenedor */ \"(app-pages-browser)/./src/app/Componentes/Contenedor.js\");\n/* harmony import */ var _Componentes_Donaciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Componentes/Donaciones */ \"(app-pages-browser)/./src/app/Componentes/Donaciones.js\");\n/* harmony import */ var _Componentes_Ayuda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Componentes/Ayuda */ \"(app-pages-browser)/./src/app/Componentes/Ayuda.js\");\n/* harmony import */ var _Componentes_Ayuda__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Componentes_Ayuda__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"inicio\");\n    const renderSection = ()=>{\n        switch(activeSection){\n            case \"donacion\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Donaciones__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 17,\n                    columnNumber: 16\n                }, this);\n            case \"ayuda\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Componentes_Ayuda__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 19,\n                    columnNumber: 16\n                }, this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Selecciona una secci\\xf3n en el Navbar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 21,\n                    columnNumber: 16\n                }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onSectionChange: setActiveSection\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Buscador__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Contenedor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: renderSection()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\app\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"N92jsHLlzwi3h/5s76o4ny92tpw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ1M7QUFDSTtBQUNKO0FBQ1E7QUFDRjtBQUNSO0FBRXpCLFNBQVNPOztJQUN0QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNVSxnQkFBZ0I7UUFDcEIsT0FBUUY7WUFDTixLQUFLO2dCQUNILHFCQUFPLDhEQUFDSCwrREFBUUE7Ozs7O1lBQ2xCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLDJEQUFLQTs7Ozs7WUFDZjtnQkFDRSxxQkFBTyw4REFBQ0s7OEJBQUk7Ozs7OztRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNBOzswQkFDQyw4REFBQ1YsMkRBQU1BO2dCQUFDVyxpQkFBaUJIOzs7Ozs7MEJBQ3pCLDhEQUFDUCw2REFBUUE7Ozs7OzBCQUVULDhEQUFDRSwrREFBVUE7MEJBQUVNOzs7Ozs7MEJBQ2IsOERBQUNQLDJEQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtHQXZCd0JJO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL0NvbXBvbmVudGVzL05hdmJhclwiO1xuaW1wb3J0IEJ1c2NhZG9yIGZyb20gXCIuL0NvbXBvbmVudGVzL0J1c2NhZG9yXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0NvbXBvbmVudGVzL0Zvb3RlclwiO1xuaW1wb3J0IENvbnRlbmVkb3IgZnJvbSBcIi4vQ29tcG9uZW50ZXMvQ29udGVuZWRvclwiO1xuaW1wb3J0IERvbmFjaW9uIGZyb20gXCIuL0NvbXBvbmVudGVzL0RvbmFjaW9uZXNcIjtcbmltcG9ydCBBeXVkYSBmcm9tIFwiLi9Db21wb25lbnRlcy9BeXVkYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZShcImluaWNpb1wiKTtcblxuICBjb25zdCByZW5kZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aXZlU2VjdGlvbikge1xuICAgICAgY2FzZSBcImRvbmFjaW9uXCI6XG4gICAgICAgIHJldHVybiA8RG9uYWNpb24gLz47XG4gICAgICBjYXNlIFwiYXl1ZGFcIjpcbiAgICAgICAgcmV0dXJuIDxBeXVkYSAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlNlbGVjY2lvbmEgdW5hIHNlY2Npw7NuIGVuIGVsIE5hdmJhcjwvZGl2PjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmJhciBvblNlY3Rpb25DaGFuZ2U9e3NldEFjdGl2ZVNlY3Rpb259IC8+XG4gICAgICA8QnVzY2Fkb3IgLz5cblxuICAgICAgPENvbnRlbmVkb3I+e3JlbmRlclNlY3Rpb24oKX08L0NvbnRlbmVkb3I+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJOYXZiYXIiLCJCdXNjYWRvciIsIkZvb3RlciIsIkNvbnRlbmVkb3IiLCJEb25hY2lvbiIsIkF5dWRhIiwiSG9tZSIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwicmVuZGVyU2VjdGlvbiIsImRpdiIsIm9uU2VjdGlvbkNoYW5nZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});