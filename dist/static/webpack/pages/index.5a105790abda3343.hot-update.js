"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NewsUpdates.tsx":
/*!************************************!*\
  !*** ./components/NewsUpdates.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_TfiArrowCircleLeft_TfiArrowCircleRight_react_icons_tfi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=TfiArrowCircleLeft,TfiArrowCircleRight!=!react-icons/tfi */ \"__barrel_optimize__?names=TfiArrowCircleLeft,TfiArrowCircleRight!=!./node_modules/react-icons/tfi/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst NewsUpdates = ()=>{\n    _s();\n    const newsItems = [\n        {\n            title: \"What Lagos must do to improve education sector – Ex-minister\",\n            description: \"A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.\",\n            time: \"5 hours ago\",\n            link: \"#\",\n            image: \"/images/News.png\"\n        },\n        {\n            title: \"What Lagos must do to improve education sector – Ex-minister\",\n            description: \"A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.\",\n            time: \"5 hours ago\",\n            link: \"#\",\n            image: \"/images/News.png\"\n        },\n        {\n            title: \"What Lagos must do to improve education sector – Ex-minister\",\n            description: \"A former minister of works and housing, Senator Adeseye Ogunlewe, says a lot still needs to be done in the education sector in Lagos, despite a noticeable improvement in standards.\",\n            time: \"5 hours ago\",\n            link: \"#\",\n            image: \"/images/News.png\"\n        }\n    ];\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isLargeScreen, setIsLargeScreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsLargeScreen(window.innerWidth >= 1000);\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    const itemsPerPage = isLargeScreen ? 3 : 1;\n    const handleNext = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % newsItems.length);\n    };\n    const handlePrevious = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex - 1 + newsItems.length) % newsItems.length);\n    };\n    const displayedItems = isLargeScreen ? newsItems.slice(currentIndex, currentIndex + itemsPerPage) : [\n        newsItems[currentIndex]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-16 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-4 md:ml-8 lg:ml-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"heading font-poppins text-3xl md:text-4xl xl:text-5xl text-blue mb-4 relative inline-block\",\n                            children: [\n                                \"News and Updates\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute bottom-0 left-0 w-full h-2 bg-yellow-400\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-700 mb-8 max-w-3xl\",\n                            children: \"Stay updated with recent happenings and exciting news on SCEF and Education in Africa.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        isLargeScreen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute -top-16 right-0 flex space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handlePrevious,\n                                    className: \"text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TfiArrowCircleLeft_TfiArrowCircleRight_react_icons_tfi__WEBPACK_IMPORTED_MODULE_3__.TfiArrowCircleLeft, {\n                                        size: 40\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleNext,\n                                    className: \"text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TfiArrowCircleLeft_TfiArrowCircleRight_react_icons_tfi__WEBPACK_IMPORTED_MODULE_3__.TfiArrowCircleRight, {\n                                        size: 40\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col  lg:flex-row justify-center gap-8 mb-8\",\n                            children: displayedItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-[#F8F9FF] w-full lg:w-[411px] h-[529px] rounded-tl-[16px] shadow-lg border border-[#DFE4DE]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: item.image,\n                                            alt: item.title,\n                                            width: 412,\n                                            height: 240,\n                                            className: \"w-full h-2/3 lg-h-[240px] object-cover\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-6 min-h-fit h-1/3 lg-h-full\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-lg font-semibold mb-2\",\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-gray-600 mb-4\",\n                                                    children: item.description\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex justify-between items-center\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-gray-400 text-sm\",\n                                                            children: item.time\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                                            lineNumber: 106,\n                                                            columnNumber: 41\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: item.link,\n                                                            className: \"text-blue-600 hover:underline flex items-center\",\n                                                            children: [\n                                                                \"Read more \",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TfiArrowCircleLeft_TfiArrowCircleRight_react_icons_tfi__WEBPACK_IMPORTED_MODULE_3__.TfiArrowCircleRight, {\n                                                                    className: \"ml-1\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                                                    lineNumber: 108,\n                                                                    columnNumber: 55\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                                            lineNumber: 107,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, undefined),\n                        !isLargeScreen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center space-x-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handlePrevious,\n                                    className: \"text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TfiArrowCircleLeft_TfiArrowCircleRight_react_icons_tfi__WEBPACK_IMPORTED_MODULE_3__.TfiArrowCircleLeft, {\n                                        size: 32\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleNext,\n                                    className: \"text-blue-500 bg-white rounded-full p-2 transition-all hover:bg-blue-100\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TfiArrowCircleLeft_TfiArrowCircleRight_react_icons_tfi__WEBPACK_IMPORTED_MODULE_3__.TfiArrowCircleRight, {\n                                        size: 32\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\reddy\\\\Desktop\\\\SCEF-website\\\\components\\\\NewsUpdates.tsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewsUpdates, \"HVzct9KfTJNJXh/gHL0jic31zAU=\");\n_c = NewsUpdates;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsUpdates);\nvar _c;\n$RefreshReg$(_c, \"NewsUpdates\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SEFBbUJBO29FQUFDeUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FkL0NVOzs7Ozs7Ozs7O3dCQXFCakIsQ0FBQ3pCLCtCQUNFLDhEQUFDZ0I7NEJBQUlELFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FDR0MsU0FBU1Y7b0NBQ1RJLFdBQVU7OENBRVYsNEVBQUMxQiw2SEFBa0JBO3dDQUFDaUMsTUFBTTs7Ozs7Ozs7Ozs7OENBRTlCLDhEQUFDRjtvQ0FDR0MsU0FBU2I7b0NBQ1RPLFdBQVU7OENBRVYsNEVBQUN6Qiw4SEFBbUJBO3dDQUFDZ0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEzRDtHQWxJTS9CO0tBQUFBO0FBb0lOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3c1VwZGF0ZXMudHN4P2I5ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgVGZpQXJyb3dDaXJjbGVMZWZ0LCBUZmlBcnJvd0NpcmNsZVJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL3RmaVwiO1xyXG5cclxuY29uc3QgTmV3c1VwZGF0ZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3c0l0ZW1zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdXaGF0IExhZ29zIG11c3QgZG8gdG8gaW1wcm92ZSBlZHVjYXRpb24gc2VjdG9yIOKAkyBFeC1taW5pc3RlcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBmb3JtZXIgbWluaXN0ZXIgb2Ygd29ya3MgYW5kIGhvdXNpbmcsIFNlbmF0b3IgQWRlc2V5ZSBPZ3VubGV3ZSwgc2F5cyBhIGxvdCBzdGlsbCBuZWVkcyB0byBiZSBkb25lIGluIHRoZSBlZHVjYXRpb24gc2VjdG9yIGluIExhZ29zLCBkZXNwaXRlIGEgbm90aWNlYWJsZSBpbXByb3ZlbWVudCBpbiBzdGFuZGFyZHMuJyxcclxuICAgICAgICAgICAgdGltZTogJzUgaG91cnMgYWdvJyxcclxuICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvTmV3cy5wbmcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnV2hhdCBMYWdvcyBtdXN0IGRvIHRvIGltcHJvdmUgZWR1Y2F0aW9uIHNlY3RvciDigJMgRXgtbWluaXN0ZXInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZm9ybWVyIG1pbmlzdGVyIG9mIHdvcmtzIGFuZCBob3VzaW5nLCBTZW5hdG9yIEFkZXNleWUgT2d1bmxld2UsIHNheXMgYSBsb3Qgc3RpbGwgbmVlZHMgdG8gYmUgZG9uZSBpbiB0aGUgZWR1Y2F0aW9uIHNlY3RvciBpbiBMYWdvcywgZGVzcGl0ZSBhIG5vdGljZWFibGUgaW1wcm92ZW1lbnQgaW4gc3RhbmRhcmRzLicsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1IGhvdXJzIGFnbycsXHJcbiAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL05ld3MucG5nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1doYXQgTGFnb3MgbXVzdCBkbyB0byBpbXByb3ZlIGVkdWNhdGlvbiBzZWN0b3Ig4oCTIEV4LW1pbmlzdGVyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGZvcm1lciBtaW5pc3RlciBvZiB3b3JrcyBhbmQgaG91c2luZywgU2VuYXRvciBBZGVzZXllIE9ndW5sZXdlLCBzYXlzIGEgbG90IHN0aWxsIG5lZWRzIHRvIGJlIGRvbmUgaW4gdGhlIGVkdWNhdGlvbiBzZWN0b3IgaW4gTGFnb3MsIGRlc3BpdGUgYSBub3RpY2VhYmxlIGltcHJvdmVtZW50IGluIHN0YW5kYXJkcy4nLFxyXG4gICAgICAgICAgICB0aW1lOiAnNSBob3VycyBhZ28nLFxyXG4gICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9OZXdzLnBuZydcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc0xhcmdlU2NyZWVuLCBzZXRJc0xhcmdlU2NyZWVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0xhcmdlU2NyZWVuKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSBpc0xhcmdlU2NyZWVuID8gMyA6IDE7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT5cclxuICAgICAgICAgICAgKHByZXZJbmRleCArIDEpICUgbmV3c0l0ZW1zLmxlbmd0aFxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PlxyXG4gICAgICAgICAgICAocHJldkluZGV4IC0gMSArIG5ld3NJdGVtcy5sZW5ndGgpICUgbmV3c0l0ZW1zLmxlbmd0aFxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpc3BsYXllZEl0ZW1zID0gaXNMYXJnZVNjcmVlblxyXG4gICAgICAgID8gbmV3c0l0ZW1zLnNsaWNlKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgaXRlbXNQZXJQYWdlKVxyXG4gICAgICAgIDogW25ld3NJdGVtc1tjdXJyZW50SW5kZXhdXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTggbGc6cHgtMTYgbWF4LXctWzE0NDBweF1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBtZDptbC04IGxnOm1sLTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmcgZm9udC1wb3BwaW5zIHRleHQtM3hsIG1kOnRleHQtNHhsIHhsOnRleHQtNXhsIHRleHQtYmx1ZSBtYi00IHJlbGF0aXZlIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXdzIGFuZCBVcGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCB3LWZ1bGwgaC0yIGJnLXllbGxvdy00MDBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIG1iLTggbWF4LXctM3hsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXkgdXBkYXRlZCB3aXRoIHJlY2VudCBoYXBwZW5pbmdzIGFuZCBleGNpdGluZyBuZXdzIG9uIFNDRUYgYW5kIEVkdWNhdGlvbiBpbiBBZnJpY2EuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0xhcmdlU2NyZWVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTE2IHJpZ2h0LTAgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctYmx1ZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZmlBcnJvd0NpcmNsZUxlZnQgc2l6ZT17NDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgYmctd2hpdGUgcm91bmRlZC1mdWxsIHAtMiB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1ibHVlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRmaUFycm93Q2lyY2xlUmlnaHQgc2l6ZT17NDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGxnOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGdhcC04IG1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXllZEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctWyNGOEY5RkZdIHctZnVsbCBsZzp3LVs0MTFweF0gaC1bNTI5cHhdIHJvdW5kZWQtdGwtWzE2cHhdIHNoYWRvdy1sZyBib3JkZXIgYm9yZGVyLVsjREZFNERFXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQxMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTIvMyBsZy1oLVsyNDBweF0gb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTYgbWluLWgtZml0IGgtMS8zIGxnLWgtZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtc21cIj57aXRlbS50aW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCBob3Zlcjp1bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkIG1vcmUgPFRmaUFycm93Q2lyY2xlUmlnaHQgY2xhc3NOYW1lPVwibWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHshaXNMYXJnZVNjcmVlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTQgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgYmctd2hpdGUgcm91bmRlZC1mdWxsIHAtMiB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1ibHVlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRmaUFycm93Q2lyY2xlTGVmdCBzaXplPXszMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgcC0yIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLWJsdWUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGZpQXJyb3dDaXJjbGVSaWdodCBzaXplPXszMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzVXBkYXRlczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiVGZpQXJyb3dDaXJjbGVMZWZ0IiwiVGZpQXJyb3dDaXJjbGVSaWdodCIsIk5ld3NVcGRhdGVzIiwibmV3c0l0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRpbWUiLCJsaW5rIiwiaW1hZ2UiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJpc0xhcmdlU2NyZWVuIiwic2V0SXNMYXJnZVNjcmVlbiIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIml0ZW1zUGVyUGFnZSIsImhhbmRsZU5leHQiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJoYW5kbGVQcmV2aW91cyIsImRpc3BsYXllZEl0ZW1zIiwic2xpY2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJzcGFuIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaXplIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMyIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewsUpdates.tsx\n"));

/***/ })

});