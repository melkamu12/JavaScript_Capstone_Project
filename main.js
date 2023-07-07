/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  font-family: Inter, sans-serif;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  height: auto;\n  justify-content: space-between;\n  background-color: rgb(69, 69, 151);\n}\n\nheader nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\nheader a {\n  text-decoration: none;\n  color: #000;\n}\n\nnav ul li a {\n  text-decoration: none;\n  color: #000;\n}\n\nnav ul li a,\n.btn {\n  text-decoration: none;\n  color: #fff;\n  margin-right: 5vw;\n  font-size: 17px;\n  transition: font-weight 0.3s ease-in-out, font-size 0.3s ease-in-out;\n}\n\nnav ul li a:hover {\n  font-weight: bold;\n  color: grey;\n  color: #000;\n}\n\nnav ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.homepage {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin: auto;\n  padding: 3rem;\n}\n\n.homepage.disabled {\n  pointer-events: none;\n  filter: blur(5px);\n}\n\nfooter {\n  padding: 12px;\n  background-color: blueviolet;\n  color: #fff;\n  border: 1px solid  rgb(0, 0, 255);\n  text-align: center;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  width: auto;\n  bottom: 0;\n}\n\nheader h1 {\n  font-size: 30px;\n  color: #fff;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  font-weight: 900;\n  padding-left: 20px;\n}\n\n#card {\n  display: flex;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 15px;\n  box-shadow: 0 3px 5px rgba(9, 63, 225, 0.1);\n  flex-direction: column;\n}\n\n.details img {\n  display: block;\n  margin: 0 auto;\n  width: auto;\n  height: 50vh;\n}\n\n#card img {\n  width: 100%;\n  max-height: 50%;\n  object-fit: cover;\n  border-radius: 4px;\n}\n\n#card p {\n  margin: 8px 0;\n  height: 3vh;\n}\n\n#card button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 12px;\n  padding: 6px 10px;\n  font-size: 20px;\n  color: #000;\n  border: groove;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n#card button:hover {\n  background-color: #0032e9;\n}\n\n.name_likes {\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n  justify-content: space-between;\n}\n\n.likes-counter {\n  text-align: right;\n}\n\n/* Modal of the comment */\n.modal {\n  display: none;\n  position: fixed;\n  top: 3%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 70%;\n  height: 95vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-color: rgba(238, 234, 234, 0.996);\n  border: 2px groove #000;\n  border-radius: 8px;\n  z-index: 99;\n  backdrop-filter: blur(5px);\n}\n\n.modal::before {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(5px);\n  z-index: -1;\n}\n\n.modal-container {\n  width: 100%;\n  padding: 5% 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nlabel {\n  font-style: normal;\n  font-weight: 800;\n}\n\n.details h3 {\n  padding: 15px;\n  text-align: center;\n}\n\n.modal-body h2 {\n  margin-top: 0;\n}\n\n.commentForm {\n  display: flex;\n  width: 100%;\n  padding: 20px 60px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.setInstruct {\n  overflow: visible;\n  padding-right: 30px;\n  text-align: justify;\n}\n\n.input_name,\n.comment_input {\n  margin-bottom: 10px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.submit_comment {\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  background-color: hsl(122, 39%, 49%);\n  transition: background-color 0.3s ease;\n  cursor: pointer;\n  display: block;\n  margin: 0 auto;\n}\n\n.submit_comment:hover {\n  background-color: #45a049;\n}\n\n.submit_comment:active {\n  background-color: #3e8e41;\n}\n\n.comment_input {\n  width: 75%;\n  height: 100px;\n  margin-bottom: 10px;\n  resize: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.input_name {\n  width: 75%;\n  height: auto;\n  margin-bottom: 10px;\n  resize: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.submit-comment {\n  background-color: #fff;\n  color: rgb(8, 4, 4);\n  border: none;\n  border-radius: 5px;\n  padding: 8px 16px;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.close-modal {\n  position: absolute;\n  top: 2px;\n  right: 10px;\n  font-weight: 900;\n  background-color: transparent;\n  color: rgba(247, 12, 12, 0.791);\n  border: none;\n  border-radius: 5px;\n  padding: 11px 16px;\n  cursor: pointer;\n}\n\n.submit-comment:hover,\n.close-modal:hover {\n  background-color: #0056b3;\n}\n\n.like-btn {\n  cursor: pointer;\n  font-size: 16px;\n  color: #000;\n}\n\n.like-btn.liked {\n  color: red;\n}\n\n@media screen and (max-width: 768px) {\n  .homepage {\n    grid-template-columns: repeat(2, 1fr);\n    padding: 1rem;\n    min-width: 12rem;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/Style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/Style/style.css":
/*!*****************************!*\
  !*** ./src/Style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/Style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style/style.css */ \"./src/Style/style.css\");\n/* harmony import */ var _module_fetchMeal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/fetchMeal.js */ \"./src/module/fetchMeal.js\");\n/* harmony import */ var _module_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/displayMeals.js */ \"./src/module/displayMeals.js\");\n/* harmony import */ var _module_Meal_Counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/Meal_Counter.js */ \"./src/module/Meal_Counter.js\");\n\n\n\n\n\nconst noMealCounter1 = document.getElementById('CountMeals');\nasync function fetchedMeals() {\n  const meals = await (0,_module_fetchMeal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  return meals;\n}\nconst noMealCounter2 = (0,_module_Meal_Counter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(await fetchedMeals());\nnoMealCounter1.innerText = noMealCounter2;\n(0,_module_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(await fetchedMeals());\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/module/LoadComment.js":
/*!***********************************!*\
  !*** ./src/module/LoadComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _set_getComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_getComment.js */ \"./src/module/set_getComment.js\");\n/* harmony import */ var _totalcoment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./totalcoment.js */ \"./src/module/totalcoment.js\");\n\n\n\nconst loadComments = async (id) => {\n  try {\n    const result = await (0,_set_getComment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n    const commentLength = (0,_totalcoment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result);\n    const comments = document.querySelector('.comment-box');\n    const commentCount = document.querySelector('.count');\n\n    comments.innerHTML = '';\n    if (result[0]) {\n      result.forEach((item) => {\n        const element = document.createElement('p');\n        element.setAttribute('class', 'each-comment');\n        element.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;\n        comments.appendChild(element);\n      });\n    }\n    if (commentCount) {\n      if (commentLength === undefined) {\n        commentCount.textContent = 'Total comments (0)';\n      } else {\n        commentCount.textContent = `Total comments (${commentLength})`;\n      }\n    }\n  } catch (err) {\n    throw new Error('error');\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadComments);\n\n\n//# sourceURL=webpack://webpack-setup/./src/module/LoadComment.js?");

/***/ }),

/***/ "./src/module/Meal_Counter.js":
/*!************************************!*\
  !*** ./src/module/Meal_Counter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = (meals) => {\n  const flag = meals.length;\n  return flag;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n\n//# sourceURL=webpack://webpack-setup/./src/module/Meal_Counter.js?");

/***/ }),

/***/ "./src/module/api.js":
/*!***************************!*\
  !*** ./src/module/api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   APICommentURL: () => (/* binding */ APICommentURL),\n/* harmony export */   APILikeURL: () => (/* binding */ APILikeURL),\n/* harmony export */   baseURl: () => (/* binding */ baseURl)\n/* harmony export */ });\nconst baseURl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';\n\nconst APILikeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fwlndnSGaHXJiW31vz2m/likes/';\nconst APICommentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YeTooaUu7CcnY5iAkHx6/comments/';\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/module/api.js?");

/***/ }),

/***/ "./src/module/displayMeals.js":
/*!************************************!*\
  !*** ./src/module/displayMeals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/module/popup.js\");\n/* harmony import */ var _set_getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_getLikes.js */ \"./src/module/set_getLikes.js\");\n\n\n\nconst getCard = (MealData) => {\n  const card = `\n    <div id=\"card\" data-meal-id=\"${MealData.idMeal}\">\n      <img src=\"${MealData.strMealThumb}\" alt=\"${MealData.strMeal}\" class=\"feed\"></img>  \n      <div class=\"name_likes\">\n        <p>${MealData.strMeal}</p>\n        <span class=\"like-btn\"  data-meal-id=\"${MealData.idMeal}\"><i class=\"far fa-heart\"></i></span>\n      </div>\n      <p class=\"likes-counter\">likes</p>\n      <button class=\"comment\" data-meal-id=\"${MealData.idMeal}\">comment</button>\n    </div>`;\n  return card;\n};\n\nconst displayLikes = async (id) => {\n  const dataLikes = await (0,_set_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\n  const countOfLikes = document.querySelector(\n    `#card[data-meal-id=\"${id}\"] .likes-counter`,\n  );\n\n  // Find the item with the matching item_id and get its likes count\n  const likesItem = dataLikes.find((item) => item.item_id === id);\n  const likesCount = likesItem ? likesItem.likes : 0;\n\n  countOfLikes.textContent = `${likesCount} likes`;\n};\n\nconst displayMeals = async (MealData) => {\n  const mealElement = document.getElementById('homepage');\n\n  await Promise.all(\n    MealData.map(async (meal) => {\n      const card = getCard(meal);\n      mealElement.insertAdjacentHTML('beforeend', card);\n      await displayLikes(meal.idMeal);\n    }),\n  );\n  // Like Button action Listener\n  const likes = document.querySelectorAll('.like-btn');\n  likes.forEach((like) => {\n    like.addEventListener('click', async function handleLikeClick() {\n      const { mealId } = this.dataset;\n      // const meal = MealData.find((meal) => meal.idMeal === mealId);\n      try {\n        await (0,_set_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.setLikes)(mealId);\n        await displayLikes(mealId);\n        const icon = this.querySelector('.far');\n        if (icon) {\n          icon.classList.toggle('fas');\n          icon.classList.toggle('far');\n          icon.style.color = 'red';\n        } else {\n          this.style.color = 'white';\n        }\n      } catch (error) {\n        throw new Error('error');\n      }\n    });\n  });\n  // Comment Button action Listener\n  const commentButtons = document.querySelectorAll('.comment');\n  commentButtons.forEach((button) => {\n    button.addEventListener('click', (event) => {\n      const { mealId } = event.target.dataset;\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mealId);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeals);\n\n\n//# sourceURL=webpack://webpack-setup/./src/module/displayMeals.js?");

/***/ }),

/***/ "./src/module/fetchMeal.js":
/*!*********************************!*\
  !*** ./src/module/fetchMeal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/module/api.js\");\n\n\nconst fetchMeal = async () => {\n  const response = await fetch(_api_js__WEBPACK_IMPORTED_MODULE_0__.baseURl);\n  const { meals } = await response.json();\n  return meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeal);\n\n//# sourceURL=webpack://webpack-setup/./src/module/fetchMeal.js?");

/***/ }),

/***/ "./src/module/popup.js":
/*!*****************************!*\
  !*** ./src/module/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _set_getComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_getComment.js */ \"./src/module/set_getComment.js\");\n/* harmony import */ var _LoadComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadComment.js */ \"./src/module/LoadComment.js\");\n\n\n\nconst closeModal = () => {\n  const commentModal = document.getElementById('commentModal');\n  commentModal.style.display = 'none';\n  document.getElementById('homepage').classList.remove('disabled');\n};\n\nconst fetchMealDetails = async (id) => {\n  const result = await fetch(\n    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,\n  );\n  const data = await result.json();\n  return data.meals[0];\n};\nconst displayCommentModal = async (mealId) => {\n  document.getElementById('commentModal').classList.add('show');\n  document.getElementById('homepage').classList.add('disabled');\n  const commentModal = document.getElementById('commentModal');\n  const mealdetails = await fetchMealDetails(mealId);\n  (0,_LoadComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealId);\n  commentModal.innerHTML = '';\n  const modalContent = `\n  <button class=\"close-modal close\">X</button>\n  <div class=\"modal-container\">\n    <div class=\"details\">\n      <img src=\"${mealdetails.strMealThumb}\">\n      <h3>${mealdetails.strMeal}</h3>\n    </div>\n    <div class=\"mealDetails\">\n    <p class = \"setInstruct\"><b>Category:&nbsp;</b>${mealdetails.strCategory}</p>\n      <label>country:</label>${mealdetails.strArea}</h3><br>\n      <label>Ingredient:</label>${mealdetails.strIngredient1},${mealdetails.strIngredient2},${mealdetails.strIngredient3},${mealdetails.strIngredient4},${mealdetails.strIngredient5},${mealdetails.strIngredient6}</h3>\n      <p class=\"setInstruct\"><b>Set of Instructions: </b>${mealdetails.strInstructions}</p>\n      </div>\n    <div id=\"comment-section\">\n      <h1><span class=\"count\"></span></h1>\n      <ul class=\"comment-box\"></ul>\n    </div>\n    <h2>Add Comment</h2>\n    <form class=\"commentForm\">\n      <input type=\"text\" class=\"input_name\" name=\"YourName\" placeholder=\"Your Name\"/>\n      <textarea name=\"YourComment\" class=\"comment_input\" placeholder=\"Your insights ...\"></textarea>\n      <button class=\"submit_comment\">Submit</button>\n    </form>\n  </div>\n`;\n\n  commentModal.insertAdjacentHTML('beforeend', modalContent);\n  const closeBtn = commentModal.querySelector('.close');\n  const submitBtn = commentModal.querySelector('.submit_comment');\n  closeBtn.addEventListener('click', closeModal);\n  commentModal.style.display = 'block';\n  (0,_LoadComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealId);\n\n  submitBtn.addEventListener('click', async (event) => {\n    event.preventDefault();\n    const form = commentModal.querySelector('form');\n    const userNames = document.querySelector('.input_name').value;\n    const UsersComment = document.querySelector('.comment_input').value;\n    await (0,_set_getComment_js__WEBPACK_IMPORTED_MODULE_0__.setComment)(mealId, userNames, UsersComment);\n    (0,_LoadComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealId);\n    form.reset();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentModal);\n\n\n//# sourceURL=webpack://webpack-setup/./src/module/popup.js?");

/***/ }),

/***/ "./src/module/set_getComment.js":
/*!**************************************!*\
  !*** ./src/module/set_getComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   setComment: () => (/* binding */ setComment)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/module/api.js\");\n\n\nconst setComment = async (id, CommenterUsername, userComment) => {\n  if (CommenterUsername && userComment) {\n    const Usercomment = {\n      item_id: id,\n      username: CommenterUsername,\n      comment: userComment,\n    };\n    await fetch(_api_js__WEBPACK_IMPORTED_MODULE_0__.APICommentURL, {\n      method: 'POST',\n      body: JSON.stringify(Usercomment),\n      headers: {\n        'Content-type': 'application/json',\n      },\n    });\n  } else if (!CommenterUsername || !userComment) {\n    // alert('Please fill all the fields.');\n  }\n};\nconst getComments = async (itemID) => {\n  let data = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.APICommentURL}?item_id=${itemID}`);\n  data = await data.json();\n  return data;\n};\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/module/set_getComment.js?");

/***/ }),

/***/ "./src/module/set_getLikes.js":
/*!************************************!*\
  !*** ./src/module/set_getLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLikes: () => (/* binding */ getLikes),\n/* harmony export */   setLikes: () => (/* binding */ setLikes)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/module/api.js\");\n\n\nconst setLikes = async (id) => {\n  const response = await fetch(_api_js__WEBPACK_IMPORTED_MODULE_0__.APILikeURL, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n  return response.text();\n};\n\nconst getLikes = async () => {\n  try {\n    const result = await fetch(_api_js__WEBPACK_IMPORTED_MODULE_0__.APILikeURL, {\n      method: 'GET',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const data = await result.json();\n    return data;\n  } catch (error) {\n    return [];\n  }\n};\n\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/module/set_getLikes.js?");

/***/ }),

/***/ "./src/module/totalcoment.js":
/*!***********************************!*\
  !*** ./src/module/totalcoment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Commentcounter = (Comment) => {\n  const flag = Comment.length;\n  return flag;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Commentcounter);\n\n//# sourceURL=webpack://webpack-setup/./src/module/totalcoment.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;