/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --board-rows: 0;\\n  --board-columns: 0;\\n  --cell-height: 0px;\\n  --cell-width: 0px;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n  height: 100vh;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n#content {\\n  height: 100%;\\n  display: grid;\\n  grid-template-rows: 250px auto;\\n}\\n\\n#header-section {\\n\\n}\\n\\n#main-section {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: min-content;\\n  column-gap: 50px;\\n}\\n\\n#human-board-section {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n#computer-board-section {\\n  display: flex;\\n  justify-content: flex-start;\\n}\\n\\n.board {\\n  display: grid;\\n  grid-template-rows: repeat(var(--board-rows), var(--cell-height));\\n  grid-template-columns: repeat(var(--board-columns), var(--cell-width));\\n  border-bottom: 1px solid black;\\n  border-left: 1px solid black;\\n}\\n\\n.cell {\\n  border-top: 1px solid black;\\n  border-right: 1px solid black;\\n}\\n\\n.ship {\\n  background-color: #6ee7b7;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n\n    if (root.PubSub) {\n        PubSub = root.PubSub;\n        console.warn(\"PubSub already loaded, using existing version\");\n    } else {\n        root.PubSub = PubSub;\n        factory(PubSub);\n    }\n    // CommonJS and Node.js module support\n    if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n    // AMD support\n    /* eslint-disable no-undef */\n    else {}\n\n}(( typeof window === 'object' && window ) || this, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1,\n        ALL_SUBSCRIBING_MSG = '*';\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( Object.prototype.hasOwnProperty.call(obj, key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n\n            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);\n        };\n    }\n\n    function hasDirectSubscribersFor( message ) {\n        var topic = String( message ),\n            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));\n\n        return found;\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = hasDirectSubscribersFor(topic);\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n\n        // return token for unsubscribing\n        return token;\n    };\n\n    PubSub.subscribeAll = function( func ){\n        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     * @return { int }\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /**\n       Count subscriptions by the topic\n     * @function\n     * @public\n     * @alias countSubscriptions\n     * @return { Array }\n    */\n    PubSub.countSubscriptions = function countSubscriptions(topic){\n        var m;\n        // eslint-disable-next-line no-unused-vars\n        var token;\n        var count = 0;\n        for (m in messages) {\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {\n                for (token in messages[m]) {\n                    count++;\n                }\n                break;\n            }\n        }\n        return count;\n    };\n\n\n    /**\n       Gets subscriptions by the topic\n     * @function\n     * @public\n     * @alias getSubscriptions\n    */\n    PubSub.getSubscriptions = function getSubscriptions(topic){\n        var m;\n        var list = [];\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                list.push(m);\n            }\n        }\n        return list;\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n\n//# sourceURL=webpack://battleship/./node_modules/pubsub-js/src/pubsub.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controllers/game-controller.js":
/*!********************************************!*\
  !*** ./src/controllers/game-controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass GameController {\n    #gameView;\n    #gameModel;\n\n    constructor(gameView, gameModel) {\n        this.#gameView = gameView;\n        this.#gameModel = gameModel;\n    }\n\n    init() {\n        this.#gameView.subscribeView();\n        this.#gameModel.subscribeModel();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);\n\n//# sourceURL=webpack://battleship/./src/controllers/game-controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_game_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/game-controller */ \"./src/controllers/game-controller.js\");\n/* harmony import */ var _views_game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/game-view */ \"./src/views/game-view.js\");\n/* harmony import */ var _models_game_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/game-model */ \"./src/models/game-model.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\n\nconst pubSub = (pubsub_js__WEBPACK_IMPORTED_MODULE_0___default());\nconst game = new _controllers_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _views_game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pubSub), new _models_game_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"](pubSub));\ngame.init();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/models/game-model.js":
/*!**********************************!*\
  !*** ./src/models/game-model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/models/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/models/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/models/ship.js\");\n\n\n\n\nclass GameModel {\n    pubSub;\n    humanPlayer;\n    humanGameboard;\n    computerPlayer;\n    computerGameboard;\n\n    constructor(pubSub) {\n        this.pubSub = pubSub;\n        this.init();\n    }\n\n    init() {\n        this.humanPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](true);\n        this.humanGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.computerPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](false);\n        this.computerGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.placeHumanShips();\n        this.placeComputerShips();\n    }\n\n    subscribeModel() {\n        // this.pubSub.subscribe('add-list', this.addList.bind(this));\n        // this.pubSub.subscribe('delete-list', this.deleteList.bind(this));\n        // this.pubSub.subscribe('add-todo-to-list', this.addToDo.bind(this));\n        // this.pubSub.subscribe('remove-todo-from-list', this.removeToDo.bind(this));\n\n        // if (this.lists.length === 0) {\n        //     const defaultList = {};\n        //     defaultList.name = 'Reminders';\n        //     defaultList.color = '#FF9F0C';\n        //     this.pubSub.publish('add-list', defaultList);\n        // } else {\n        //     this.pubSub.publish('display-list', this.lists[0]);\n        //     this.pubSub.publish('display-lists', this.lists);\n        // }\n        let humanPayload = {};\n        humanPayload.gameboard = this.humanGameboard.board;\n        let computerPayload = {};\n        computerPayload.gameboard = this.computerGameboard.board;\n        this.pubSub.publish(\"display-human-board\", humanPayload);\n        this.pubSub.publish(\"display-computer-board\", computerPayload);\n    }\n\n    getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min) + min);\n    }\n\n    randomlyPlaceShip(gameboard, ship) {\n        let x;\n        let y;\n        let isVertical;\n        do {\n            x = this.getRandomInt(0, 10);\n            y = this.getRandomInt(0, 10);\n            \n            let vertical = this.getRandomInt(0, 2);\n            vertical === 0 ? isVertical = false : isVertical = true;\n\n        } while (!gameboard.placeShip(ship, x, y, isVertical));\n    }\n\n    placeHumanShips() {\n        const carrier = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](5);\n        const battleship = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4);\n        const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\n        const submarine = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\n        const patrolBoat = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2);\n\n        this.randomlyPlaceShip(this.humanGameboard, carrier);\n        this.randomlyPlaceShip(this.humanGameboard, battleship);\n        this.randomlyPlaceShip(this.humanGameboard, destroyer);\n        this.randomlyPlaceShip(this.humanGameboard, submarine);\n        this.randomlyPlaceShip(this.humanGameboard, patrolBoat);\n    }\n\n    placeComputerShips() {\n        const carrier = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](5);\n        const battleship = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4);\n        const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\n        const submarine = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\n        const patrolBoat = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2);\n\n        this.randomlyPlaceShip(this.computerGameboard, carrier);\n        this.randomlyPlaceShip(this.computerGameboard, battleship);\n        this.randomlyPlaceShip(this.computerGameboard, destroyer);\n        this.randomlyPlaceShip(this.computerGameboard, submarine);\n        this.randomlyPlaceShip(this.computerGameboard, patrolBoat);\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameModel);\n\n//# sourceURL=webpack://battleship/./src/models/game-model.js?");

/***/ }),

/***/ "./src/models/gameboard.js":
/*!*********************************!*\
  !*** ./src/models/gameboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SIZE = 10;\n\nclass Gameboard {   \n    #board = [];\n\n    constructor() {\n        this.initialize();\n    }\n\n    initialize() {\n        for (let x = 0; x < SIZE; x++) {\n            this.#board[x] = [];\n            for (let y = 0; y < SIZE; y++) {\n                this.#board[x][y] = null;\n            }\n        }\n    }\n\n    get board() {\n        return this.#board;\n    }\n\n    allShipsAreSunk() {\n        for (let x = 0; x < SIZE; x++) {\n            for (let y = 0; y < SIZE; y++) {\n                if (this.#board[x][y] !== null && this.#board[x][y] !== -1) {\n                    if (!this.#board[x][y].isSunk()) {\n                        return false;\n                    }\n                } \n            }\n        }\n\n        return true;\n    }\n\n    isPlacementValid(shipLength, x, y, isVertical) {\n        if ((x < 0 || x > 9) || (y < 0 || y > 9)) {\n            return false\n        }\n        if (!isVertical) {\n            if ((y + (shipLength - 1)) > 9) {\n                return false;\n            }\n        }\n        if (isVertical) {\n            if ((x + (shipLength - 1)) > 9) {\n                return false;\n            }\n        }\n        if (!isVertical) {\n            for (let index = y; index < y + shipLength; index++) {\n                if (this.#board[x][index] !== null) {\n                    return false;\n                }\n            }\n        }\n        if (isVertical) {\n            for (let index = x; index < x + shipLength; index++) {\n                if (this.#board[index][y] !== null) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n\n    placeShip(ship, x, y, isVertical) {\n        if (!this.isPlacementValid(ship.length, x, y, isVertical)) {\n            return false;\n        }\n        if (!isVertical) {\n            for (let index = y; index < y + ship.length; index++) {\n                this.#board[x][index] = ship;\n            }\n        }\n        if (isVertical) {\n            for (let index = x; index < x + ship.length; index++) {\n                this.#board[index][y] = ship;\n            }\n        }\n        return true;\n    }\n\n    receiveAttack(x, y) {\n        if (this.#board[x][y] === null) {\n            this.#board[x][y] = -1;\n            return true;\n        }\n        if (this.#board[x][y] === -1) {\n            return false;\n        }\n        for (let hit of this.#board[x][y].hits) {\n            if (hit.x === x && hit.y === y) {\n                return false\n            }\n        }\n        this.#board[x][y].hit({\n            x,\n            y\n        });\n        return true;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/models/gameboard.js?");

/***/ }),

/***/ "./src/models/player.js":
/*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Player {\n\n    #isHuman;\n\n    constructor(isHuman) {\n        this.#isHuman = isHuman;\n    }\n\n    get isHuman() {\n        return this.#isHuman;\n    }\n\n    getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min) + min);\n    }\n\n    makeRandomAttack(gameboard) {\n        let x;\n        let y;\n        do {\n            x = this.getRandomInt(0, 10);\n            y = this.getRandomInt(0, 10);\n        } while (!gameboard.receiveAttack(x, y));\n        \n        return true;\n    }\n\n    takeTurn(gameboard, x, y) {\n        if (this.#isHuman) {\n            return gameboard.receiveAttack(x, y);\n        } else {\n            return this.makeRandomAttack(gameboard);\n        }\n        \n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/models/player.js?");

/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    #length;\n\n    #hits = [];\n\n    constructor(length) {\n        this.#length = length;\n    }\n\n    get length() {\n        return this.#length;\n    }\n\n    get hits() {\n        return this.#hits;\n    }\n\n    hit(coordinates) {\n        this.#hits.push(coordinates);\n    }\n\n    isSunk() {\n        return this.#hits.length === this.length;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/models/ship.js?");

/***/ }),

/***/ "./src/views/game-view.js":
/*!********************************!*\
  !*** ./src/views/game-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst GRID_SIZE = 360;\n\nclass GameView {\n    pubSub;\n    titleSecion;\n    mainSection;\n    humanPlayerBoardSection;\n    computerPlayerBoardSection;\n    humanPlayerBoard;\n    computerPlayerBoard;\n\n    constructor(pubSub) {\n        this.pubSub = pubSub;\n        this.init();\n    }\n\n    init() {\n        this.setBoardSize();\n\n        const content = this.getElement('#content');\n\n        this.titleSecion = this.createElement('div');\n        this.titleSecion.id = 'header-section';\n\n        this.mainSection = this.createElement('div');\n        this.mainSection.id = 'main-section';\n\n        this.humanPlayerBoardSection = this.createElement('div');\n        this.humanPlayerBoardSection.id = 'human-board-section';\n\n        this.computerPlayerBoardSection = this.createElement('div');\n        this.computerPlayerBoardSection.id = 'computer-board-section';\n\n        this.humanPlayerBoard = this.createElement('div');\n        this.humanPlayerBoard.id = 'human-board';\n        this.humanPlayerBoard.classList.add('board');\n        this.humanPlayerBoardSection.append(this.humanPlayerBoard);\n        this.mainSection.append(this.humanPlayerBoardSection);\n\n        this.computerPlayerBoard = this.createElement('div');\n        this.computerPlayerBoard.id = 'computer-board';\n        this.computerPlayerBoard.classList.add('board');\n        this.computerPlayerBoardSection.append(this.computerPlayerBoard);\n        this.mainSection.append(this.computerPlayerBoardSection);\n\n        content.append(this.titleSecion);\n        content.append(this.mainSection);\n    }\n\n    subscribeView() {\n        this.pubSub.subscribe('display-human-board', this.displayHumanPlayerBoard.bind(this));\n        this.pubSub.subscribe('display-computer-board', this.displayComputerPlayerBoard.bind(this));\n        this.pubSub.subscribe('display-winner', this.displayWinner.bind(this));\n\n        this.applyEventListeners();\n    }\n\n    getElement(selector) {\n        return document.querySelector(selector);\n    }\n\n    createElement(tag, classList) {\n        const element = document.createElement(tag);\n       \n        if (classList) {\n            classList.split(' ').forEach(classStr => {\n                element.classList.add(classStr); \n            });\n        }\n\n        return element;\n    }\n\n    setBoardSize() {\n        document.documentElement.style.setProperty(\"--board-rows\", 10);\n        document.documentElement.style.setProperty(\"--board-columns\", 10);\n        document.documentElement.style.setProperty(\"--cell-height\", `${(GRID_SIZE/10)}px`);\n        document.documentElement.style.setProperty(\"--cell-width\", `${(GRID_SIZE/10)}px`);\n    }\n\n    clearBoard(container) {\n        while (container.firstChild) {\n            container.removeChild(container.firstChild);\n        }\n        return;\n    }\n\n    displayHumanPlayerBoard(msg, payload) {\n        this.clearBoard(this.humanPlayerBoard);\n\n        for (let x = 0; x < payload.gameboard.length; x++) {\n            for (let y = 0; y < payload.gameboard[0].length; y++) {\n                let newDiv = document.createElement(\"div\");\n                newDiv.classList.add(\"cell\");\n                if (payload.gameboard[x][y] === null) {\n                    newDiv.classList.add(\"empty\");\n                } else if (payload.gameboard[x][y] === -1) {\n                    newDiv.classList.add(\"miss\");\n                } else if (payload.gameboard[x][y].hits.length === 0) {\n                    newDiv.classList.add(\"ship\");\n                } else {\n                    for (let hit of payload.gameboard[x][y].hits) {\n                        if (hit.x === x && hit.y === y) {\n                            newDiv.classList.add(\"hit\");\n                        } else {\n                            newDiv.classList.add(\"ship\");\n                        }\n                    }\n                }\n                this.humanPlayerBoard.appendChild(newDiv);\n            }\n        }\n        return;\n    }\n\n    displayComputerPlayerBoard(msg, payload) {\n        this.clearBoard(this.computerPlayerBoard);\n        \n        for (let x = 0; x < payload.gameboard.length; x++) {\n            for (let y = 0; y < payload.gameboard[0].length; y++) {\n                let newDiv = document.createElement(\"div\");\n                newDiv.classList.add(\"cell\");\n                if (payload.gameboard[x][y] === null) {\n                    newDiv.classList.add(\"available\");\n                } else if (payload.gameboard[x][y] === -1) {\n                    newDiv.classList.add(\"miss\");\n                } else if (payload.gameboard[x][y].hits.length === 0) {\n                     newDiv.classList.add(\"available\");\n                } else {\n                    for (let hit of payload.gameboard[x][y].hits) {\n                        console.log(hit);\n                        if (hit.x === x && hit.y === y) {\n                            newDiv.classList.add(\"hit\");\n                        } else {\n                            newDiv.classList.add(\"available\");\n                        }\n                    }\n                }\n                this.computerPlayerBoard.appendChild(newDiv);\n            }\n        }\n        return;\n    }\n\n    displayWinner(msg, payload) {\n\n    }\n\n    applyEventListeners() {\n\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n//# sourceURL=webpack://battleship/./src/views/game-view.js?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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