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

/***/ "(app-pages-browser)/./src/Componentes/Mapa.js":
/*!*********************************!*\
  !*** ./src/Componentes/Mapa.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Mapa = ()=>{\n    _s();\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Referencia para el mapa\n    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [marker, setMarker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [direccion, setDireccion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ciudad, setCiudad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [barrio, setBarrio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Inicializa el mapa al cargar el componente\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadMap = ()=>{\n            const google1 = window.google;\n            const mapInstance = new google1.maps.Map(mapRef.current, {\n                center: {\n                    lat: 4.570868,\n                    lng: -74.297333\n                },\n                zoom: 13\n            });\n            mapInstance.addListener(\"click\", (e)=>{\n                const lat = e.latLng.lat();\n                const lng = e.latLng.lng();\n                // Coloca un marcador en la ubicación seleccionada\n                if (marker) {\n                    marker.setPosition(e.latLng);\n                } else {\n                    const newMarker = new google1.maps.Marker({\n                        position: e.latLng,\n                        map: mapInstance\n                    });\n                    setMarker(newMarker);\n                }\n                // Invierte geocoding para obtener dirección (opcional)\n                fetch(\"https://maps.googleapis.com/maps/api/geocode/json?latlng=\".concat(lat, \",\").concat(lng, \"&key=YOUR_GOOGLE_MAPS_API_KEY\")).then((response)=>response.json()).then((data)=>{\n                    if (data.results[0]) {\n                        setDireccion(data.results[0].formatted_address);\n                    }\n                });\n            });\n            setMap(mapInstance);\n        };\n        // Verifica si el script de Google Maps ya está cargado\n        if (!window.google) {\n            const scriptExists = document.querySelector('script[src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places\"]');\n            // Solo carga el script si no está presente\n            if (!scriptExists) {\n                const script = document.createElement(\"script\");\n                script.src = \"https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places\";\n                script.async = true;\n                script.defer = true;\n                script.onload = loadMap;\n                document.head.appendChild(script);\n            } else {\n                // Si ya está cargado, simplemente inicializa el mapa\n                loadMap();\n            }\n        } else {\n            loadMap();\n        }\n    }, []);\n    const handleBuscar = ()=>{\n        const query = \"\".concat(direccion, \", \").concat(ciudad, \", \").concat(barrio);\n        const geocoder = new window.google.maps.Geocoder();\n        geocoder.geocode({\n            address: query\n        }, (results, status)=>{\n            if (status === \"OK\" && results[0]) {\n                const location = results[0].geometry.location;\n                map.setCenter(location);\n                map.setZoom(15);\n                if (marker) {\n                    marker.setPosition(location);\n                } else {\n                    const newMarker = new google.maps.Marker({\n                        position: location,\n                        map: map\n                    });\n                    setMarker(newMarker);\n                }\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Direcci\\xf3n\",\n                        value: direccion,\n                        onChange: (e)=>setDireccion(e.target.value),\n                        className: \"border rounded p-2 text-black\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Mapa.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Ciudad\",\n                        value: ciudad,\n                        onChange: (e)=>setCiudad(e.target.value),\n                        className: \"border rounded p-2 text-black\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Mapa.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Barrio\",\n                        value: barrio,\n                        onChange: (e)=>setBarrio(e.target.value),\n                        className: \"border rounded p-2 text-black\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Mapa.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleBuscar,\n                        className: \"bg-blue-600 text-white rounded p-2 hover:bg-blue-500\",\n                        children: \"Buscar en el mapa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Mapa.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Mapa.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: mapRef,\n                className: \"flex-grow rounded border\",\n                style: {\n                    height: \"400px\",\n                    width: \"700px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Mapa.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DARWIN\\\\Desktop\\\\Codigo-Abierto\\\\Proyecto\\\\proyecto-pet\\\\src\\\\Componentes\\\\Mapa.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Mapa, \"q+Z1K3LtgP3P141DLt8ss/oTcgo=\");\n_c = Mapa;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mapa);\nvar _c;\n$RefreshReg$(_c, \"Mapa\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRlcy9NYXBhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVvRDtBQUVwRCxNQUFNRyxPQUFPOztJQUNYLE1BQU1DLFNBQVNILDZDQUFNQSxDQUFDLE9BQU8sMEJBQTBCO0lBQ3ZELE1BQU0sQ0FBQ0ksS0FBS0MsT0FBTyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFFckMsNkNBQTZDO0lBQzdDRixnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFVBQVU7WUFDZCxNQUFNQyxVQUFTQyxPQUFPRCxNQUFNO1lBRTVCLE1BQU1FLGNBQWMsSUFBSUYsUUFBT0csSUFBSSxDQUFDQyxHQUFHLENBQUNoQixPQUFPaUIsT0FBTyxFQUFFO2dCQUN0REMsUUFBUTtvQkFBRUMsS0FBSztvQkFBVUMsS0FBSyxDQUFDO2dCQUFVO2dCQUN6Q0MsTUFBTTtZQUNSO1lBRUFQLFlBQVlRLFdBQVcsQ0FBQyxTQUFTLENBQUNDO2dCQUNoQyxNQUFNSixNQUFNSSxFQUFFQyxNQUFNLENBQUNMLEdBQUc7Z0JBQ3hCLE1BQU1DLE1BQU1HLEVBQUVDLE1BQU0sQ0FBQ0osR0FBRztnQkFFeEIsa0RBQWtEO2dCQUNsRCxJQUFJakIsUUFBUTtvQkFDVkEsT0FBT3NCLFdBQVcsQ0FBQ0YsRUFBRUMsTUFBTTtnQkFDN0IsT0FBTztvQkFDTCxNQUFNRSxZQUFZLElBQUlkLFFBQU9HLElBQUksQ0FBQ1ksTUFBTSxDQUFDO3dCQUN2Q0MsVUFBVUwsRUFBRUMsTUFBTTt3QkFDbEJ2QixLQUFLYTtvQkFDUDtvQkFDQVYsVUFBVXNC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b25lbnRlcy9NYXBhLmpzPzY4ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1hcGEgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmKG51bGwpOyAvLyBSZWZlcmVuY2lhIHBhcmEgZWwgbWFwYVxyXG4gIGNvbnN0IFttYXAsIHNldE1hcF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWFya2VyLCBzZXRNYXJrZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RpcmVjY2lvbiwgc2V0RGlyZWNjaW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjaXVkYWQsIHNldENpdWRhZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmFycmlvLCBzZXRCYXJyaW9dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vIEluaWNpYWxpemEgZWwgbWFwYSBhbCBjYXJnYXIgZWwgY29tcG9uZW50ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkTWFwID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBnb29nbGUgPSB3aW5kb3cuZ29vZ2xlO1xyXG5cclxuICAgICAgY29uc3QgbWFwSW5zdGFuY2UgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcFJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgY2VudGVyOiB7IGxhdDogNC41NzA4NjgsIGxuZzogLTc0LjI5NzMzMyB9LCAvLyBDZW50cm8gaW5pY2lhbCAoQ29sb21iaWEpXHJcbiAgICAgICAgem9vbTogMTMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbWFwSW5zdGFuY2UuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhdCA9IGUubGF0TG5nLmxhdCgpO1xyXG4gICAgICAgIGNvbnN0IGxuZyA9IGUubGF0TG5nLmxuZygpO1xyXG5cclxuICAgICAgICAvLyBDb2xvY2EgdW4gbWFyY2Fkb3IgZW4gbGEgdWJpY2FjacOzbiBzZWxlY2Npb25hZGFcclxuICAgICAgICBpZiAobWFya2VyKSB7XHJcbiAgICAgICAgICBtYXJrZXIuc2V0UG9zaXRpb24oZS5sYXRMbmcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdNYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGUubGF0TG5nLFxyXG4gICAgICAgICAgICBtYXA6IG1hcEluc3RhbmNlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRNYXJrZXIobmV3TWFya2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEludmllcnRlIGdlb2NvZGluZyBwYXJhIG9idGVuZXIgZGlyZWNjacOzbiAob3BjaW9uYWwpXHJcbiAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9JHtsYXR9LCR7bG5nfSZrZXk9WU9VUl9HT09HTEVfTUFQU19BUElfS0VZYFxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0c1swXSkge1xyXG4gICAgICAgICAgICAgIHNldERpcmVjY2lvbihkYXRhLnJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRNYXAobWFwSW5zdGFuY2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBWZXJpZmljYSBzaSBlbCBzY3JpcHQgZGUgR29vZ2xlIE1hcHMgeWEgZXN0w6EgY2FyZ2Fkb1xyXG4gICAgaWYgKCF3aW5kb3cuZ29vZ2xlKSB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdEV4aXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJ3NjcmlwdFtzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PVlPVVJfR09PR0xFX01BUFNfQVBJX0tFWSZsaWJyYXJpZXM9cGxhY2VzXCJdJ1xyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gU29sbyBjYXJnYSBlbCBzY3JpcHQgc2kgbm8gZXN0w6EgcHJlc2VudGVcclxuICAgICAgaWYgKCFzY3JpcHRFeGlzdHMpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1ZT1VSX0dPT0dMRV9NQVBTX0FQSV9LRVkmbGlicmFyaWVzPXBsYWNlc2A7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xyXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBsb2FkTWFwO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTaSB5YSBlc3TDoSBjYXJnYWRvLCBzaW1wbGVtZW50ZSBpbmljaWFsaXphIGVsIG1hcGFcclxuICAgICAgICBsb2FkTWFwKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvYWRNYXAoKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1c2NhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCR7ZGlyZWNjaW9ufSwgJHtjaXVkYWR9LCAke2JhcnJpb31gO1xyXG4gICAgY29uc3QgZ2VvY29kZXIgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcblxyXG4gICAgZ2VvY29kZXIuZ2VvY29kZSh7IGFkZHJlc3M6IHF1ZXJ5IH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gXCJPS1wiICYmIHJlc3VsdHNbMF0pIHtcclxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb247XHJcbiAgICAgICAgbWFwLnNldENlbnRlcihsb2NhdGlvbik7XHJcbiAgICAgICAgbWFwLnNldFpvb20oMTUpO1xyXG5cclxuICAgICAgICBpZiAobWFya2VyKSB7XHJcbiAgICAgICAgICBtYXJrZXIuc2V0UG9zaXRpb24obG9jYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdNYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGxvY2F0aW9uLFxyXG4gICAgICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0TWFya2VyKG5ld01hcmtlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC00XCI+XHJcbiAgICAgIHsvKiBGb3JtdWxhcmlvIGRlIGLDunNxdWVkYSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaXJlY2Npw7NuXCJcclxuICAgICAgICAgIHZhbHVlPXtkaXJlY2Npb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERpcmVjY2lvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTIgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l1ZGFkXCJcclxuICAgICAgICAgIHZhbHVlPXtjaXVkYWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENpdWRhZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTIgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmFycmlvXCJcclxuICAgICAgICAgIHZhbHVlPXtiYXJyaW99XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJhcnJpbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTIgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXNjYXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcC0yIGhvdmVyOmJnLWJsdWUtNTAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBCdXNjYXIgZW4gZWwgbWFwYVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBNYXBhICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXttYXBSZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IHJvdW5kZWQgYm9yZGVyXCJcclxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDAwcHhcIiwgd2lkdGg6IFwiNzAwcHhcIiB9fVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwYTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTWFwYSIsIm1hcFJlZiIsIm1hcCIsInNldE1hcCIsIm1hcmtlciIsInNldE1hcmtlciIsImRpcmVjY2lvbiIsInNldERpcmVjY2lvbiIsImNpdWRhZCIsInNldENpdWRhZCIsImJhcnJpbyIsInNldEJhcnJpbyIsImxvYWRNYXAiLCJnb29nbGUiLCJ3aW5kb3ciLCJtYXBJbnN0YW5jZSIsIm1hcHMiLCJNYXAiLCJjdXJyZW50IiwiY2VudGVyIiwibGF0IiwibG5nIiwiem9vbSIsImFkZExpc3RlbmVyIiwiZSIsImxhdExuZyIsInNldFBvc2l0aW9uIiwibmV3TWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVzdWx0cyIsImZvcm1hdHRlZF9hZGRyZXNzIiwic2NyaXB0RXhpc3RzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiZGVmZXIiLCJvbmxvYWQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVCdXNjYXIiLCJxdWVyeSIsImdlb2NvZGVyIiwiR2VvY29kZXIiLCJnZW9jb2RlIiwiYWRkcmVzcyIsInN0YXR1cyIsImxvY2F0aW9uIiwiZ2VvbWV0cnkiLCJzZXRDZW50ZXIiLCJzZXRab29tIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInJlZiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Componentes/Mapa.js\n"));

/***/ })

});