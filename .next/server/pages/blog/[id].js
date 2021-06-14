/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/blog/[id]";
exports.ids = ["pages/blog/[id]"];
exports.modules = {

/***/ "./components/date.tsx":
/*!*****************************!*\
  !*** ./components/date.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Date; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/calvinhu/Desktop/HackReactor/projects/website-and-blog.nosync/components/date.tsx\";\n\nfunction Date({\n  dateString\n}) {\n  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n    dateTime: dateString,\n    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'LLLL d, yyyy')\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9kYXRlLnRzeD83ZDE2Il0sIm5hbWVzIjpbIkRhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInBhcnNlSVNPIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQXNEO0FBQ25FLFFBQU1DLElBQUksR0FBR0Msa0RBQVEsQ0FBQ0YsVUFBRCxDQUFyQjtBQUNBLHNCQUFPO0FBQU0sWUFBUSxFQUFFQSxVQUFoQjtBQUFBLGNBQTZCRyxnREFBTSxDQUFDRixJQUFELEVBQU8sY0FBUDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGF0ZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGUoeyBkYXRlU3RyaW5nIH06IHsgZGF0ZVN0cmluZzogc3RyaW5nIH0pIHtcbiAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKGRhdGVTdHJpbmcpXG4gIHJldHVybiA8dGltZSBkYXRlVGltZT17ZGF0ZVN0cmluZ30+e2Zvcm1hdChkYXRlLCAnTExMTCBkLCB5eXl5Jyl9PC90aW1lPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/date.tsx\n");

/***/ }),

/***/ "./pages/blog/[id].tsx":
/*!*****************************!*\
  !*** ./pages/blog/[id].tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/posts */ \"./lib/posts.tsx\");\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/date */ \"./components/date.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/calvinhu/Desktop/HackReactor/projects/website-and-blog.nosync/pages/blog/[id].tsx\";\n\n\n\n\n\nfunction Post({\n  postData\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: postData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().headingXl),\n        children: postData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().lightText),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_4__.default, {\n          dateString: postData.date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        dangerouslySetInnerHTML: {\n          __html: postData.contentHtml\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\nconst getStaticPaths = async () => {\n  // Return a list of possible value for id\n  const paths = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_3__.getAllPostIds)();\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  // Fetch necessary data for the blog post using params.id\n  const postData = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_3__.getPostData)(params.id);\n  return {\n    props: {\n      postData\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvYmxvZy9baWRdLnRzeD8xNGQzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0RGF0YSIsInRpdGxlIiwidXRpbFN0eWxlcyIsImRhdGUiLCJfX2h0bWwiLCJjb250ZW50SHRtbCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJnZXRBbGxQb3N0SWRzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImdldFBvc3REYXRhIiwiaWQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxDQUFjO0FBQzNCQztBQUQyQixDQUFkLEVBUVg7QUFDRixzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBUUEsUUFBUSxDQUFDQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVDLDJFQUFmO0FBQUEsa0JBQXNDRixRQUFRLENBQUNDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBRUMsMkVBQWhCO0FBQUEsK0JBQ0UsOERBQUMscURBQUQ7QUFBTSxvQkFBVSxFQUFFRixRQUFRLENBQUNHO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRTtBQUFLLCtCQUF1QixFQUFFO0FBQUVDLGdCQUFNLEVBQUVKLFFBQVEsQ0FBQ0s7QUFBbkI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7QUFFTSxNQUFNQyxjQUE4QixHQUFHLFlBQVk7QUFDeEQ7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLHlEQUFhLEVBQTNCO0FBQ0EsU0FBTztBQUNMRCxTQURLO0FBRUxFLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRCxDQVBNO0FBU0EsTUFBTUMsY0FBOEIsR0FBRyxPQUFPO0FBQUVDO0FBQUYsQ0FBUCxLQUFzQjtBQUNsRTtBQUNBLFFBQU1YLFFBQVEsR0FBRyxNQUFNWSx1REFBVyxDQUFDRCxNQUFNLENBQUNFLEVBQVIsQ0FBbEM7QUFDQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMZDtBQURLO0FBREYsR0FBUDtBQUtELENBUk0iLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldEFsbFBvc3RJZHMsIGdldFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kYXRlJ1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tICduZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtcbiAgcG9zdERhdGFcbn06IHtcbiAgcG9zdERhdGE6IHtcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgZGF0ZTogc3RyaW5nXG4gICAgY29udGVudEh0bWw6IHN0cmluZ1xuICB9XG4gfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ1hsfT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlnaHRUZXh0fT5cbiAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0RGF0YS5kYXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3REYXRhLmNvbnRlbnRIdG1sIH19IC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgLy8gUmV0dXJuIGEgbGlzdCBvZiBwb3NzaWJsZSB2YWx1ZSBmb3IgaWRcbiAgY29uc3QgcGF0aHMgPSBnZXRBbGxQb3N0SWRzKClcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgLy8gRmV0Y2ggbmVjZXNzYXJ5IGRhdGEgZm9yIHRoZSBibG9nIHBvc3QgdXNpbmcgcGFyYW1zLmlkXG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkIGFzIHN0cmluZylcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdERhdGFcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[id].tsx\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_image_js","lib_posts_tsx-styles_utils_module_css","components_layout_tsx"], function() { return __webpack_exec__("./pages/blog/[id].tsx"); });
module.exports = __webpack_exports__;

})();