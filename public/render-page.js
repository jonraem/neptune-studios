(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/Users/joniramo_houston/Sites/neptune-studios/node_modules/@reach/router/index.js"), require("fs"), require("/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/lodash.js"), require("/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/filter.js"), require("/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/get.js"), require("path"), require("react"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/Users/joniramo_houston/Sites/neptune-studios/node_modules/@reach/router/index.js", "fs", "/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/lodash.js", "/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/filter.js", "/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/get.js", "path", "react", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/Users/joniramo_houston/Sites/neptune-studios/node_modules/@reach/router/index.js"), require("fs"), require("/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/lodash.js"), require("/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/filter.js"), require("/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/get.js"), require("path"), require("react"), require("react-dom/server"));
	else
		root["lib"] = factory(root["/Users/joniramo_houston/Sites/neptune-studios/node_modules/@reach/router/index.js"], root["fs"], root["/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/lodash.js"], root["/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/filter.js"], root["/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/get.js"], root["path"], root["react"], root["react-dom/server"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_lodash_filter__, __WEBPACK_EXTERNAL_MODULE_lodash_get__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/_this_is_virtual_fs_path_/$virtual/sync-requires.js":
/*!********************************************************************!*\
  !*** ./.cache/_this_is_virtual_fs_path_/$virtual/sync-requires.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const{hot}=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");// prefer default export if available
const preferDefault=m=>m&&m.default||m;exports.components={"component---src-pages-404-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),"component---src-pages-about-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/about.js */ "./src/pages/about.js"))),"component---src-pages-contact-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/contact.js */ "./src/pages/contact.js"))),"component---src-pages-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),"component---src-pages-work-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/work.js */ "./src/pages/work.js")))};

/***/ }),

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=(api,args,defaultReturn,argTransform)=>{if(!apis[api]){console.log(`This API doesn't exist`,api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!==`undefined`);if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // Import React so that you can use JSX in HeadComponents
 * const React = require("react")
 *
 * const HtmlAttributes = {
 *   lang: "en"
 * }
 *
 * const HeadComponents = [
 *   <script key="my-script" src="https://gatsby.dev/my-script" />
 * ]
 *
 * const BodyAttributes = {
 *   "data-theme": "dark"
 * }
 *
 * exports.onRenderBody = ({
 *   setHeadComponents,
 *   setHtmlAttributes,
 *   setBodyAttributes
 * }, pluginOptions) => {
 *   setHtmlAttributes(HtmlAttributes)
 *   setHeadComponents(HeadComponents)
 *   setBodyAttributes(BodyAttributes)
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
const emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, grabMatchParams, findPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grabMatchParams", function() { return grabMatchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{const pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
const trimmedPathname=Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname,"")// Remove any hashfragment
.split(`#`)[0]// Remove search query
.split(`?`)[0];return trimmedPathname;};function absolutify(path){// If it's already absolute, return as-is
if(path.startsWith(`/`)||path.startsWith(`https://`)||path.startsWith(`http://`)){return path;}// Calculate path relative to current location, adding a trailing slash to
// match behavior of @reach/router
return new URL(path,window.location.href+(window.location.href.endsWith(`/`)?``:`/`)).pathname;}/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(({path,matchPath})=>{return{path:matchPath,originalPath:path};});const path=Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(pickPaths,trimmedPathname);if(path){return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);}return null;};/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */const grabMatchParams=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(({path,matchPath})=>{return{path:matchPath,originalPath:path};});const path=Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(pickPaths,trimmedPathname);if(path){return path.params;}return{};};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);return foundPath;};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, useScrollRestoration, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname, unstable_collectionGraphql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_collectionGraphql", function() { return unstable_collectionGraphql; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollRestoration", function() { return gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__["useScrollRestoration"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
const prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_5__["default"].enqueue;const StaticQueryContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,staticQueryData=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{var _context$query;if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!==`function`&&"production"===`development`){throw new Error(`You're likely using a version of React that doesn't support Hooks\n`+`Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);}const context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);}if(context===null||context===void 0?void 0:(_context$query=context[query])===null||_context$query===void 0?void 0:_context$query.data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,query:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,render:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}function unstable_collectionGraphql(){// TODO: Strip this out of the component and throw error if it gets called
return null;}

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: PageResourceStatus, BaseLoader, ProdLoader, setLoader, publicLoader, default, getStaticQueryResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResourceStatus", function() { return PageResourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticQueryResults", function() { return getStaticQueryResults; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
/**
 * Available resource loading statuses
 */const PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:`error`,/**
   * Resources loaded successfully
   */Success:`success`};const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=path=>{const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json`;};function doFetch(url,method=`GET`){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});}const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator&&typeof navigator.connection!==`undefined`){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};const toPageResources=(pageData,component=null)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath,staticQueryHashes:pageData.staticQueryHashes};return{component,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){this.inFlightNetworkRequests=new Map();// Map of pagePath -> Page. Where Page is an object with: {
//   status: PageResourceStatus.Success || PageResourceStatus.Error,
//   payload: PageResources, // undefined if PageResourceStatus.Error
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//     staticQueryHashes
//   },
//   staticQueryResults
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.staticQueryDb={};this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["setMatchPaths"])(matchPaths);}memoizedGet(url){let inFlightPromise=this.inFlightNetworkRequests.get(url);if(!inFlightPromise){inFlightPromise=doFetch(url,`GET`);this.inFlightNetworkRequests.set(url,inFlightPromise);}// Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
return inFlightPromise.then(response=>{this.inFlightNetworkRequests.delete(url);return response;}).catch(err=>{this.inFlightNetworkRequests.delete(url);throw err;});}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}fetchPageDataJson(loadObj){const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return this.memoizedGet(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error(`not a valid pageData response`);}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath===`/404.html`){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return this.fetchPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return this.fetchPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});}loadPageDataJson(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return this.fetchPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findMatchPath"])(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlightPromise=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(allData=>{const result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}let pageData=result.payload;const{componentChunkName,staticQueryHashes=[]}=pageData;const finalResult={};const componentChunkPromise=this.loadComponent(componentChunkName).then(component=>{finalResult.createdAt=new Date();let pageResources;if(!component){finalResult.status=PageResourceStatus.Error;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:``});pageResources=toPageResources(pageData,component);}// undefined if final result is an error
return pageResources;});const staticQueryBatchPromise=Promise.all(staticQueryHashes.map(staticQueryHash=>{// Check for cache in case this static query result has already been loaded
if(this.staticQueryDb[staticQueryHash]){const jsonPayload=this.staticQueryDb[staticQueryHash];return{staticQueryHash,jsonPayload};}return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req=>{const jsonPayload=JSON.parse(req.responseText);return{staticQueryHash,jsonPayload};});})).then(staticQueryResults=>{const staticQueryResultsMap={};staticQueryResults.forEach(({staticQueryHash,jsonPayload})=>{staticQueryResultsMap[staticQueryHash]=jsonPayload;this.staticQueryDb[staticQueryHash]=jsonPayload;});return staticQueryResultsMap;});return Promise.all([componentChunkPromise,staticQueryBatchPromise]).then(([pageResources,staticQueryResults])=>{let payload;if(pageResources){payload={...pageResources,staticQueryResults};finalResult.payload=payload;_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`,{page:payload,pageResources:payload});}this.pageDb.set(pagePath,finalResult);return payload;});});inFlightPromise.then(response=>{this.inFlightDb.delete(pagePath);}).catch(error=>{this.inFlightDb.delete(pagePath);throw error;});this.inFlightDb.set(pagePath,inFlightPromise);return inFlightPromise;}// returns undefined if loading page ran into errors
loadPageSync(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){const pageData=this.pageDb.get(pagePath).payload;return pageData;}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}const realPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}});return true;}doPrefetch(pagePath){throw new Error(`doPrefetch not implemented`);}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}}isPageNotFound(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDb.get(pagePath);return!page||page.notFound;}loadAppData(retries=0){return this.memoizedGet(`${""}/page-data/app-data.json`).then(req=>{const{status,responseText}=req;let appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return this.loadAppData(retries+1);}// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid app-data response`);}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});}}const createComponentUrls=componentChunkName=>(window.___chunkMapping[componentChunkName]||[]).map(chunk=>""+chunk);class ProdLoader extends BaseLoader{constructor(asyncRequires,matchPaths){const loadComponent=chunkName=>asyncRequires.components[chunkName]?asyncRequires.components[chunkName]().then(preferDefault)// loader will handle the case when component is null
.catch(()=>null):Promise.resolve();super(loadComponent,matchPaths);}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return Object(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl,{crossOrigin:`anonymous`,as:`fetch`}).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath)).then(result=>{if(result.status!==PageResourceStatus.Success){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(()=>pageData);});}loadPageDataJson(rawPath){return super.loadPageDataJson(rawPath).then(data=>{if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,`HEAD`).then(req=>{if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:rawPath=>{console.warn(`Warning: getResourcesForPathname is deprecated. Use loadPage instead`);return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:rawPath=>{console.warn(`Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`);return instance.i.loadPageSync(rawPath);},enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),loadPageSync:rawPath=>instance.loadPageSync(rawPath),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath),loadAppData:()=>instance.loadAppData()};/* harmony default export */ __webpack_exports__["default"] = (publicLoader);function getStaticQueryResults(){return instance.staticQueryDb;}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (path=>{if(path===undefined){return path;}if(path===`/`){return`/`;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1);}return path;});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url,options){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);Object.keys(options).forEach(key=>{link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url,options){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ "./.cache/route-announcer-props.js":
/*!*****************************************!*\
  !*** ./.cache/route-announcer-props.js ***!
  \*****************************************/
/*! exports provided: RouteAnnouncerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAnnouncerProps", function() { return RouteAnnouncerProps; });
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps={id:`gatsby-announcer`,style:{position:`absolute`,top:0,width:1,height:1,padding:0,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,border:0},"aria-live":`assertive`,"aria-atomic":`true`};

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: sanitizeComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponents", function() { return sanitizeComponents; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
const React=__webpack_require__(/*! react */ "react");const fs=__webpack_require__(/*! fs */ "fs");const{join}=__webpack_require__(/*! path */ "path");const{renderToString,renderToStaticMarkup}=__webpack_require__(/*! react-dom/server */ "react-dom/server");const{ServerLocation,Router,isRedirect}=__webpack_require__(/*! @reach/router */ "@reach/router");const{get,merge,isObject,flatten,uniqBy,flattenDeep,replace,concat,memoize}=__webpack_require__(/*! lodash */ "lodash");const{RouteAnnouncerProps}=__webpack_require__(/*! ./route-announcer-props */ "./.cache/route-announcer-props.js");const apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");const syncRequires=__webpack_require__(/*! $virtual/sync-requires */ "./.cache/_this_is_virtual_fs_path_/$virtual/sync-requires.js");const{version:gatsbyVersion}=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json");const{grabMatchParams}=__webpack_require__(/*! ./find-path */ "./.cache/find-path.js");const stats=JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`,`utf-8`));const chunkMapping=JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`,`utf-8`));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getStaticQueryUrl=hash=>`${""}/page-data/sq/d/${hash}.json`;const getPageData=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const absolutePageDataPath=join(process.cwd(),`public`,pageDataPath);const pageDataRaw=fs.readFileSync(absolutePageDataPath);try{return JSON.parse(pageDataRaw.toString());}catch(err){return null;}};const appDataPath=join(`page-data`,`app-data.json`);const getAppDataUrl=memoize(()=>{let appData;try{const absoluteAppDataPath=join(process.cwd(),`public`,appDataPath);const appDataRaw=fs.readFileSync(absoluteAppDataPath);appData=JSON.parse(appDataRaw.toString());if(!appData){return null;}}catch(err){return null;}return`${""}/${appDataPath}`;});const loadPageDataSync=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=ensureArray(components);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(false){}return component;});};const ensureArray=components=>{if(Array.isArray(components)){// remove falsy items and flatten
return flattenDeep(components.filter(val=>Array.isArray(val)?val.length>0:val));}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = ((pagePath,callback)=>{var _postBodyComponents;let bodyHtml=``;let headComponents=[/*#__PURE__*/React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{htmlAttributes=merge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{bodyAttributes=merge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{bodyProps=merge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageData=getPageData(pagePath);const pageDataUrl=getPageDataUrl(pagePath);const appDataUrl=getAppDataUrl();const{componentChunkName,staticQueryHashes=[]}=pageData;const staticQueryUrls=staticQueryHashes.map(getStaticQueryUrl);class RouteHandler extends React.Component{render(){var _pageData$result,_pageData$result$page;const props={...this.props,...pageData.result,params:{...grabMatchParams(this.props.location.pathname),...(((_pageData$result=pageData.result)===null||_pageData$result===void 0?void 0:(_pageData$result$page=_pageData$result.pageContext)===null||_pageData$result$page===void 0?void 0:_pageData$result$page.__params)||{})},// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined};const pageElement=createElement(syncRequires.components[componentChunkName],props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=/*#__PURE__*/React.createElement(ServerLocation,{url:`${""}${pagePath}`},/*#__PURE__*/React.createElement(Router,{id:"gatsby-focus-wrapper",baseuri:""},/*#__PURE__*/React.createElement(RouteHandler,{path:"/*"})),/*#__PURE__*/React.createElement("div",RouteAnnouncerProps));const bodyComponent=apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
let scriptsAndStyles=flatten([`app`,componentChunkName].map(s=>{const fetchKey=`assetsByChunkName[${s}]`;let chunks=get(stats,fetchKey);const namedChunkGroups=get(stats,`namedChunkGroups`);if(!chunks){return null;}chunks=chunks.map(chunk=>{if(chunk===`/`){return null;}return{rel:`preload`,name:chunk};});namedChunkGroups[s].assets.forEach(asset=>chunks.push({rel:`preload`,name:asset}));const childAssets=namedChunkGroups[s].childAssets;for(const rel in childAssets){chunks=concat(chunks,childAssets[rel].map(chunk=>{return{rel,name:chunk};}));}return chunks;})).filter(s=>isObject(s)).sort((s1,s2)=>s1.rel==`preload`?-1:1);// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,item=>item.name);const scripts=scriptsAndStyles.filter(script=>script.name&&script.name.endsWith(`.js`));const styles=scriptsAndStyles.filter(style=>style.name&&style.name.endsWith(`.css`));apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});scripts.slice(0).reverse().forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push(/*#__PURE__*/React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}staticQueryUrls.forEach(staticQueryUrl=>headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:staticQueryUrl,href:staticQueryUrl,crossOrigin:"anonymous"})));if(appDataUrl){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:appDataUrl,href:appDataUrl,crossOrigin:"anonymous"}));}styles.slice(0).reverse().forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(/*#__PURE__*/React.createElement("style",{"data-href":`${""}/${style.name}`,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),`public`,style.name),`utf-8`)}}));}});// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));let bodyScripts=[];if(chunkMapping[`polyfill`]){chunkMapping[`polyfill`].forEach(script=>{const scriptPath=`${""}${script}`;bodyScripts.push(/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,noModule:true}));});}// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
bodyScripts=bodyScripts.concat(scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,async:true});}));(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bodyScripts));apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(/*#__PURE__*/React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;callback(null,html);});

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stripPrefix; });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */function stripPrefix(str,prefix=``){if(!prefix){return str;}if(str===prefix){return`/`;}if(str.startsWith(`${prefix}/`)){return str.slice(prefix.length);}return str;}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.default=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2.default)({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;logDeprecationNotice("resolutions","the gatsby-image v2 prop \"fixed\"");delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;logDeprecationNotice("sizes","the gatsby-image v2 prop \"fluid\"");delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */var hasArtDirectionSupport=function hasArtDirectionSupport(currentData){return!!currentData&&Array.isArray(currentData)&&currentData.some(function(image){return typeof image.media!=="undefined";});};/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */var matchesMedia=function matchesMedia(_ref){var media=_ref.media;return media?isBrowser&&!!window.matchMedia(media).matches:false;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string?} Returns image src or undefined it not given.
 */var getImageCacheKey=function getImageCacheKey(_ref2){var fluid=_ref2.fluid,fixed=_ref2.fixed;var srcData=getCurrentSrcData(fluid||fixed||[]);return srcData&&srcData.src;};/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */var getCurrentSrcData=function getCurrentSrcData(currentData){if(isBrowser&&hasArtDirectionSupport(currentData)){// Do we have an image for the current Viewport?
var foundMedia=currentData.findIndex(matchesMedia);if(foundMedia!==-1){return currentData[foundMedia];}// No media matches, select first element without a media condition
var noMedia=currentData.findIndex(function(image){return typeof image.media==="undefined";});if(noMedia!==-1){return currentData[noMedia];}}// Else return the first image.
return currentData[0];};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);return imageCache[cacheKey]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);if(cacheKey){imageCache[cacheKey]=true;}};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners.delete(entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,srcSet=_ref3.srcSet,srcSetWebp=_ref3.srcSetWebp,media=_ref3.media,sizes=_ref3.sizes;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:src},srcSetWebp&&/*#__PURE__*/_react.default.createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),srcSet&&/*#__PURE__*/_react.default.createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){console.warn("We've found "+without.length+" sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,tracedSVG=_ref4.tracedSVG;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref5){var src=_ref5.src,media=_ref5.media,base64=_ref5.base64;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref6,isWebp){var srcSet=_ref6.srcSet,srcSetWebp=_ref6.srcSetWebp,media=_ref6.media,sizes=_ref6.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners.delete(el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var src=props.src,imageVariants=props.imageVariants,generateSources=props.generateSources,spreadProps=props.spreadProps,ariaHidden=props.ariaHidden;var baseImage=/*#__PURE__*/_react.default.createElement(Img,(0,_extends2.default)({ref:ref,src:src},spreadProps,{ariaHidden:ariaHidden}));return imageVariants.length>1?/*#__PURE__*/_react.default.createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;});var Img=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,ariaHidden=props.ariaHidden,otherProps=(0,_objectWithoutPropertiesLoose2.default)(props,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return/*#__PURE__*/_react.default.createElement("img",(0,_extends2.default)({"aria-hidden":ariaHidden,sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes.default.object,onError:_propTypes.default.func,onLoad:_propTypes.default.func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn,isHydrated:false};_this.imageRef=/*#__PURE__*/_react.default.createRef();_this.placeholderRef=props.placeholderRef||/*#__PURE__*/_react.default.createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2.default)(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){this.setState({isHydrated:isBrowser});if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){_this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
// for lazyloaded components this might be null
// TODO fix imgCached behaviour as it's now false when it's lazyloaded
imgCached:!!(_this2.imageRef.current&&_this2.imageRef.current.currentSrc)});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var imageVariants=fluid||fixed;// Abort early if missing image data (#25371)
if(!imageVariants){return null;}var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2.default)({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2.default)({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,imgStyle,placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};// Initial client render state needs to match SSR until hydration finishes.
// Once hydration completes, render again to update to the correct image.
// `imageVariants` is always an Array type at this point due to `convertProps()`
var image=!this.state.isHydrated?imageVariants[0]:getCurrentSrcData(imageVariants);if(fluid){return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2.default)({position:"relative",overflow:"hidden",maxWidth:image.maxWidth?image.maxWidth+"px":null,maxHeight:image.maxHeight?image.maxHeight+"px":null},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var divStyle=(0,_extends2.default)({position:"relative",overflow:"hidden",display:"inline-block",width:image.width,height:image.height},style);if(style.display==="inherit"){delete divStyle.display;}return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(image.srcSet)},bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,width:image.width,opacity:!this.state.imgLoaded?1:0,height:image.height},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,width:image.width,height:image.height,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}return null;};return Image;}(_react.default.Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes.default.shape({width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});var fluidObject=_propTypes.default.shape({aspectRatio:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,sizes:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string,maxWidth:_propTypes.default.number,maxHeight:_propTypes.default.number});function requireFixedOrFluid(originalPropTypes){return function(props,propName,componentName){var _PropTypes$checkPropT;if(!props.fixed&&!props.fluid){throw new Error("The prop `fluid` or `fixed` is marked as required in `"+componentName+"`, but their values are both `undefined`.");}_propTypes.default.checkPropTypes((_PropTypes$checkPropT={},_PropTypes$checkPropT[propName]=originalPropTypes,_PropTypes$checkPropT),props,"prop",componentName);};}// If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props
Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:requireFixedOrFluid(_propTypes.default.oneOfType([fixedObject,_propTypes.default.arrayOf(fixedObject)])),fluid:requireFixedOrFluid(_propTypes.default.oneOfType([fluidObject,_propTypes.default.arrayOf(fluidObject)])),fadeIn:_propTypes.default.bool,durationFadeIn:_propTypes.default.number,title:_propTypes.default.string,alt:_propTypes.default.string,className:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),// Support Glamor's css prop.
critical:_propTypes.default.bool,crossOrigin:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),style:_propTypes.default.object,imgStyle:_propTypes.default.object,placeholderStyle:_propTypes.default.object,placeholderClassName:_propTypes.default.string,backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),onLoad:_propTypes.default.func,onError:_propTypes.default.func,onStartLoad:_propTypes.default.func,Tag:_propTypes.default.string,itemProp:_propTypes.default.string,loading:_propTypes.default.oneOf(["auto","lazy","eager"]),draggable:_propTypes.default.bool};var _default=Image;exports.default=_default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _utils = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

var isAbsolutePath = function isAbsolutePath(path) {
  return path === null || path === void 0 ? void 0 : path.startsWith("/");
};

function withPrefix(path, prefix) {
  var _ref, _prefix;

  if (prefix === void 0) {
    prefix = getGlobalBasePrefix();
  }

  if (!isLocalLink(path)) {
    return path;
  }

  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }

  var base = (_ref = (_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : getGlobalPathPrefix()) !== null && _ref !== void 0 ? _ref : "/";
  return "" + ((base === null || base === void 0 ? void 0 : base.endsWith("/")) ? base.slice(0, -1) : base) + (path.startsWith("/") ? path : "/" + path);
} // These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.


var getGlobalPathPrefix = function getGlobalPathPrefix() {
  return  false ? undefined : "";
};

var getGlobalBasePrefix = function getGlobalBasePrefix() {
  return  false ? undefined : "";
};

var isLocalLink = function isLocalLink(path) {
  return path && !path.startsWith("http://") && !path.startsWith("https://") && !path.startsWith("//");
};

function withAssetPrefix(path) {
  return withPrefix(path, getGlobalPathPrefix());
}

function absolutify(path, current) {
  // If it's already absolute, return as-is
  if (isAbsolutePath(path)) {
    return path;
  }

  return (0, _utils.resolve)(path, current);
}

var rewriteLinkPath = function rewriteLinkPath(path, relativeTo) {
  if (typeof path === "number") {
    return path;
  }

  if (!isLocalLink(path)) {
    return path;
  }

  return isAbsolutePath(path) ? withPrefix(path) : absolutify(path, relativeTo);
};

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    _this.defaultGetProps = function (_ref2) {
      var isPartiallyCurrent = _ref2.isPartiallyCurrent,
          isCurrent = _ref2.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    };

    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(rewriteLinkPath(this.props.to, window.location.pathname)).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(rewriteLinkPath(this.props.to, window.location.pathname)).pathname);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(rewriteLinkPath(_this2.props.to, window.location.pathname)).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);

    if (false) {}

    return /*#__PURE__*/_react.default.createElement(_router.Location, null, function (_ref3) {
      var location = _ref3.location;
      var prefixedTo = rewriteLinkPath(to, location.pathname);
      return isLocalLink(prefixedTo) ? /*#__PURE__*/_react.default.createElement(_router.Link, (0, _extends2.default)({
        to: prefixedTo,
        state: state,
        getProps: getProps,
        innerRef: _this3.handleRef,
        onMouseEnter: function onMouseEnter(e) {
          if (_onMouseEnter) {
            _onMouseEnter(e);
          }

          ___loader.hovering((0, _parsePath.parsePath)(prefixedTo).pathname);
        },
        onClick: function onClick(e) {
          if (_onClick) {
            _onClick(e);
          }

          if (e.button === 0 && // ignore right clicks
          !_this3.props.target && // let browser handle "target=_blank"
          !e.defaultPrevented && // onClick prevented default
          !e.metaKey && // ignore clicks with modifier keys...
          !e.altKey && !e.ctrlKey && !e.shiftKey) {
            e.preventDefault();
            var shouldReplace = replace;
            var isCurrent = encodeURI(prefixedTo) === window.location.pathname;

            if (typeof replace !== "boolean" && isCurrent) {
              shouldReplace = true;
            } // Make sure the necessary scripts and data are
            // loaded before continuing.


            window.___navigate(prefixedTo, {
              state: state,
              replace: shouldReplace
            });
          }

          return true;
        }
      }, rest)) : /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        href: prefixedTo
      }, rest));
    });
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var showDeprecationWarning = function showDeprecationWarning(functionName, altFunctionName, version) {
  return console.warn("The \"" + functionName + "\" method is now deprecated and will be removed in Gatsby v" + version + ". Please use \"" + altFunctionName + "\" instead.");
};

var _default = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(rewriteLinkPath(to, window.location.pathname), options);
};

exports.navigate = navigate;

var push = function push(to) {
  showDeprecationWarning("push", "navigate", 3);

  window.___push(rewriteLinkPath(to, window.location.pathname));
};

exports.push = push;

var replace = function replace(to) {
  showDeprecationWarning("replace", "navigate", 3);

  window.___replace(rewriteLinkPath(to, window.location.pathname));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  showDeprecationWarning("navigateTo", "navigate", 3);
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContainer = exports.ScrollContext = void 0;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

exports.ScrollContext = _scrollHandler.ScrollHandler;

var _scrollContainer = __webpack_require__(/*! ./scroll-container */ "./node_modules/gatsby-react-router-scroll/scroll-container.js");

exports.ScrollContainer = _scrollContainer.ScrollContainer;

var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");

exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-container.js":
/*!*********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-container.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollContainer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

// TODO: In Gatsby v3, this file should be removed.
// We are deprecating this in V2 in favor of useScrollRestoration
var propTypes = {
  scrollKey: _propTypes.default.string.isRequired,
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired
};
var hasNotWarnedDeprecation = true;

var ScrollContainerImplementation = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollContainerImplementation, _React$Component);

  function ScrollContainerImplementation(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    if (false) {}

    return _this;
  }

  var _proto = ScrollContainerImplementation.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // eslint-disable-next-line react/no-find-dom-node
    var node = _reactDom.default.findDOMNode(this);

    var _this$props = this.props,
        location = _this$props.location,
        scrollKey = _this$props.scrollKey;
    if (!node) return;
    node.addEventListener("scroll", function () {
      _this2.props.context.save(location, scrollKey, node.scrollTop);
    });
    var position = this.props.context.read(location, scrollKey);
    node.scrollTo(0, position || 0);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ScrollContainerImplementation;
}(React.Component);

var ScrollContainer = function ScrollContainer(props) {
  return /*#__PURE__*/React.createElement(_router.Location, null, function (_ref) {
    var location = _ref.location;
    return /*#__PURE__*/React.createElement(_scrollHandler.ScrollContext.Consumer, null, function (context) {
      return /*#__PURE__*/React.createElement(ScrollContainerImplementation, (0, _extends2.default)({}, props, {
        context: context,
        location: location
      }));
    });
  });
};

exports.ScrollContainer = ScrollContainer;
ScrollContainer.propTypes = propTypes;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();

    _this.scrollListener = function () {
      var key = _this.props.location.key;

      if (key) {
        _this._stateStorage.save(_this.props.location, key, window.scrollY);
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (hash && scrollPosition === 0) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (false) {}

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (false) {}
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _react = __webpack_require__(/*! react */ "react");

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

function useScrollRestoration(identifier) {
  var location = (0, _router.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, []);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bin, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"gatsby@^2.24.56\",\"_id\":\"gatsby@2.24.67\",\"_inBundle\":false,\"_integrity\":\"sha512-hZe1wUQdiIF4MxR0USfiGqbIc3MoWpT0Ds+RM74QtIOrXx9M4wKWyc0//cFHq6D0Iljkn5p5ourLJDwr15avwA==\",\"_location\":\"/gatsby\",\"_phantomChildren\":{\"@babel/code-frame\":\"7.10.4\",\"@hapi/joi\":\"15.1.1\",\"@types/common-tags\":\"1.8.0\",\"better-opn\":\"2.0.0\",\"chalk\":\"2.4.2\",\"clipboardy\":\"2.3.0\",\"common-tags\":\"1.8.0\",\"configstore\":\"5.0.1\",\"convert-hrtime\":\"3.0.0\",\"envinfo\":\"7.7.3\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"8.1.0\",\"gatsby-core-utils\":\"1.3.22\",\"gatsby-recipes\":\"0.2.30\",\"gatsby-telemetry\":\"1.3.37\",\"get-stream\":\"5.2.0\",\"human-signals\":\"1.1.1\",\"ink\":\"2.7.1\",\"ink-spinner\":\"3.1.0\",\"is-stream\":\"2.0.0\",\"is-valid-path\":\"0.1.1\",\"isexe\":\"2.0.0\",\"lodash\":\"4.17.20\",\"meant\":\"1.0.2\",\"merge-stream\":\"2.0.0\",\"ms\":\"2.1.2\",\"npm-run-path\":\"4.0.1\",\"onetime\":\"5.1.2\",\"opentracing\":\"0.14.4\",\"pretty-error\":\"2.1.1\",\"progress\":\"2.0.3\",\"prompts\":\"2.3.2\",\"react\":\"16.13.1\",\"redux\":\"4.0.5\",\"resolve-cwd\":\"3.0.0\",\"signal-exit\":\"3.0.3\",\"stack-trace\":\"0.0.10\",\"strip-final-newline\":\"2.0.0\",\"update-notifier\":\"4.1.3\",\"uuid\":\"3.4.0\",\"yargs\":\"15.4.1\",\"yurnalist\":\"1.1.2\"},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"gatsby@^2.24.56\",\"name\":\"gatsby\",\"escapedName\":\"gatsby\",\"rawSpec\":\"^2.24.56\",\"saveSpec\":null,\"fetchSpec\":\"^2.24.56\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/gatsby/-/gatsby-2.24.67.tgz\",\"_shasum\":\"94afba4664d5c33e67d791859127d4cc2855025d\",\"_spec\":\"gatsby@^2.24.56\",\"_where\":\"/Users/joniramo_houston/Sites/neptune-studios\",\"author\":{\"name\":\"Kyle Mathews\",\"email\":\"mathews.kyle@gmail.com\"},\"bin\":{\"gatsby\":\"cli.js\"},\"bugs\":{\"url\":\"https://github.com/gatsbyjs/gatsby/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"@babel/code-frame\":\"^7.10.4\",\"@babel/core\":\"^7.11.6\",\"@babel/parser\":\"^7.11.5\",\"@babel/runtime\":\"^7.11.2\",\"@babel/traverse\":\"^7.11.5\",\"@babel/types\":\"^7.11.5\",\"@hapi/joi\":\"^15.1.1\",\"@mikaelkristiansson/domready\":\"^1.0.10\",\"@nodelib/fs.walk\":\"^1.2.4\",\"@pieh/friendly-errors-webpack-plugin\":\"1.7.0-chalk-2\",\"@pmmmwh/react-refresh-webpack-plugin\":\"^0.4.1\",\"@reach/router\":\"^1.3.4\",\"@types/http-proxy\":\"^1.17.4\",\"@typescript-eslint/eslint-plugin\":\"^2.24.0\",\"@typescript-eslint/parser\":\"^2.24.0\",\"address\":\"1.1.2\",\"autoprefixer\":\"^9.8.4\",\"axios\":\"^0.20.0\",\"babel-core\":\"7.0.0-bridge.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.1.0\",\"babel-plugin-add-module-exports\":\"^0.3.3\",\"babel-plugin-dynamic-import-node\":\"^2.3.3\",\"babel-plugin-lodash\":\"3.3.4\",\"babel-plugin-remove-graphql-queries\":\"^2.9.20\",\"babel-preset-gatsby\":\"^0.5.12\",\"better-opn\":\"^2.0.0\",\"better-queue\":\"^3.8.10\",\"bluebird\":\"^3.7.2\",\"body-parser\":\"^1.19.0\",\"browserslist\":\"^4.12.2\",\"cache-manager\":\"^2.11.1\",\"cache-manager-fs-hash\":\"^0.0.9\",\"chalk\":\"^2.4.2\",\"chokidar\":\"^3.4.2\",\"common-tags\":\"^1.8.0\",\"compression\":\"^1.7.4\",\"convert-hrtime\":\"^3.0.0\",\"copyfiles\":\"^2.3.0\",\"core-js\":\"^3.6.5\",\"cors\":\"^2.8.5\",\"css-loader\":\"^1.0.1\",\"date-fns\":\"^2.14.0\",\"debug\":\"^3.2.6\",\"del\":\"^5.1.0\",\"detect-port\":\"^1.3.0\",\"devcert\":\"^1.1.3\",\"dotenv\":\"^8.2.0\",\"eslint\":\"^6.8.0\",\"eslint-config-react-app\":\"^5.2.1\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"^3.13.0\",\"eslint-plugin-graphql\":\"^3.1.1\",\"eslint-plugin-import\":\"^2.22.0\",\"eslint-plugin-jsx-a11y\":\"^6.3.1\",\"eslint-plugin-react\":\"^7.20.6\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"event-source-polyfill\":\"^1.0.15\",\"execa\":\"^4.0.3\",\"express\":\"^4.17.1\",\"express-graphql\":\"^0.9.0\",\"fast-levenshtein\":\"^2.0.6\",\"file-loader\":\"^1.1.11\",\"find-cache-dir\":\"^3.3.1\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"^8.1.0\",\"gatsby-cli\":\"^2.12.102\",\"gatsby-core-utils\":\"^1.3.22\",\"gatsby-graphiql-explorer\":\"^0.4.15\",\"gatsby-legacy-polyfills\":\"^0.0.5\",\"gatsby-link\":\"^2.4.15\",\"gatsby-plugin-page-creator\":\"^2.3.30\",\"gatsby-plugin-typescript\":\"^2.4.21\",\"gatsby-react-router-scroll\":\"^3.0.14\",\"gatsby-telemetry\":\"^1.3.37\",\"glob\":\"^7.1.6\",\"got\":\"8.3.2\",\"graphql\":\"^14.6.0\",\"graphql-compose\":\"^6.3.8\",\"graphql-playground-middleware-express\":\"^1.7.18\",\"hasha\":\"^5.2.0\",\"http-proxy\":\"^1.18.1\",\"invariant\":\"^2.2.4\",\"is-relative\":\"^1.0.0\",\"is-relative-url\":\"^3.0.0\",\"jest-worker\":\"^24.9.0\",\"json-loader\":\"^0.5.7\",\"json-stringify-safe\":\"^5.0.1\",\"latest-version\":\"5.1.0\",\"lodash\":\"^4.17.20\",\"md5-file\":\"^3.2.3\",\"meant\":\"^1.0.1\",\"micromatch\":\"^4.0.2\",\"mime\":\"^2.4.6\",\"mini-css-extract-plugin\":\"^0.11.2\",\"mitt\":\"^1.2.0\",\"mkdirp\":\"^0.5.1\",\"moment\":\"^2.27.0\",\"name-all-modules-plugin\":\"^1.0.1\",\"normalize-path\":\"^3.0.0\",\"null-loader\":\"^3.0.0\",\"opentracing\":\"^0.14.4\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"p-defer\":\"^3.0.0\",\"parseurl\":\"^1.3.3\",\"physical-cpu-count\":\"^2.0.0\",\"pnp-webpack-plugin\":\"^1.6.4\",\"postcss-flexbugs-fixes\":\"^4.2.1\",\"postcss-loader\":\"^3.0.0\",\"prompts\":\"^2.3.2\",\"prop-types\":\"^15.7.2\",\"query-string\":\"^6.13.1\",\"raw-loader\":\"^0.5.1\",\"react-dev-utils\":\"^4.2.3\",\"react-error-overlay\":\"^3.0.0\",\"react-hot-loader\":\"^4.12.21\",\"react-refresh\":\"^0.8.3\",\"redux\":\"^4.0.5\",\"redux-thunk\":\"^2.3.0\",\"semver\":\"^7.3.2\",\"shallow-compare\":\"^1.2.2\",\"signal-exit\":\"^3.0.3\",\"slugify\":\"^1.4.4\",\"socket.io\":\"^2.3.0\",\"socket.io-client\":\"2.3.0\",\"st\":\"^2.0.0\",\"stack-trace\":\"^0.0.10\",\"string-similarity\":\"^1.2.2\",\"style-loader\":\"^0.23.1\",\"terser-webpack-plugin\":\"^2.3.8\",\"tmp\":\"^0.2.1\",\"true-case-path\":\"^2.2.1\",\"type-of\":\"^2.0.1\",\"url-loader\":\"^1.1.2\",\"util.promisify\":\"^1.0.1\",\"uuid\":\"3.4.0\",\"v8-compile-cache\":\"^1.1.2\",\"webpack\":\"^4.44.1\",\"webpack-dev-middleware\":\"^3.7.2\",\"webpack-dev-server\":\"^3.11.0\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.2\",\"webpack-stats-plugin\":\"^0.3.2\",\"webpack-virtual-modules\":\"^0.2.2\",\"xstate\":\"^4.11.0\",\"yaml-loader\":\"^0.6.0\"},\"deprecated\":false,\"description\":\"Blazing fast modern site generator for React\",\"devDependencies\":{\"@babel/cli\":\"^7.11.6\",\"@babel/runtime\":\"^7.11.2\",\"@types/hapi__joi\":\"^16.0.12\",\"@types/micromatch\":\"^4.0.1\",\"@types/normalize-path\":\"^3.0.0\",\"@types/reach__router\":\"^1.3.5\",\"@types/semver\":\"^7.1.0\",\"@types/signal-exit\":\"^3.0.0\",\"@types/socket.io\":\"^2.1.4\",\"@types/string-similarity\":\"^3.0.0\",\"@types/tmp\":\"^0.2.0\",\"@types/webpack-dev-middleware\":\"^3.7.1\",\"@types/webpack-virtual-modules\":\"^0.1.0\",\"babel-preset-gatsby-package\":\"^0.5.3\",\"cross-env\":\"^7.0.2\",\"documentation\":\"^12.3.0\",\"enhanced-resolve\":\"^4.2.0\",\"eslint-plugin-jsx-a11y\":\"^6.3.1\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"rimraf\":\"^3.0.2\",\"typescript\":\"^3.9.5\",\"xhr-mock\":\"^2.5.1\",\"zipkin\":\"^0.22.0\",\"zipkin-javascript-opentracing\":\"^3.0.0\",\"zipkin-transport-http\":\"^0.22.0\"},\"engines\":{\"node\":\">=10.13.0\"},\"files\":[\"apis.json\",\"ipc.json\",\"cache-dir/\",\"cli.js\",\"dist/\",\"gatsby-admin-public/\",\"graphql.js\",\"index.d.ts\",\"scripts/postinstall.js\",\"utils.js\",\"internal.js\",\"internal.d.ts\",\"!**/__tests__/\"],\"gitHead\":\"57c79b1df723ba4e9f23a5cf431bad8d85c31d5e\",\"homepage\":\"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme\",\"keywords\":[\"blog\",\"generator\",\"jekyll\",\"markdown\",\"react\",\"ssg\",\"website\"],\"license\":\"MIT\",\"main\":\"cache-dir/commonjs/gatsby-browser-entry.js\",\"module\":\"cache-dir/gatsby-browser-entry.js\",\"name\":\"gatsby\",\"peerDependencies\":{\"react\":\"^16.4.2\",\"react-dom\":\"^16.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/gatsbyjs/gatsby.git\"},\"resolutions\":{\"graphql\":\"^14.6.0\",\"@mdx-js/mdx\":\"^2.0.0-next.3\",\"@mdx-js/react\":\"^2.0.0-next.3\",\"@mdx-js/runtime\":\"^2.0.0-next.3\",\"remark-mdx\":\"^2.0.0-next.3\",\"remark-mdxjs\":\"^2.0.0-next.3\"},\"scripts\":{\"build\":\"npm run build:types && npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs\",\"build:cjs\":\"babel cache-dir --out-dir cache-dir/commonjs --ignore \\\"**/__tests__\\\" --ignore \\\"**/__mocks__\\\"\",\"build:internal-plugins\":\"copyfiles -u 1 src/internal-plugins/**/package.json dist\",\"build:rawfiles\":\"copyfiles -u 1 src/internal-plugins/**/raw_* dist\",\"build:src\":\"babel src --out-dir dist --source-maps --verbose --ignore \\\"**/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__,**/__mocks__\\\" --extensions \\\".ts,.js\\\"\",\"build:types\":\"tsc --emitDeclarationOnly --declaration --declarationDir dist\",\"clean-test-bundles\":\"find test/ -type f -name bundle.js* -exec rm -rf {} +\",\"postbuild\":\"node scripts/output-api-file.js && yarn workspace gatsby-admin build\",\"postinstall\":\"node scripts/postinstall.js\",\"prebuild\":\"rimraf dist && rimraf cache-dir/commonjs\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch\"},\"types\":\"index.d.ts\",\"version\":\"2.24.67\",\"yargs\":{\"boolean-negation\":false}}");

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(/*! react */ "react"),n=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),r=__webpack_require__(/*! scheduler */ "./node_modules/react-dom/node_modules/scheduler/index.js");function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */ "./node_modules/react-dom/cjs/react-dom.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-dom/node_modules/scheduler/cjs/scheduler.production.min.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-dom/node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),

/***/ "./node_modules/react-dom/node_modules/scheduler/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/node_modules/scheduler/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ "./node_modules/react-dom/node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-hook-form/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.js ***!
  \********************************************************/
/*! exports provided: Controller, FormProvider, appendErrors, get, transformToNestObject, useFieldArray, useForm, useFormContext, useWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return FormProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendErrors", function() { return appendErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToNestObject", function() { return transformToNestObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFieldArray", function() { return useFieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormContext", function() { return useFormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWatch", function() { return useWatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isHTMLElement = (value) => value instanceof HTMLElement;

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const VALUE = 'value';
const SELECT = 'select';
const UNDEFINED = 'undefined';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

function attachEventListeners({ ref }, shouldAttachChangeEvent, handleChange) {
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isNullOrUndefined = (value) => value == null;

var isArray = (value) => Array.isArray(value);

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !isArray(value) &&
    isObjectType(value) &&
    !(value instanceof Date);

var isKey = (value) => !isArray(value) &&
    (/^\w*$/.test(value) ||
        !/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(value));

var stringToPath = (input) => {
    const result = [];
    input.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, (match, mathNumber, mathQuote, originalString) => {
        result.push(mathQuote
            ? originalString.replace(/\\(\\)?/g, '$1')
            : mathNumber || match);
    });
    return result;
};

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data) => Object.entries(data).reduce((previous, [key, value]) => {
    if (!isKey(key)) {
        set(previous, key, value);
        return previous;
    }
    return Object.assign(Object.assign({}, previous), { [key]: value });
}, {});

var isUndefined = (val) => val === undefined;

var filterOutFalsy = (value) => value.filter(Boolean);

var get = (obj, path, defaultValue) => {
    const result = filterOutFalsy(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus) {
                    field.ref.focus();
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => isArray(options)
    ? options.reduce((previous, option) => option && option.ref.checked
        ? {
            isValid: true,
            value: option.ref.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isRadioInput = (element) => element.type === 'radio';

var isFileInput = (element) => element.type === 'file';

var isCheckBoxInput = (element) => element.type === 'checkbox';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.ref.checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || value === ''
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fieldsRef, name, shallowFieldsStateRef, excludeDisabled) {
    const field = fieldsRef.current[name];
    if (field) {
        const { ref: { value, disabled }, ref, } = field;
        if (disabled && excludeDisabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field.options).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field.options).value;
        }
        return value;
    }
    if (shallowFieldsStateRef) {
        return get(shallowFieldsStateRef.current, name);
    }
}

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const path = updatePath.slice(0, -1);
    const length = path.length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef = undefined;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef = undefined;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, shallowFieldsStateRef, shouldUnregister, forceDelete) {
    const { ref, ref: { name, type }, } = field;
    const fieldRef = fieldsRef.current[name];
    if (!shouldUnregister) {
        const value = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        if (!isUndefined(value)) {
            set(shallowFieldsStateRef.current, name, value);
        }
    }
    if (!type) {
        delete fieldsRef.current[name];
        return;
    }
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldRef) {
        const { options } = fieldRef;
        if (isArray(options) && options.length) {
            filterOutFalsy(options).forEach((option, index) => {
                const { ref } = option;
                if ((ref && isDetached(ref) && isSameRef(option, ref)) || forceDelete) {
                    removeAllEventListeners(ref, handleChange);
                    unset(options, `[${index}]`);
                }
            });
            if (options && !filterOutFalsy(options).length) {
                delete fieldsRef.current[name];
            }
        }
        else {
            delete fieldsRef.current[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        delete fieldsRef.current[name];
    }
}

function setFieldArrayDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setFieldArrayDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                get(defaultValues[index] || {}, key) === values[index][key]
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        !dirtyFields.length &&
            parentNode &&
            delete parentNode[parentName];
    }
    return dirtyFields.length ? dirtyFields : undefined;
}

var isString = (value) => typeof value === 'string';

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            if ((isObject(targetValue) && isObject(sourceValue)) ||
                (isArray(targetValue) && isArray(sourceValue))) {
                target[key] = deepMerge(targetValue, sourceValue);
            }
            else {
                target[key] = sourceValue;
            }
        }
        catch (_a) { }
    }
    return target;
}

var getFieldsValues = (fieldsRef, shallowFieldsStateRef, excludeDisabled, search) => {
    const output = {};
    for (const name in fieldsRef.current) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : isArray(search) && search.find((data) => name.startsWith(data)))) {
            output[name] = getFieldValue(fieldsRef, name, undefined, excludeDisabled);
        }
    }
    return deepMerge(Object.assign({}, ((shallowFieldsStateRef || {}).current || {})), transformToNestObject(output));
};

function deepEqual(object1 = [], object2 = [], isErrorObject) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        if (!(isErrorObject && ['ref', 'context'].includes(key))) {
            const val1 = object1[key];
            const val2 = object2[key];
            if ((isObject(val1) || isArray(val1)) && (isObject(val2) || isArray(val2))
                ? !deepEqual(val1, val2, isErrorObject)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

function shouldRenderBasedOnError({ errors, name, error, validFields, fieldsWithValidation, }) {
    const isValid = isUndefined(error);
    const previousError = get(errors, name);
    return ((isValid && !!previousError) ||
        (!isValid && !deepEqual(previousError, error, true)) ||
        (isValid && get(fieldsWithValidation, name) && !get(validFields, name)));
}

var isRegex = (value) => value instanceof RegExp;

const isValueMessage = (value) => isObject(value) && !isRegex(value);
var getValueAndMessage = (validationData) => isValueMessage(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var isFunction = (value) => typeof value === 'function';

var isMessage = (value) => isString(value) || (isObject(value) && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(value));

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
    if (validateAllFieldCriteria) {
        const error = errors[name];
        return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
    }
    return {};
};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value }, options, required, maxLength, minLength, min, max, pattern, validate, }, shallowFieldsStateRef) => {
    const fields = fieldsRef.current;
    const name = ref.name;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = value === '';
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value: requiredValue, message: requiredMessage } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (requiredValue) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox
                    ? ((fields[name].options || [])[0] || {}).ref
                    : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
        let exceedMax;
        let exceedMin;
        const { value: maxValue, message: maxMessage } = getValueAndMessage(max);
        const { value: minValue, message: minMessage } = getValueAndMessage(min);
        if (type === 'number' || (!type && !isNaN(value))) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxValue)) {
                exceedMax = valueNumber > maxValue;
            }
            if (!isNullOrUndefined(minValue)) {
                exceedMin = valueNumber < minValue;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxValue)) {
                exceedMax = valueDate > new Date(maxValue);
            }
            if (isString(minValue)) {
                exceedMin = valueDate < new Date(minValue);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const { value: maxLengthValue, message: maxLengthMessage, } = getValueAndMessage(maxLength);
        const { value: minLengthValue, message: minLengthMessage, } = getValueAndMessage(minLength);
        const inputLength = value.toString().length;
        const exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
        const exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (pattern && !isEmpty) {
        const { value: patternValue, message: patternMessage } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

const getPath = (path, values) => {
    const getInnerPath = (key, value, isObject) => {
        const pathWithIndex = isObject ? `${path}.${key}` : `${path}[${key}]`;
        return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
    };
    return Object.entries(values)
        .map(([key, value]) => getInnerPath(key, value, isObject(values)))
        .flat(Infinity);
};

var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
    let value;
    watchFields.add(fieldName);
    if (isEmptyObject(fieldValues)) {
        value = undefined;
    }
    else {
        value = get(fieldValues, fieldName);
        if (isObject(value) || isArray(value)) {
            getPath(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
};

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}[\\d+]`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

var isSelectInput = (element) => element.type === `${SELECT}-one`;

function onDomRemove(fieldsRef, removeFieldEventListenerAndRef) {
    const observer = new MutationObserver(() => {
        for (const field of Object.values(fieldsRef.current)) {
            if (field && field.options) {
                for (const option of field.options) {
                    if (option && option.ref && isDetached(option.ref)) {
                        removeFieldEventListenerAndRef(field);
                    }
                }
            }
            else if (field && isDetached(field.ref)) {
                removeFieldEventListenerAndRef(field);
            }
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

const isWindowUndefined = typeof window === UNDEFINED;
const isWeb = typeof document !== UNDEFINED &&
    !isWindowUndefined &&
    !isUndefined(window.HTMLElement);
const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister = true, criteriaMode, } = {}) {
    const fieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldArrayDefaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const watchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const useWatchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const useWatchRenderFunctionsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldsWithValidationRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const validFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const defaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValues);
    const defaultValuesAtRenderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const isUnMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isWatchAllRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const handleChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const shallowFieldsStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(shouldUnregister ? {} : Object.assign({}, defaultValues));
    const resetFieldArrayFunctionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const contextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(context);
    const resolverRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(resolver);
    const fieldArrayNamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const modeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(mode));
    const { isOnSubmit, isOnTouch } = modeRef.current;
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    const [formState, setFormState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        isDirty: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touched: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: !isOnSubmit,
        errors: {},
    });
    const readFormStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touched: !isProxyEnabled || isOnTouch,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const formStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(formState);
    const observerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(reValidateMode)).current;
    contextRef.current = context;
    resolverRef.current = resolver;
    formStateRef.current = formState;
    const updateFormState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((state = {}) => !isUnMount.current &&
        setFormState(Object.assign(Object.assign({}, formStateRef.current), state)), []);
    const shouldRenderBaseOnError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, error, shouldRender = false, state = {}, isValid) => {
        let shouldReRender = shouldRender ||
            shouldRenderBasedOnError({
                errors: formStateRef.current.errors,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        const previousError = get(formStateRef.current.errors, name);
        if (error) {
            unset(validFieldsRef.current, name);
            shouldReRender =
                shouldReRender ||
                    !previousError ||
                    !deepEqual(previousError, error, true);
            set(formStateRef.current.errors, name, error);
        }
        else {
            if (get(fieldsWithValidationRef.current, name) || resolverRef.current) {
                set(validFieldsRef.current, name, true);
                shouldReRender = shouldReRender || previousError;
            }
            unset(formStateRef.current.errors, name);
        }
        if ((shouldReRender && !isNullOrUndefined(shouldRender)) ||
            !isEmptyObject(state)) {
            updateFormState(Object.assign(Object.assign(Object.assign({}, state), { errors: formStateRef.current.errors }), (resolverRef.current ? { isValid: !!isValid } : {})));
        }
    }, []);
    const setFieldValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, rawValue) => {
        const { ref, options } = fieldsRef.current[name];
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref) && !isString(value)) {
            ref.files = value;
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = isArray(value)
                    ? !!value.find((data) => data === checkboxRef.value)
                    : value === checkboxRef.value))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, []);
    const isFormDirty = () => !deepEqual(getValues(), isEmptyObject(defaultValuesRef.current)
        ? defaultValuesAtRenderRef.current
        : defaultValuesRef.current) || !isEmptyObject(formStateRef.current.dirtyFields);
    const updateAndGetDirtyState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, shouldRender = true) => {
        if (!fieldsRef.current[name] ||
            (!readFormStateRef.current.isDirty &&
                !readFormStateRef.current.dirtyFields)) {
            return {};
        }
        const isFieldDirty = get(defaultValuesAtRenderRef.current, name) !==
            getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        const isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
        const previousIsDirty = formStateRef.current.isDirty;
        isFieldDirty
            ? set(formStateRef.current.dirtyFields, name, true)
            : unset(formStateRef.current.dirtyFields, name);
        const state = {
            isDirty: isFormDirty(),
            dirtyFields: formStateRef.current.dirtyFields,
        };
        const isChanged = (readFormStateRef.current.isDirty &&
            previousIsDirty !== state.isDirty) ||
            (readFormStateRef.current.dirtyFields &&
                isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
        if (isChanged && shouldRender) {
            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), state);
            updateFormState(Object.assign({}, state));
        }
        return isChanged ? state : {};
    }, []);
    const executeValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name, skipReRender) => {
        if (fieldsRef.current[name]) {
            const error = (await validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], shallowFieldsStateRef))[name];
            shouldRenderBaseOnError(name, error, skipReRender);
            return isUndefined(error);
        }
        return false;
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (names) => {
        const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
        const previousFormIsValid = formStateRef.current.isValid;
        if (isArray(names)) {
            const isInputsValid = names
                .map((name) => {
                const error = get(errors, name);
                error
                    ? set(formStateRef.current.errors, name, error)
                    : unset(formStateRef.current.errors, name);
                return !error;
            })
                .every(Boolean);
            updateFormState({
                isValid: isEmptyObject(errors),
                errors: formStateRef.current.errors,
            });
            return isInputsValid;
        }
        else {
            const error = get(errors, names);
            shouldRenderBaseOnError(names, error, previousFormIsValid !== isEmptyObject(errors), {}, isEmptyObject(errors));
            return !error;
        }
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const trigger = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name) => {
        const fields = name || Object.keys(fieldsRef.current);
        if (resolverRef.current) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (isArray(fields)) {
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, null)));
            updateFormState();
            return result.every(Boolean);
        }
        return await executeValidation(fields, readFormStateRef.current.isValid);
    }, [executeSchemaOrResolverValidation, executeValidation]);
    const setInternalValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, { shouldDirty, shouldValidate }) => {
        getPath(name, value).forEach((fieldName) => {
            const data = {};
            const field = fieldsRef.current[fieldName];
            if (field) {
                set(data, name, value);
                setFieldValue(fieldName, get(data, fieldName));
                if (shouldDirty) {
                    updateAndGetDirtyState(fieldName);
                }
                if (shouldValidate) {
                    trigger(fieldName);
                }
            }
        });
    }, [trigger, setFieldValue, updateAndGetDirtyState]);
    const setInternalValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, config = {}) => {
        if (fieldsRef.current[name]) {
            setFieldValue(name, value);
            config.shouldDirty && updateAndGetDirtyState(name);
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value, config);
            if (fieldArrayNamesRef.current.has(name)) {
                fieldArrayDefaultValuesRef.current[name] = value;
                resetFieldArrayFunctionRef.current[name]({
                    [name]: value,
                });
                if (readFormStateRef.current.isDirty ||
                    readFormStateRef.current.dirtyFields) {
                    set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                    updateFormState({
                        isDirty: !deepEqual(Object.assign(Object.assign({}, getValues()), { [name]: value }), defaultValuesRef.current),
                        dirtyFields: formStateRef.current.dirtyFields,
                    });
                }
            }
        }
        !shouldUnregister && set(shallowFieldsStateRef.current, name, value);
    }, [updateAndGetDirtyState, setFieldValue, setInternalValues]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    const renderWatchedInputs = (name, found = true) => {
        if (!isEmptyObject(useWatchFieldsRef.current)) {
            for (const key in useWatchFieldsRef.current) {
                if (!name ||
                    useWatchFieldsRef.current[key].has(name) ||
                    useWatchFieldsRef.current[key].has(getFieldArrayParentName(name)) ||
                    !useWatchFieldsRef.current[key].size) {
                    useWatchRenderFunctionsRef.current[key]();
                    found = false;
                }
            }
        }
        return found;
    };
    function setValue(name, value, config) {
        setInternalValue(name, value, config);
        if (isFieldWatched(name)) {
            updateFormState();
        }
        renderWatchedInputs(name);
        if ((config || {}).shouldValidate) {
            trigger(name);
        }
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            const name = target.name;
            const field = fieldsRef.current[name];
            let error;
            let isValid;
            if (field) {
                const isBlurEvent = type === EVENTS.BLUR;
                const shouldSkipValidation = skipValidation(Object.assign({ isBlurEvent,
                    isReValidateOnChange,
                    isReValidateOnBlur, isTouched: !!get(formStateRef.current.touched, name), isSubmitted: formStateRef.current.isSubmitted }, modeRef.current));
                let state = updateAndGetDirtyState(name, false);
                let shouldRender = !isEmptyObject(state) || isFieldWatched(name);
                if (isBlurEvent &&
                    !get(formStateRef.current.touched, name) &&
                    readFormStateRef.current.touched) {
                    set(formStateRef.current.touched, name, true);
                    state = Object.assign(Object.assign({}, state), { touched: formStateRef.current.touched });
                }
                if (shouldSkipValidation) {
                    renderWatchedInputs(name);
                    return ((!isEmptyObject(state) ||
                        (shouldRender && isEmptyObject(state))) &&
                        updateFormState(state));
                }
                if (resolverRef.current) {
                    const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
                    const previousFormIsValid = formStateRef.current.isValid;
                    error = get(errors, name);
                    isValid = isEmptyObject(errors);
                    if (previousFormIsValid !== isValid) {
                        shouldRender = true;
                    }
                }
                else {
                    error = (await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef))[name];
                }
                renderWatchedInputs(name);
                shouldRenderBaseOnError(name, error, shouldRender, state, isValid);
            }
        };
    function getValues(payload) {
        if (isString(payload)) {
            return getFieldValue(fieldsRef, payload, shallowFieldsStateRef);
        }
        if (isArray(payload)) {
            const data = {};
            for (const name of payload) {
                set(data, name, getFieldValue(fieldsRef, name, shallowFieldsStateRef));
            }
            return data;
        }
        return getFieldsValues(fieldsRef, shallowFieldsStateRef);
    }
    const validateResolver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (values = {}) => {
        const { errors } = await resolverRef.current(Object.assign(Object.assign(Object.assign({}, defaultValuesRef.current), getValues()), values), contextRef.current, isValidateAllFieldCriteria);
        const previousFormIsValid = formStateRef.current.isValid;
        const isValid = isEmptyObject(errors);
        if (previousFormIsValid !== isValid) {
            updateFormState({
                isValid,
            });
        }
    }, [isValidateAllFieldCriteria]);
    const removeFieldEventListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, shallowFieldsStateRef, shouldUnregister, forceDelete), [shouldUnregister]);
    const removeFieldEventListenerAndRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => {
        if (field) {
            removeFieldEventListener(field, forceDelete);
            if (shouldUnregister && !filterOutFalsy(field.options || []).length) {
                unset(defaultValuesAtRenderRef.current, field.ref.name);
                unset(validFieldsRef.current, field.ref.name);
                unset(fieldsWithValidationRef.current, field.ref.name);
                unset(formStateRef.current.errors, field.ref.name);
                set(formStateRef.current.dirtyFields, field.ref.name, true);
                updateFormState({
                    errors: formStateRef.current.errors,
                    isDirty: isFormDirty(),
                    dirtyFields: formStateRef.current.dirtyFields,
                });
                resolverRef.current && validateResolver();
            }
        }
    }, [validateResolver, removeFieldEventListener]);
    function clearErrors(name) {
        name &&
            (isArray(name) ? name : [name]).forEach((inputName) => fieldsRef.current[inputName]
                ? isKey(inputName)
                    ? delete formStateRef.current.errors[inputName]
                    : set(formStateRef.current.errors, inputName, undefined)
                : unset(formStateRef.current.errors, inputName));
        updateFormState({
            errors: name ? formStateRef.current.errors : {},
        });
    }
    function setError(name, error) {
        const ref = (fieldsRef.current[name] || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        updateFormState({
            isValid: false,
            errors: formStateRef.current.errors,
        });
        error.shouldFocus && ref && ref.focus && ref.focus();
    }
    const watchInternal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((fieldNames, defaultValue, watchId) => {
        const watchFields = watchId
            ? useWatchFieldsRef.current[watchId]
            : watchFieldsRef.current;
        const combinedDefaultValues = isUndefined(defaultValue)
            ? defaultValuesRef.current
            : defaultValue;
        const fieldValues = getFieldsValues(fieldsRef, shallowFieldsStateRef, false, fieldNames);
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(defaultValue)
                ? get(combinedDefaultValues, fieldNames)
                : defaultValue, true);
        }
        if (isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        if (isUndefined(watchId)) {
            isWatchAllRef.current = true;
        }
        return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
            combinedDefaultValues);
    }, []);
    function watch(fieldNames, defaultValue) {
        return watchInternal(fieldNames, defaultValue);
    }
    function unregister(name) {
        (isArray(name) ? name : [name]).forEach((fieldName) => removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true));
    }
    function registerFieldRef(ref, validateOptions = {}) {
        if (false) {}
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, validateOptions);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const compareRef = (currentRef) => isWeb && (!isHTMLElement(ref) || currentRef === ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let defaultValue;
        if (field &&
            (isRadioOrCheckbox
                ? isArray(field.options) &&
                    filterOutFalsy(field.options).find((option) => {
                        return value === option.ref.value && compareRef(option.ref);
                    })
                : compareRef(field.ref))) {
            fields[name] = Object.assign(Object.assign({}, field), validateOptions);
            return;
        }
        if (type) {
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...filterOutFalsy((field && field.options) || []),
                        {
                            ref,
                        },
                    ], ref: { type, name } }, validateOptions) : Object.assign({}, fieldRefAndValidationOptions);
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        const isEmptyUnmountFields = isUndefined(get(shallowFieldsStateRef.current, name));
        if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
            defaultValue = get(isEmptyUnmountFields
                ? defaultValuesRef.current
                : shallowFieldsStateRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(name, defaultValue);
            }
        }
        if (resolver && !isFieldArray && readFormStateRef.current.isValid) {
            validateResolver();
        }
        else if (!isEmptyObject(validateOptions)) {
            set(fieldsWithValidationRef.current, name, true);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef).then((error) => {
                    const previousFormIsValid = formStateRef.current.isValid;
                    isEmptyObject(error)
                        ? set(validFieldsRef.current, name, true)
                        : unset(validFieldsRef.current, name);
                    if (previousFormIsValid !== isEmptyObject(error)) {
                        updateFormState();
                    }
                });
            }
        }
        if (!defaultValuesAtRenderRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
            set(defaultValuesAtRenderRef.current, name, isEmptyDefaultValue
                ? isObject(fieldValue)
                    ? Object.assign({}, fieldValue) : fieldValue
                : defaultValue);
            !isFieldArray && unset(formStateRef.current.dirtyFields, name);
        }
        if (type) {
            attachEventListeners(isRadioOrCheckbox && field.options
                ? field.options[field.options.length - 1]
                : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
        }
    }
    function register(refOrValidationOptions, rules) {
        if (!isWindowUndefined) {
            if (isString(refOrValidationOptions)) {
                registerFieldRef({ name: refOrValidationOptions }, rules);
            }
            else if (isObject(refOrValidationOptions) &&
                'name' in refOrValidationOptions) {
                registerFieldRef(refOrValidationOptions, rules);
            }
            else {
                return (ref) => ref && registerFieldRef(ref, refOrValidationOptions);
            }
        }
    }
    const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((onValid, onInvalid) => async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        let fieldValues = getFieldsValues(fieldsRef, shallowFieldsStateRef, true);
        if (readFormStateRef.current.isSubmitting) {
            updateFormState({
                isSubmitting: true,
            });
        }
        try {
            if (resolverRef.current) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria);
                formStateRef.current.errors = errors;
                fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fieldsRef.current)) {
                    if (field) {
                        const { ref: { name }, } = field;
                        const fieldError = await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            unset(validFieldsRef.current, name);
                        }
                        else if (get(fieldsWithValidationRef.current, name)) {
                            unset(formStateRef.current.errors, name);
                            set(validFieldsRef.current, name, true);
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors) &&
                Object.keys(formStateRef.current.errors).every((name) => name in fieldsRef.current)) {
                updateFormState({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                formStateRef.current.errors = Object.assign(Object.assign({}, formStateRef.current.errors), fieldErrors);
                if (onInvalid) {
                    await onInvalid(fieldErrors, e);
                }
                if (shouldFocusError) {
                    focusOnErrorField(fieldsRef.current, fieldErrors);
                }
            }
        }
        finally {
            updateFormState({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors),
                errors: formStateRef.current.errors,
                submitCount: formStateRef.current.submitCount + 1,
            });
        }
    }, [shouldFocusError, isValidateAllFieldCriteria]);
    const resetRefs = ({ errors, isDirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
        if (!isValid) {
            validFieldsRef.current = {};
            fieldsWithValidationRef.current = {};
        }
        defaultValuesAtRenderRef.current = {};
        fieldArrayDefaultValuesRef.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        updateFormState({
            isDirty: isDirty ? formStateRef.current.isDirty : false,
            isSubmitted: isSubmitted ? formStateRef.current.isSubmitted : false,
            isSubmitting: false,
            isSubmitSuccessful: false,
            submitCount: submitCount ? formStateRef.current.submitCount : 0,
            isValid: isValid ? formStateRef.current.isValid : true,
            dirtyFields: dirtyFields ? formStateRef.current.dirtyFields : {},
            touched: touched ? formStateRef.current.touched : {},
            errors: errors ? formStateRef.current.errors : {},
        });
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
                    const inputRef = isRadioOrCheckboxFunction(ref) && isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        fieldsRef.current = {};
        defaultValuesRef.current = Object.assign({}, (values || defaultValuesRef.current));
        if (values) {
            renderWatchedInputs('');
        }
        shallowFieldsStateRef.current = shouldUnregister ? {} : Object.assign({}, values) || {};
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        resetRefs(omitResetState);
    };
    observerRef.current =
        observerRef.current || !isWeb
            ? observerRef.current
            : onDomRemove(fieldsRef, removeFieldEventListenerAndRef);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        isUnMount.current = false;
        return () => {
            isUnMount.current = true;
            observerRef.current && observerRef.current.disconnect();
            shallowFieldsStateRef.current = {};
            if (false) {}
            fieldsRef.current &&
                Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
        };
    }, [removeFieldEventListenerAndRef]);
    if (!resolver && readFormStateRef.current.isValid) {
        formState.isValid =
            deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
                isEmptyObject(formStateRef.current.errors);
    }
    const commonProps = {
        trigger,
        setValue: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setValue, [setInternalValue, trigger]),
        getValues: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getValues, []),
        register: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(register, [defaultValuesRef.current]),
        unregister: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(unregister, []),
    };
    const control = Object.assign({ removeFieldEventListener,
        renderWatchedInputs,
        watchInternal, mode: modeRef.current, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnChange,
        }, fieldsRef,
        isWatchAllRef,
        watchFieldsRef,
        resetFieldArrayFunctionRef,
        useWatchFieldsRef,
        useWatchRenderFunctionsRef,
        fieldArrayDefaultValuesRef,
        validFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        readFormStateRef,
        formStateRef,
        defaultValuesRef,
        shallowFieldsStateRef,
        updateFormState,
        shouldUnregister, validateResolver: resolver ? validateResolver : undefined }, commonProps);
    return Object.assign({ watch,
        control, formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (false) {}
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState, handleSubmit, reset: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(reset, []), clearErrors: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(clearErrors, []), setError: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setError, []), errors: formState.errors }, commonProps);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormContext);
const FormProvider = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormContext.Provider, { value: Object.assign({}, props) }, children));
};

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

const removeAt = (data, index) => [
    ...data.slice(0, index),
    ...data.slice(index + 1),
];
function removeAtIndexes(data, index) {
    let k = -1;
    while (++k < data.length) {
        if (index.indexOf(k) >= 0) {
            delete data[k];
        }
    }
    return filterOutFalsy(data);
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : isArray(index)
        ? removeAtIndexes(data, index)
        : removeAt(data, index);

var moveArrayAt = (data, from, to) => {
    if (isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

var swapArrayAt = (data, indexA, indexB) => {
    const temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
};

function prepend(data, value) {
    return [...(isArray(value) ? value : [value || undefined]), ...data];
}

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...(isArray(value) ? value : [value || undefined]),
        ...data.slice(index),
    ];
}

var fillEmptyArray = (value) => isArray(value) ? Array(value.length).fill(undefined) : undefined;

function mapValueToBoolean(value) {
    if (isObject(value)) {
        const object = {};
        for (const key in value) {
            object[key] = true;
        }
        return [object];
    }
    return [true];
}
var filterBooleanArray = (value) => (isArray(value) ? value : [value]).map(mapValueToBoolean).flat();

const appendId = (value, keyName) => (Object.assign({ [keyName]: generateId() }, value));
const mapIds = (data, keyName) => (isArray(data) ? data : []).map((value) => appendId(value, keyName));
const useFieldArray = ({ control, name, keyName = 'id', }) => {
    const methods = useFormContext();
    if (false) {}
    const focusIndexRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(-1);
    const { isWatchAllRef, resetFieldArrayFunctionRef, fieldArrayNamesRef, fieldsRef, defaultValuesRef, removeFieldEventListener, formStateRef, formStateRef: { current: { dirtyFields, touched }, }, shallowFieldsStateRef, updateFormState, readFormStateRef, watchFieldsRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValuesRef, validateResolver, renderWatchedInputs, getValues, shouldUnregister, } = control || methods.control;
    const fieldArrayParentName = getFieldArrayParentName(name);
    const getDefaultValues = () => [
        ...(get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)
            ? get(fieldArrayDefaultValuesRef.current, name, [])
            : get(defaultValuesRef.current, name, [])),
    ];
    const memoizedDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(getDefaultValues());
    const [fields, setFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(mapIds(memoizedDefaultValues.current, keyName));
    const allFields = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fields);
    const getCurrentFieldsValues = () => get(getValues() || {}, name, allFields.current).map((item, index) => (Object.assign(Object.assign({}, allFields.current[index]), item)));
    allFields.current = fields;
    fieldArrayNamesRef.current.add(name);
    if (!get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)) {
        set(fieldArrayDefaultValuesRef.current, fieldArrayParentName, get(defaultValuesRef.current, fieldArrayParentName));
    }
    const appendValueWithKey = (values) => values.map((value) => appendId(value, keyName));
    const setFieldAndValidState = (fieldsValues) => {
        setFields(fieldsValues);
        if (readFormStateRef.current.isValid && validateResolver) {
            const values = {};
            set(values, name, fieldsValues);
            validateResolver(values);
        }
    };
    const getIsDirtyState = (flagOrFields) => (readFormStateRef.current.isDirty ||
        readFormStateRef.current.dirtyFields) &&
        (isUndefined(flagOrFields) ||
            !deepEqual(flagOrFields.map((_a = {}) => {
                var _b = keyName, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            }), get(defaultValuesRef.current, name)));
    const resetFields = () => {
        for (const key in fieldsRef.current) {
            if (isMatchFieldArrayName(key, name) && fieldsRef.current[key]) {
                removeFieldEventListener(fieldsRef.current[key], true);
            }
        }
    };
    const cleanup = (ref) => !filterOutFalsy(get(ref, name, [])).length && unset(ref, name);
    const batchStateUpdate = (method, args, isDirty = true, shouldSet = true, shouldUpdateValid = false) => {
        if (get(shallowFieldsStateRef.current, name)) {
            const output = method(get(shallowFieldsStateRef.current, name), args.argA, args.argB);
            shouldSet && set(shallowFieldsStateRef.current, name, output);
            cleanup(shallowFieldsStateRef.current);
        }
        if (get(fieldArrayDefaultValuesRef.current, name)) {
            const output = method(get(fieldArrayDefaultValuesRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldArrayDefaultValuesRef.current, name, output);
            cleanup(fieldArrayDefaultValuesRef.current);
        }
        if (isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touched && get(touched, name)) {
            const output = method(get(touched, name), args.argA, args.argB);
            shouldSet && set(touched, name, output);
            cleanup(touched);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            const output = method(get(dirtyFields, name, []), args.argC, args.argD);
            shouldSet && set(dirtyFields, name, output);
            cleanup(dirtyFields);
        }
        if (shouldUpdateValid &&
            readFormStateRef.current.isValid &&
            !validateResolver) {
            set(validFieldsRef.current, name, method(get(validFieldsRef.current, name, []), args.argA));
            cleanup(validFieldsRef.current);
            set(fieldsWithValidationRef.current, name, method(get(fieldsWithValidationRef.current, name, []), args.argA));
            cleanup(fieldsWithValidationRef.current);
        }
        updateFormState({
            errors: formStateRef.current.errors,
            dirtyFields,
            isDirty,
            touched,
        });
    };
    const append = (value, shouldFocus = true) => {
        setFieldAndValidState([
            ...allFields.current,
            ...(isArray(value)
                ? appendValueWithKey(value)
                : [appendId(value, keyName)]),
        ]);
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            set(dirtyFields, name, [
                ...(isArray(get(dirtyFields, name))
                    ? get(dirtyFields, name)
                    : fillEmptyArray(allFields.current)),
                ...filterBooleanArray(value),
            ]);
            updateFormState({
                isDirty: true,
                dirtyFields,
            });
        }
        if (!shouldUnregister) {
            shallowFieldsStateRef.current[name] = [value];
        }
        focusIndexRef.current = shouldFocus ? allFields.current.length : -1;
    };
    const prepend$1 = (value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        setFieldAndValidState(prepend(getCurrentFieldsValues(), isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        resetFields();
        batchStateUpdate(prepend, {
            argA: emptyArray,
            argC: filterBooleanArray(value),
        });
        focusIndexRef.current = shouldFocus ? 0 : -1;
    };
    const remove = (index) => {
        const fieldValues = getCurrentFieldsValues();
        setFieldAndValidState(removeArrayAt(fieldValues, index));
        resetFields();
        batchStateUpdate(removeArrayAt, {
            argA: index,
            argC: index,
        }, getIsDirtyState(removeArrayAt(fieldValues, index)), true, true);
    };
    const insert$1 = (index, value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        const fieldValues = getCurrentFieldsValues();
        setFieldAndValidState(insert(fieldValues, index, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        resetFields();
        batchStateUpdate(insert, {
            argA: index,
            argB: emptyArray,
            argC: index,
            argD: filterBooleanArray(value),
        }, getIsDirtyState(insert(fieldValues, index)));
        focusIndexRef.current = shouldFocus ? index : -1;
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
            argC: indexA,
            argD: indexB,
        }, getIsDirtyState(fieldValues), false);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
            argC: from,
            argD: to,
        }, getIsDirtyState(fieldValues), false);
    };
    const reset = (data) => {
        resetFields();
        !data && unset(fieldArrayDefaultValuesRef.current, name);
        unset(shallowFieldsStateRef.current, name);
        memoizedDefaultValues.current = get(data || defaultValuesRef.current, name);
        setFields(mapIds(memoizedDefaultValues.current, keyName));
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (false) {}
        const defaultValues = get(fieldArrayDefaultValuesRef.current, name);
        if (defaultValues && fields.length < defaultValues.length) {
            defaultValues.pop();
            set(fieldArrayDefaultValuesRef.current, name, defaultValues);
        }
        if (isWatchAllRef.current) {
            updateFormState();
        }
        else if (watchFieldsRef) {
            let shouldRenderUseWatch = true;
            for (const watchField of watchFieldsRef.current) {
                if (watchField.startsWith(name)) {
                    updateFormState();
                    shouldRenderUseWatch = false;
                    break;
                }
            }
            shouldRenderUseWatch && renderWatchedInputs(name);
        }
        if (focusIndexRef.current > -1) {
            for (const key in fieldsRef.current) {
                const field = fieldsRef.current[key];
                if (key.startsWith(`${name}[${focusIndexRef.current}]`) &&
                    field.ref.focus) {
                    field.ref.focus();
                    break;
                }
            }
        }
        focusIndexRef.current = -1;
    }, [fields, name]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const resetFunctions = resetFieldArrayFunctionRef.current;
        const fieldArrayNames = fieldArrayNamesRef.current;
        if (!getFieldArrayParentName(name)) {
            resetFunctions[name] = reset;
        }
        return () => {
            resetFields();
            delete resetFunctions[name];
            fieldArrayNames.delete(name);
        };
    }, []);
    return {
        swap: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(swap, [name]),
        move: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(move, [name]),
        prepend: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(prepend$1, [name]),
        append: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(append, [name]),
        remove: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(remove, [name]),
        insert: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(insert$1, [name]),
        fields,
    };
};

function useWatch({ control, name, defaultValue, }) {
    const methods = useFormContext();
    if (false) {}
    const { useWatchFieldsRef, useWatchRenderFunctionsRef, watchInternal, defaultValuesRef, } = control || methods.control;
    const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isUndefined(defaultValue)
        ? isString(name)
            ? get(defaultValuesRef.current, name)
            : isArray(name)
                ? name.reduce((previous, inputName) => (Object.assign(Object.assign({}, previous), { [inputName]: get(defaultValuesRef.current, inputName) })), {})
                : defaultValuesRef.current
        : defaultValue);
    const idRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const defaultValueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValue);
    const updateWatchValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        const value = watchInternal(name, defaultValueRef.current, idRef.current);
        setValue(isObject(value) ? Object.assign({}, value) : isArray(value) ? [...value] : value);
    }, [setValue, watchInternal, defaultValueRef, name, idRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (false) {}
        const id = (idRef.current = generateId());
        const watchFieldsHookRender = useWatchRenderFunctionsRef.current;
        const watchFieldsHook = useWatchFieldsRef.current;
        watchFieldsHook[id] = new Set();
        watchFieldsHookRender[id] = updateWatchValue;
        watchInternal(name, defaultValueRef.current, id);
        return () => {
            delete watchFieldsHook[id];
            delete watchFieldsHookRender[id];
        };
    }, [
        name,
        updateWatchValue,
        useWatchRenderFunctionsRef,
        useWatchFieldsRef,
        watchInternal,
        defaultValueRef,
    ]);
    return (isUndefined(value) ? defaultValue : value);
}

var getInputValue = (event) => isPrimitive(event) ||
    !isObject(event.target) ||
    (isObject(event.target) && !event.type)
    ? event
    : isUndefined(event.target.value)
        ? event.target.checked
        : event.target.value;

const Controller = (_a) => {
    var { name, rules, as, render, defaultValue, control, onFocus } = _a, rest = __rest(_a, ["name", "rules", "as", "render", "defaultValue", "control", "onFocus"]);
    const methods = useFormContext();
    if (false) {}
    const { defaultValuesRef, setValue, register, unregister, trigger, mode, reValidateMode: { isReValidateOnBlur, isReValidateOnChange }, formStateRef: { current: { isSubmitted, touched }, }, updateFormState, readFormStateRef, fieldsRef, fieldArrayNamesRef, shallowFieldsStateRef, } = control || methods.control;
    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    const getInitialValue = () => !isUndefined(get(shallowFieldsStateRef.current, name)) && isNotFieldArray
        ? get(shallowFieldsStateRef.current, name)
        : isUndefined(defaultValue)
            ? get(defaultValuesRef.current, name)
            : defaultValue;
    const [value, setInputStateValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getInitialValue());
    const valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    const onFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onFocus);
    const shouldValidate = (isBlurEvent) => !skipValidation(Object.assign({ isBlurEvent,
        isReValidateOnBlur,
        isReValidateOnChange,
        isSubmitted, isTouched: !!get(touched, name) }, mode));
    const commonTask = ([event]) => {
        const data = getInputValue(event);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    };
    const registerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (false) {}
        if (fieldsRef.current[name]) {
            fieldsRef.current[name] = Object.assign({ ref: fieldsRef.current[name].ref }, rules);
        }
        else {
            register(Object.defineProperty({ name, focus: onFocusRef.current }, VALUE, {
                set(data) {
                    setInputStateValue(data);
                    valueRef.current = data;
                },
                get() {
                    return valueRef.current;
                },
            }), rules);
            if (isNotFieldArray && !get(defaultValuesRef.current, name)) {
                setInputStateValue(getInitialValue());
            }
        }
    }, [rules, name, register]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
        !isNameInFieldArray(fieldArrayNamesRef.current, name) && unregister(name);
    }, [unregister, name, fieldArrayNamesRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (false) {}
        registerField();
    }, [registerField]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (!fieldsRef.current[name]) {
            registerField();
            if (isNotFieldArray) {
                setInputStateValue(getInitialValue());
            }
        }
    });
    const onBlur = () => {
        if (readFormStateRef.current.touched && !get(touched, name)) {
            set(touched, name, true);
            updateFormState({
                touched,
            });
        }
        if (shouldValidate(true)) {
            trigger(name);
        }
    };
    const onChange = (...event) => setValue(name, commonTask(event), {
        shouldValidate: shouldValidate(),
        shouldDirty: true,
    });
    const props = Object.assign(Object.assign({}, rest), { onChange,
        onBlur,
        name,
        value });
    return as
        ? Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(as)
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(as, props)
            : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(as, props)
        : render
            ? render({
                onChange,
                onBlur,
                value,
                name,
            })
            : null;
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  fallbackHot();
}

function fallbackHot() {
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./public/page-data/sq/d/1545480084.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1545480084.json ***!
  \***********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"allContentfulHero\":{\"edges\":[{\"node\":{\"contentfulid\":\"work:hero\",\"title\":\"Selected\\u2028 works\",\"subtitle\":\"From past to present\",\"description\":{\"childContentfulRichText\":{\"html\":\"<p>This section presents some of the latest digital works and some of samples from marketing communication field.</p>\"}}}},{\"node\":{\"contentfulid\":\"work:macgregor:hero\",\"title\":\"MacGregor\",\"subtitle\":\"Case\",\"description\":{\"childContentfulRichText\":{\"html\":\"<p>Designed to perform with the sea.\\n\\nSmart inventory system proof of concept for MacGregor, a marine and offshore operator.</p>\"}}}},{\"node\":{\"contentfulid\":\"work:abb:hero\",\"title\":\"ABB\",\"subtitle\":\"Case\",\"description\":{\"childContentfulRichText\":{\"html\":\"<p>Presenting new drive differently.\\n\\nTechnical details and informational \\u2028data brought together the most \\u2028minimalistic way.</p>\"}}}},{\"node\":{\"contentfulid\":\"work:vappi:hero\",\"title\":\"Väppi\",\"subtitle\":\"Case\",\"description\":{\"childContentfulRichText\":{\"html\":\"<p>Your personal Energy coach.\\n\\nSurvey your energy consumption and take action to reduce your carbon footprint to save environment!</p>\"}}}},{\"node\":{\"contentfulid\":\"main:hero\",\"title\":\"Neptune Studios\",\"subtitle\":\"Welcome to the\",\"description\":{\"childContentfulRichText\":{\"html\":\"<p>Design. Usability. User experience…\\n\\nThe driving forces behind Neptune Studios. No setting sails for rough seas or taking dives to the deep-end without proper preparation.</p>\"}}}},{\"node\":{\"contentfulid\":\"about:hero\",\"title\":\"Neptune’s finest\",\"subtitle\":\"About\",\"description\":{\"childContentfulRichText\":{\"html\":\"<p>Neptune Studios is a one man’s vision and voyage into the seas of design and problem solving. </p>\"}}}},{\"node\":{\"contentfulid\":\"contact:hero\",\"title\":\"Neptune Studios\",\"subtitle\":\"Contacting\",\"description\":{\"childContentfulRichText\":{\"html\":\"<p>Hesitating to contact Neptune Studios? Do not, we’re here to help!\\n\\nWhether it’s consultancy, design related questions or work inquiries, Neptune Studios will gladly help you. </p>\"}}}}]}}}");

/***/ }),

/***/ "./public/page-data/sq/d/716385884.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/716385884.json ***!
  \**********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"Neptune Studios\",\"linkedIn\":\"https://www.linkedin.com/in/pnousiainen\",\"behance\":\"https://www.behance.net/pnousiainen\"}}}}");

/***/ }),

/***/ "./src/assets/png/about-hero.png":
/*!***************************************!*\
  !*** ./src/assets/png/about-hero.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/about-hero-1c2d63dc272050c943e161a628d1d852.png";

/***/ }),

/***/ "./src/assets/png/case-hero.png":
/*!**************************************!*\
  !*** ./src/assets/png/case-hero.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/case-hero-b61b03075a44e17bee2850706b469856.png";

/***/ }),

/***/ "./src/assets/png/contact-hero.png":
/*!*****************************************!*\
  !*** ./src/assets/png/contact-hero.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/contact-hero-0d24cdedba94cf1d209d09af03d51512.png";

/***/ }),

/***/ "./src/assets/png/diver-hero.png":
/*!***************************************!*\
  !*** ./src/assets/png/diver-hero.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/diver-hero-d395488856a38ee140e36c201cae254a.png";

/***/ }),

/***/ "./src/assets/svg/arrow-right--blue.svg":
/*!**********************************************!*\
  !*** ./src/assets/svg/arrow-right--blue.svg ***!
  \**********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgArrowRightBlue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M32.707 8.707a1 1 0 000-1.414L26.343.929a1 1 0 00-1.414 1.414L30.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h32V7H0v2z",
  fill: "#005783"
});

function SvgArrowRightBlue(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    fill: "none",
    viewBox: "0 0 33 16"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMzMgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Im0zMi43MDcgOC43MDcxYzAuMzkwNS0wLjM5MDUzIDAuMzkwNS0xLjAyMzcgMC0xLjQxNDJsLTYuMzY0LTYuMzY0Yy0wLjM5MDUtMC4zOTA1Mi0xLjAyMzYtMC4zOTA1Mi0xLjQxNDIgMC0wLjM5MDUgMC4zOTA1My0wLjM5MDUgMS4wMjM3IDAgMS40MTQybDUuNjU2OSA1LjY1NjgtNS42NTY5IDUuNjU2OWMtMC4zOTA1IDAuMzkwNS0wLjM5MDUgMS4wMjM2IDAgMS40MTQyIDAuMzkwNiAwLjM5MDUgMS4wMjM3IDAuMzkwNSAxLjQxNDIgMGw2LjM2NC02LjM2NHptLTMyLjcwNyAwLjI5Mjg5aDMydi0yaC0zMnYyeiIgZmlsbD0iIzAwNTc4MyIvPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/assets/svg/behance.svg":
/*!************************************!*\
  !*** ./src/assets/svg/behance.svg ***!
  \************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBehance; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#272626",
  d: "M56 52c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h48c2.2 0 4 1.8 4 4v48z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#FFF"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M23.885 26.554c1.13-.555 2.052-1.303 2.616-2.144.656-.842.933-1.96.933-3.262 0-1.119-.195-2.145-.565-2.985-.378-.842-.932-1.498-1.682-1.959-.749-.461-1.589-.842-2.614-1.026-1.026-.276-2.146-.369-3.355-.369H7v25.737l12.495-.023c1.117 0 2.234-.185 3.352-.461a9.467 9.467 0 002.985-1.304 6.063 6.063 0 002.052-2.326c.473-.935.749-2.051.749-3.354a7.398 7.398 0 00-1.21-4.103c-.737-1.12-1.948-1.96-3.538-2.421zM12.695 19.2H18.1c.552 0 1.024 0 1.486.092.46.093.839.277 1.208.462.383.275.656.564.843.933.184.369.278.922.278 1.487 0 1.025-.289 1.855-.935 2.327-.646.474-1.486.75-2.513.75 0 0-5.773 0-5.773.012V19.2zm9.877 15.282c-.278.461-.566.739-.935 1.025-.369.289-.843.475-1.302.565-.475.093-1.027.183-1.592.183v-.011h-6.049v-7.179h6.144c1.208 0 2.234.275 2.982.842.751.658 1.118 1.59 1.118 2.893.001.657-.183 1.221-.366 1.682zM34.42 16.584h10.44v2.513H34.42zM48.78 28.397c-.38-1.302-.935-2.513-1.684-3.538-.749-1.118-1.683-1.856-2.893-2.514-1.209-.656-2.604-.933-4.196-.933-1.499 0-2.707.288-3.919.749-1.116.462-2.143 1.21-2.984 2.052a10.116 10.116 0 00-1.957 3.169c-.476 1.211-.658 2.525-.658 3.921 0 1.497.193 2.799.658 4.009a7.453 7.453 0 001.864 3.077 7.436 7.436 0 002.986 2.052c1.211.472 2.524.75 4.01.75 2.145 0 3.918-.554 5.406-1.488 1.486-1.026 2.604-2.615 3.355-4.852h-4.565c-.185.565-.645 1.118-1.395 1.683-.749.473-1.683.749-2.709.749-1.486 0-2.604-.369-3.354-1.117-.748-.749-1.301-2.145-1.301-3.665h13.519c.094-1.488.001-2.802-.183-4.104zm-13.243.945c0-.367.092-.748.184-1.21.095-.46.288-.934.657-1.302.368-.369.737-.75 1.302-1.026a4.516 4.516 0 012.053-.461c1.21 0 2.237.369 2.894 1.025.644.657 1.117 1.591 1.3 2.974h-8.39z"
}));

function SvgBehance(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 56 56"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTYgNTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2IDU2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMyNzI2MjYiIGQ9Ik01Niw1MmMwLDIuMi0xLjgsNC00LDRINGMtMi4yLDAtNC0xLjgtNC00VjRjMC0yLjIsMS44LTQsNC00aDQ4YzIuMiwwLDQsMS44LDQsNFY1MnoiLz4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMy44ODUsMjYuNTU0YzEuMTMtMC41NTUsMi4wNTItMS4zMDMsMi42MTYtMi4xNDRjMC42NTYtMC44NDIsMC45MzMtMS45NiwwLjkzMy0zLjI2Mg0KCQljMC0xLjExOS0wLjE5NS0yLjE0NS0wLjU2NS0yLjk4NWMtMC4zNzgtMC44NDItMC45MzItMS40OTgtMS42ODItMS45NTljLTAuNzQ5LTAuNDYxLTEuNTg5LTAuODQyLTIuNjE0LTEuMDI2DQoJCWMtMS4wMjYtMC4yNzYtMi4xNDYtMC4zNjktMy4zNTUtMC4zNjlIN3YyNS43MzdsMTIuNDk1LTAuMDIzYzEuMTE3LDAsMi4yMzQtMC4xODUsMy4zNTItMC40NjENCgkJYzEuMTE5LTAuMjc3LDIuMTQ2LTAuNzM5LDIuOTg1LTEuMzA0YzAuODQzLTAuNTUyLDEuNTkxLTEuMzk0LDIuMDUyLTIuMzI2YzAuNDczLTAuOTM1LDAuNzQ5LTIuMDUxLDAuNzQ5LTMuMzU0DQoJCWMwLTEuNTkxLTAuNDczLTIuOTg2LTEuMjEtNC4xMDNDMjYuNjg2LDI3Ljg1NSwyNS40NzUsMjcuMDE1LDIzLjg4NSwyNi41NTR6IE0xMi42OTUsMTkuMmg1LjQwNWMwLjU1MiwwLDEuMDI0LDAsMS40ODYsMC4wOTINCgkJYzAuNDYsMC4wOTMsMC44MzksMC4yNzcsMS4yMDgsMC40NjJjMC4zODMsMC4yNzUsMC42NTYsMC41NjQsMC44NDMsMC45MzNjMC4xODQsMC4zNjksMC4yNzgsMC45MjIsMC4yNzgsMS40ODcNCgkJYzAsMS4wMjUtMC4yODksMS44NTUtMC45MzUsMi4zMjdjLTAuNjQ2LDAuNDc0LTEuNDg2LDAuNzUtMi41MTMsMC43NWMwLDAtNS43NzMsMC01Ljc3MywwLjAxMlYxOS4yeiBNMjIuNTcyLDM0LjQ4Mg0KCQljLTAuMjc4LDAuNDYxLTAuNTY2LDAuNzM5LTAuOTM1LDEuMDI1Yy0wLjM2OSwwLjI4OS0wLjg0MywwLjQ3NS0xLjMwMiwwLjU2NWMtMC40NzUsMC4wOTMtMS4wMjcsMC4xODMtMS41OTIsMC4xODN2LTAuMDExaC02LjA0OQ0KCQl2LTcuMTc5aDYuMTQ0YzEuMjA4LDAsMi4yMzQsMC4yNzUsMi45ODIsMC44NDJjMC43NTEsMC42NTgsMS4xMTgsMS41OSwxLjExOCwyLjg5M0MyMi45MzksMzMuNDU3LDIyLjc1NSwzNC4wMjEsMjIuNTcyLDM0LjQ4MnoiLz4NCgk8cmVjdCB4PSIzNC40MiIgeT0iMTYuNTg0IiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMTAuNDQiIGhlaWdodD0iMi41MTMiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDguNzgsMjguMzk3Yy0wLjM4LTEuMzAyLTAuOTM1LTIuNTEzLTEuNjg0LTMuNTM4Yy0wLjc0OS0xLjExOC0xLjY4My0xLjg1Ni0yLjg5My0yLjUxNA0KCQljLTEuMjA5LTAuNjU2LTIuNjA0LTAuOTMzLTQuMTk2LTAuOTMzYy0xLjQ5OSwwLTIuNzA3LDAuMjg4LTMuOTE5LDAuNzQ5Yy0xLjExNiwwLjQ2Mi0yLjE0MywxLjIxLTIuOTg0LDIuMDUyDQoJCWMtMC44NDIsMC45MzQtMS40ODcsMS45Ni0xLjk1NywzLjE2OWMtMC40NzYsMS4yMTEtMC42NTgsMi41MjUtMC42NTgsMy45MjFjMCwxLjQ5NywwLjE5MywyLjc5OSwwLjY1OCw0LjAwOQ0KCQljMC4zNzgsMS4yMTEsMS4wMjQsMi4yMzcsMS44NjQsMy4wNzdjMC44NDIsMC45MzMsMS43NzYsMS41OTEsMi45ODYsMi4wNTJjMS4yMTEsMC40NzIsMi41MjQsMC43NSw0LjAxLDAuNzUNCgkJYzIuMTQ1LDAsMy45MTgtMC41NTQsNS40MDYtMS40ODhjMS40ODYtMS4wMjYsMi42MDQtMi42MTUsMy4zNTUtNC44NTJoLTQuNTY1Yy0wLjE4NSwwLjU2NS0wLjY0NSwxLjExOC0xLjM5NSwxLjY4Mw0KCQljLTAuNzQ5LDAuNDczLTEuNjgzLDAuNzQ5LTIuNzA5LDAuNzQ5Yy0xLjQ4NiwwLTIuNjA0LTAuMzY5LTMuMzU0LTEuMTE3Yy0wLjc0OC0wLjc0OS0xLjMwMS0yLjE0NS0xLjMwMS0zLjY2NWgxMy41MTkNCgkJQzQ5LjA1NywzMS4wMTMsNDguOTY0LDI5LjY5OSw0OC43OCwyOC4zOTd6IE0zNS41MzcsMjkuMzQyYzAtMC4zNjcsMC4wOTItMC43NDgsMC4xODQtMS4yMWMwLjA5NS0wLjQ2LDAuMjg4LTAuOTM0LDAuNjU3LTEuMzAyDQoJCWMwLjM2OC0wLjM2OSwwLjczNy0wLjc1LDEuMzAyLTEuMDI2YzAuNTY1LTAuMjc2LDEuMjEzLTAuNDYxLDIuMDUzLTAuNDYxYzEuMjEsMCwyLjIzNywwLjM2OSwyLjg5NCwxLjAyNQ0KCQljMC42NDQsMC42NTcsMS4xMTcsMS41OTEsMS4zLDIuOTc0SDM1LjUzN3oiLz4NCjwvZz4NCjwvc3ZnPg0K");


/***/ }),

/***/ "./src/assets/svg/curriculum-vitae.svg":
/*!*********************************************!*\
  !*** ./src/assets/svg/curriculum-vitae.svg ***!
  \*********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgCurriculumVitae; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#272626"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M57.748 1.062h-5.971c-1.058 0-2.332.502-3.102 1.22l-3.49 3.248V3.763c0-1.644-1.346-2.98-3.001-2.98h-4.825c-1.053 0-2.325.497-3.095 1.207l-6.81 6.282h-4.747v-2.53c0-2.753-2.257-4.992-5.03-4.992-2.634 0-4.819 2.027-5.03 4.59-.008.042-.012 1.296-.012 2.932h-.014v3.973h.018l.008 3.843c0 2.334 1.913 4.231 4.262 4.231 2.351 0 4.263-1.897 4.263-4.231v-1.3a1.994 1.994 0 00-2-1.987 1.993 1.993 0 00-2.001 1.987v1.3c0 .283-.521.285-.521 0v-3.843h25.214c1.055 0 2.328-.382 3.095-1.098l6.435-5.95c.082-.062.309-.151.384-.161h4.971V42.95a1.835 1.835 0 01-1.839 1.827l-52.318-.176a1.837 1.837 0 01-1.841-1.828v-28.7c0-1.009.825-1.828 1.833-1.828h7.152V8.272H2.592c-3.222 0-5.842 2.602-5.842 5.801v28.7c0 3.197 2.62 5.801 5.836 5.801l52.315.177h.006c3.223 0 5.843-2.602 5.843-5.801V4.042c0-1.643-1.346-2.98-3.002-2.98zm-39.042 7.21H16.65v-2.53c0-.562.461-1.019 1.028-1.019.566 0 1.028.456 1.028 1.019v2.53zm22.478 0h-7.852l3.635-3.354c.084-.062.314-.151.393-.161h3.824v3.515z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M36.07 39.836l5.956-16.885h-3.903s-3.67 10.833-3.821 11.375c-.136-.467-3.828-11.375-3.828-11.375h-3.843l5.894 16.885h3.545zM23.597 22.725c-1.636 0-3.085.356-4.311 1.056-1.239.708-2.198 1.739-2.849 3.065-.639 1.301-.964 2.832-.964 4.548 0 2.731.676 4.874 2.009 6.37 1.352 1.519 3.295 2.289 5.778 2.289 1.639 0 3.131-.25 4.435-.739l.367-.138v-3.364l-.736.225a21.96 21.96 0 01-1.915.499 8.923 8.923 0 01-1.835.188c-1.391 0-2.414-.419-3.127-1.281-.732-.882-1.101-2.238-1.101-4.028 0-1.704.387-3.046 1.152-3.986.747-.918 1.755-1.365 3.076-1.365.596 0 1.172.087 1.708.261.571.182 1.119.394 1.628.635l.534.251.038-.088-1.441-4.13a11.066 11.066 0 00-2.446-.268z"
}));

function SvgCurriculumVitae(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 64,
    height: 48,
    viewBox: "-3.25 0.75 64 48"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSItMy4yNSAwLjc1IDY0IDQ4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC0zLjI1IDAuNzUgNjQgNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iIzI3MjYyNiIgZD0iTTU3Ljc0OCwxLjA2MmgtNS45NzFjLTEuMDU4LDAtMi4zMzIsMC41MDItMy4xMDIsMS4yMmwtMy40OSwzLjI0OFYzLjc2M2MwLTEuNjQ0LTEuMzQ2LTIuOTgtMy4wMDEtMi45OA0KCQloLTQuODI1Yy0xLjA1MywwLTIuMzI1LDAuNDk3LTMuMDk1LDEuMjA3bC02LjgxLDYuMjgyaC00Ljc0N3YtMi41M2MwLTIuNzUzLTIuMjU3LTQuOTkyLTUuMDMtNC45OTINCgkJYy0yLjYzNCwwLTQuODE5LDIuMDI3LTUuMDMsNC41OWMtMC4wMDgsMC4wNDItMC4wMTIsMS4yOTYtMC4wMTIsMi45MzJoLTAuMDE0djMuOTczaDAuMDE4YzAuMDA0LDIuMDg5LDAuMDA4LDMuODQzLDAuMDA4LDMuODQzDQoJCWMwLDIuMzM0LDEuOTEzLDQuMjMxLDQuMjYyLDQuMjMxYzIuMzUxLDAsNC4yNjMtMS44OTcsNC4yNjMtNC4yMzF2LTEuM2MwLTEuMDk4LTAuODk2LTEuOTg3LTItMS45ODcNCgkJYy0xLjEwNiwwLTIuMDAxLDAuODg5LTIuMDAxLDEuOTg3djEuM2MwLDAuMjgzLTAuNTIxLDAuMjg1LTAuNTIxLDB2LTMuODQzaDI1LjIxNGMxLjA1NSwwLDIuMzI4LTAuMzgyLDMuMDk1LTEuMDk4bDYuNDM1LTUuOTUNCgkJYzAuMDgyLTAuMDYyLDAuMzA5LTAuMTUxLDAuMzg0LTAuMTYxaDQuOTcxdjM3LjkxNGMwLDEuMDA3LTAuODI0LDEuODI3LTEuODM5LDEuODI3TDIuNTkyLDQ0LjYwMQ0KCQljLTEuMDE2LDAtMS44NDEtMC44MjEtMS44NDEtMS44Mjh2LTI4LjdjMC0xLjAwOSwwLjgyNS0xLjgyOCwxLjgzMy0xLjgyOGg3LjE1MlY4LjI3MkgyLjU5MmMtMy4yMjIsMC01Ljg0MiwyLjYwMi01Ljg0Miw1LjgwMQ0KCQl2MjguN2MwLDMuMTk3LDIuNjIsNS44MDEsNS44MzYsNS44MDFsNTIuMzE1LDAuMTc3aDAuMDA2YzMuMjIzLDAsNS44NDMtMi42MDIsNS44NDMtNS44MDFWNC4wNDINCgkJQzYwLjc1LDIuMzk5LDU5LjQwNCwxLjA2Miw1Ny43NDgsMS4wNjJ6IE0xOC43MDYsOC4yNzJIMTYuNjV2LTIuNTNjMC0wLjU2MiwwLjQ2MS0xLjAxOSwxLjAyOC0xLjAxOQ0KCQljMC41NjYsMCwxLjAyOCwwLjQ1NiwxLjAyOCwxLjAxOVY4LjI3MnogTTQxLjE4NCw4LjI3MmgtNy44NTJsMy42MzUtMy4zNTRjMC4wODQtMC4wNjIsMC4zMTQtMC4xNTEsMC4zOTMtMC4xNjFoMy44MjRWOC4yNzJ6Ii8+DQoJPHBhdGggZmlsbD0iIzI3MjYyNiIgZD0iTTM2LjA3LDM5LjgzNmw1Ljk1Ni0xNi44ODVoLTMuOTAzYzAsMC0zLjY3LDEwLjgzMy0zLjgyMSwxMS4zNzVjLTAuMTM2LTAuNDY3LTMuODI4LTExLjM3NS0zLjgyOC0xMS4zNzUNCgkJaC0zLjg0M2w1Ljg5NCwxNi44ODVIMzYuMDd6Ii8+DQoJPHBhdGggZmlsbD0iIzI3MjYyNiIgZD0iTTIzLjU5NywyMi43MjVjLTEuNjM2LDAtMy4wODUsMC4zNTYtNC4zMTEsMS4wNTZjLTEuMjM5LDAuNzA4LTIuMTk4LDEuNzM5LTIuODQ5LDMuMDY1DQoJCWMtMC42MzksMS4zMDEtMC45NjQsMi44MzItMC45NjQsNC41NDhjMCwyLjczMSwwLjY3Niw0Ljg3NCwyLjAwOSw2LjM3YzEuMzUyLDEuNTE5LDMuMjk1LDIuMjg5LDUuNzc4LDIuMjg5DQoJCWMxLjYzOSwwLDMuMTMxLTAuMjUsNC40MzUtMC43MzlsMC4zNjctMC4xMzh2LTMuMzY0bC0wLjczNiwwLjIyNWMtMC42NzYsMC4yMDctMS4zMjIsMC4zNzUtMS45MTUsMC40OTkNCgkJYy0wLjU4OSwwLjEyNC0xLjIwNiwwLjE4OC0xLjgzNSwwLjE4OGMtMS4zOTEsMC0yLjQxNC0wLjQxOS0zLjEyNy0xLjI4MWMtMC43MzItMC44ODItMS4xMDEtMi4yMzgtMS4xMDEtNC4wMjgNCgkJYzAtMS43MDQsMC4zODctMy4wNDYsMS4xNTItMy45ODZjMC43NDctMC45MTgsMS43NTUtMS4zNjUsMy4wNzYtMS4zNjVjMC41OTYsMCwxLjE3MiwwLjA4NywxLjcwOCwwLjI2MQ0KCQljMC41NzEsMC4xODIsMS4xMTksMC4zOTQsMS42MjgsMC42MzVsMC41MzQsMC4yNTFsMC4wMzgtMC4wODhsLTEuNDQxLTQuMTNDMjUuMjU2LDIyLjgxNSwyNC40MzksMjIuNzI1LDIzLjU5NywyMi43MjV6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/assets/svg/hamburger.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/hamburger.svg ***!
  \**************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgHamburger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  stroke: "#fff",
  strokeWidth: 4,
  d: "M32 2H0M32 18H0"
});

function SvgHamburger(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 32,
    height: 20,
    fill: "none"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjMyIiB5MT0iMiIgeDI9Ii0xLjc0ODQ2ZS0wNyIgeTI9IjIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8bGluZSB4MT0iMzIiIHkxPSIxOCIgeDI9Ii0xLjc0ODQ2ZS0wNyIgeTI9IjE4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./src/assets/svg/linkedin.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/linkedin.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLinkedin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#272626",
  d: "M56 52c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h48c2.2 0 4 1.8 4 4v48z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#FFF"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M8.657 21.281h8.29V48h-8.29z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ellipse", {
  cx: 12.806,
  cy: 12.814,
  rx: 4.806,
  ry: 4.814
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M38.059 20.616a8.711 8.711 0 00-7.846 4.316h-.111v-3.651h-7.95v26.718h8.282V34.782c0-3.485.66-6.861 4.974-6.861 4.252 0 4.308 3.988 4.308 7.086V48h8.282L48 33.343c0-7.196-1.548-12.727-9.941-12.727z"
}));

function SvgLinkedin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 56 56"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCXZpZXdCb3g9IjAgMCA1NiA1NiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTYgNTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iIzI3MjYyNiIgZD0iTTU2LDUyYzAsMi4yLTEuOCw0LTQsNEg0Yy0yLjIsMC00LTEuOC00LTRWNGMwLTIuMiwxLjgtNCw0LTRoNDhjMi4yLDAsNCwxLjgsNCw0VjUyeiIvPg0KPGc+DQoJPHJlY3QgeD0iOC42NTciIHk9IjIxLjI4MSIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjguMjkiIGhlaWdodD0iMjYuNzE5Ii8+DQoJPGVsbGlwc2UgZmlsbD0iI0ZGRkZGRiIgY3g9IjEyLjgwNiIgY3k9IjEyLjgxNCIgcng9IjQuODA2IiByeT0iNC44MTQiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzguMDU5LDIwLjYxNmMtMy4yMS0wLjExOS02LjIyNSwxLjUzOS03Ljg0Niw0LjMxNmgtMC4xMTF2LTMuNjUxaC03Ljk1djI2LjcxOGg4LjI4MlYzNC43ODINCgkJYzAtMy40ODUsMC42Ni02Ljg2MSw0Ljk3NC02Ljg2MWM0LjI1MiwwLDQuMzA4LDMuOTg4LDQuMzA4LDcuMDg2VjQ4aDguMjgyTDQ4LDMzLjM0M0M0OCwyNi4xNDcsNDYuNDUyLDIwLjYxNiwzOC4wNTksMjAuNjE2eiIvPg0KPC9nPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/assets/svg/neptune-studios--white.svg":
/*!***************************************************!*\
  !*** ./src/assets/svg/neptune-studios--white.svg ***!
  \***************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgNeptuneStudiosWhite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14.8 20.232c0 6.253 5.157 11.34 11.495 11.34 6.338 0 11.495-5.087 11.495-11.34s-5.157-11.34-11.495-11.34c-6.338 0-11.494 5.087-11.494 11.34zm8.457-17.92l.652-1.428c-1.46 0-3.294.32-3.294.714 0 .394 1.183.714 2.642.714zm4.95-1.456h-3.499l-.514 1.427h4.528L28.207.856zm1.383 1.456c1.459 0 2.641-.32 2.641-.714 0-.394-1.834-.714-3.293-.714l.652 1.428zM6.593 20.139l1.535.507V16.18l-1.535.508v3.452zm-.008.665c0 1.44.324 3.125.723 3.125.4 0 .724-1.043.724-2.482l-1.447-.643zm1.447-5.358c0-1.44-.324-2.482-.724-2.482-.4 0-.723 1.686-.723 3.125l1.447-.643zm37.715 1.308l-1.536-.507v4.467l1.536-.508v-3.452zm.008-.64c.005-2.382-.324-3.15-.724-3.15-.4 0-.812 1.068-.812 2.507l1.536.643zm-1.536 5.358c0 1.439.324 2.457.724 2.457.4 0 .812-1.661.812-3.1l-1.536.643zm6.895 13.118l.059-.002c2.233-.013 1.842 1.552 1.726 1.818-.3.69-.593.69-.593.69-4.09-3.68-17.12-2.47-25.941-.257C6.178 41.9.01 36.612.01 36.612c-.035-.046.034-.788.034-.788 0-.272.5-1.378 1.779-1.378 1.014 0 1.503.885 1.503.885 0-3.223 6.851-5.752 6.851-5.752l-.497-4.03-.33-.598s.176 0-.652-.109l-.145-.018c-.759-.095-1.366-.171-1.967-1.564-.588-1.363-.462-7.605-.206-9.036.324-1.815 1.435-1.851 1.435-1.851h2.03s.387-1.362 2.264-4.41c1.877-3.05 6.072-4.738 6.072-4.738s.218-1.005 1.078-1.97C19.997.426 21.108.23 21.108.23s2.713-.222 5.389-.222c2.705 0 4.773.263 5.12.309 2.055.271 2.793 2.908 2.793 2.908s4.195 1.688 6.071 4.737c1.877 3.05 2.265 4.41 2.265 4.41H44.6s1.367.008 1.436 1.852c.054 1.452.207 7.455-.216 9.007-.393 1.438-.874 1.5-1.635 1.596l-.115.015-.828.109-.33.599-.498 4.03s3.833-.401 7.45 3.516a17.5 17.5 0 011.25 1.494zM32.822 23.466s1.922-.923 1.943-2.946c.02-2.023-1.22-3.903-1.928-3.91-.707-.007-2.024.01-2.024.01l.004 7.037 2.005-.19zm-9.942.347s1.918.26 3.554.26c1.566 0 3.475-.265 3.475-.265l-.004-7.166s-1.306.47-3.472.47-3.533-.465-3.533-.465l-.02 7.166zm3.245 4.697c2.051.021 3.749-1.203 3.756-1.9.007-.698-.01-1.842-.01-1.842s-1.963.244-3.53.244c-1.566 0-3.423-.24-3.423-.24l.01 1.822s1.146 1.896 3.197 1.916zm-8.098-8.002c.021 2.023 1.944 2.818 1.944 2.818l2.004.345-.021-7.063s-1.292-.017-1.999-.01c-.707.007-1.949 1.888-1.928 3.91zm8.622-8.489c-2.051-.02-3.723 1.204-3.73 1.902-.007.697.01 1.816.01 1.816s1.8.402 3.505.402c1.705 0 3.422-.38 3.422-.38l-.01-1.823s-1.146-1.896-3.197-1.917zm-10.208 8.248c0-5.42 4.455-9.813 9.95-9.813 5.497 0 9.952 4.393 9.952 9.813 0 5.42-4.455 9.813-9.951 9.813s-9.951-4.393-9.951-9.813zm36.125 41.32c-.908-.804-2.088-1.234-3.258-1.538-1.551-.403-3.164-.573-4.764-.665-3.777-.218-7.594.048-11.34.521-1.663.21-3.32.474-4.96.813-.992.204-1.975.44-2.958.676-1.12.269-2.24.537-3.372.76-3.98.782-8.064 1.265-12.13 1.093-2.327-.098-4.685-.42-6.882-1.193-.897-.317-1.818-.71-2.574-1.287a1.05 1.05 0 01-.036-.028l-.006-.006-.01-.01a.236.236 0 00-.05-.038l-.002-.001c-.042-.029.102.259.118.283l.03.049c.083.13.179.28.303.37-.071-.052.01.011.06.05l.028.021a4.6 4.6 0 00.287.203c.389.257.807.473 1.233.667 1.725.785 3.627 1.191 5.507 1.428 3.479.437 7.03.242 10.495-.21 2.503-.328 4.982-.817 7.434-1.4l.428-.103c1.506-.359 3.002-.716 4.532-.978A71.418 71.418 0 0141.81 60.03c1.802-.023 3.61.038 5.398.255 1.463.178 2.948.463 4.297 1.056.519.228 1.02.515 1.441.888.129.114-.011-.139-.027-.167-.097-.162-.208-.349-.353-.477zM39.18 44.75c-.183.04-.274.061-.457.103v.8c.87-.07 1.74-.112 2.612-.125v-.799l-.01-.002h-.001c-.118-.025-.18-.038-.303-.062-.356-.076-.47-.463-.47-1.108v-4.851l.028-.001c.84 2.278 1.673 4.559 2.498 6.843.662.024.993.044 1.655.104v-6.842c0-.659.172-1.05.471-1.075.178-.01.266-.013.443-.02v-.799c-.91-.11-1.825-.178-2.74-.207v.8c.182.033.274.05.456.087.286.07.457.487.457 1.146v3.042h-.014a919.135 919.135 0 00-1.885-5.091 39.162 39.162 0 00-3.197.127v.799c.183.014.274.02.457.036.286.037.457.434.457 1.093v4.85c0 .646-.114 1.058-.457 1.152zm-5.035-6.582a53.18 53.18 0 00-.455.145c-.284.104-.455.54-.455 1.2v2.988c.002.09.001.194 0 .311-.006.985-.017 2.766 1.322 2.515 1.082-.203 1.303-1.48 1.265-2.4v-3.816c0-.533-.085-1.056-.483-1.055a46.211 46.211 0 00-.44-.006v-.8a55.18 55.18 0 012.743-.344v.8c-.182.045-.273.07-.455.117-.384.098-.47.642-.47 1.175v3.577c.027 1.639-.422 3.364-2.26 3.665-2.2.36-2.865-1.185-2.828-3.108v-3.325c0-.659-.17-1.033-.455-1.033l-.455.02v-.8c1.138-.228 2.28-.44 3.426-.626v.8zm-10.78 1.536v3.502l.087-.019v.019l.089-.019v.019l.836-.176v-.781c0-.824.213-1.776.823-1.907h.007c.369.088.412.763.412 1.225v4.466c0 .642-.114 1.071-.468 1.217l-.454.167v.795l.088-.019v.02l.089-.02v.02c.56-.12 1.118-.242 1.678-.363h.001l1.752-.378v-.796l-.088.005v-.005l-.089.005v-.005l-.343.02c-.305-.046-.401-.415-.401-1.007v-4.466c0-.53.056-1.366.595-1.482a.21.21 0 01.013-.002l.008-.001.01-.002c.45.085.615.838.615 1.56v.781l.088-.019v.02l.088-.02v.02c.335-.072.502-.107.837-.177V38.4l-.089.019V38.4l-.088.019V38.4c-1.03.217-2.058.439-3.087.66h-.002v.001c-1.003.216-2.005.432-3.008.644zM.672 47.237a18.83 18.83 0 01-.457-.123v.803c.852.37 1.725.696 2.612.973v-.803a27.007 27.007 0 01-.314-.17c-.356-.202-.47-.639-.47-1.287v-4.875l.028.01c.82 2.538 1.653 5.072 2.497 7.603.663.158.994.225 1.656.339V42.83c0-.662.172-1.04.471-1.05.177-.001.266-.002.443-.006v-.803c-.922-.127-1.837-.3-2.74-.522v.803c.182.073.273.109.456.178.286.121.457.564.457 1.227v3.057l-.014-.003a861.25 861.25 0 01-1.884-5.523A25.941 25.941 0 01.216 39.04v.803c.183.108.274.16.457.264.285.175.457.649.457 1.311v4.875c0 .648-.115 1.015-.457.944zm8.222 1.733c-.183.014-.275.02-.458.031v.8c1.883.145 3.738.152 5.624.05V46.68c-.36.024-.54.034-.901.05v.688c0 .87-.244 1.61-1.245 1.621-.73.01-.945-.408-.945-.969v-2.301c.567.008.85.006 1.417-.008v-.996c-.567.014-.85.016-1.417.007v-1.824c0-.645.215-.972.945-.981.672-.008 1.245.511 1.245 1.564v.59c.36-.017.54-.027.901-.051v-3.06a42.62 42.62 0 01-5.624-.05v.8c.183.046.275.068.458.11.286.079.458.496.458 1.156v4.855c0 .645-.115 1.06-.458 1.09zm10.598-4.976c.469-.08.966-.656.966-1.324 0-.753-.368-1.059-.769-1.079a.97.97 0 00-.108.011c-.324.055-.486.082-.81.133-.412.065-.682.285-.682.939v1.544c.539-.08.837-.128 1.403-.224zm-3.917 4.92c.181-.046.272-.07.454-.118.341-.107.455-.525.455-1.165V42.82c0-.654-.17-1.036-.455-1.06a36.466 36.466 0 01-.455-.022v-.792a79.725 79.725 0 003.918-.554c.255-.053.499-.076.729-.071 1.24-.015 2.095.766 2.058 2.159-.04 1.558-1.34 2.639-2.855 2.876-.534.089-.8.131-1.335.21v1.85c0 .638.113 1.025.467 1.041.129 0 .217 0 .368-.002h.088v.793a56.16 56.16 0 01-3.35.459v-.01l-.037.004-.05.006v-.793zm31.15-3.73c.184.003.275.005.458.01.344.007.459-.39.459-1.037v-4.87c0-.661-.172-1.105-.459-1.214a26.282 26.282 0 00-.457-.15v-.803c1.943.363 3.78.881 5.624 1.587v3.068c-.36-.147-.54-.216-.901-.348v-.591c.01-.834-.413-1.75-1.246-2.024-.713-.233-.944.066-.944.713v1.83c.566.152.85.236 1.417.423v.999c-.567-.187-.85-.271-1.417-.423v2.308c0 .563.214 1.018.944 1.244 1.002.309 1.245-.3 1.245-1.172v-.69c.361.133.541.202.902.349v3.18a31.887 31.887 0 00-5.624-1.586v-.803zM3.57 59.205c-.865-.25-1.59-.88-2.003-1.678-.224-.433-.364-.796-.434-1.2-.28-.111-.42-.17-.7-.29v2.998c.28.122.42.18.7.291.126-.2.28-.42.504-.336.213.08.454.278.75.522l.049.04c.307.253.792.585 1.316.737 1.409.406 2.528-.708 2.521-2.077-.007-1.717-1.238-2.813-2.647-3.566-.693-.371-1.565-.954-1.555-1.845.007-.538.365-1.005 1.149-.77.602.18 1.288.812 1.54 1.19.21.313.379.74.477 1.18.275.058.412.085.686.136v-2.623c-.274-.05-.411-.078-.686-.136-.098.077-.21.165-.378.126-.209-.048-.418-.166-.64-.293l-.004-.002a7.14 7.14 0 00-1.163-.494c-1.155-.376-2.55.061-2.521 1.476.026 1.344.66 2.563 1.764 3.384.438.328.656.487 1.093.792l.02.014c.462.331 1.185.847 1.185 1.631 0 .558-.438.962-1.023.793zm5.698-3.335c-.332-.02-.499-.031-.831-.06V52.3a42.89 42.89 0 006.057-.033V55.778c-.333.028-.499.041-.831.063v-.784c0-.825-.212-1.716-.817-1.688-.536.025-.592.848-.592 1.38v4.475c0 .644.113 1.048.48 1.102.174.02.261.03.436.048v.798a35.171 35.171 0 01-3.41.025V60.4c.181-.02.271-.031.452-.054.352-.06.465-.465.465-1.109v-4.476c0-.531-.057-1.353-.592-1.37-.606-.02-.817.871-.817 1.696v.783zm11.568-3.746l.44-.015c.399-.021.484.492.484 1.024v3.805c.037.935-.18 2.214-1.265 2.454-1.344.297-1.33-1.507-1.322-2.486 0-.118.002-.224 0-.313v-2.98c0-.657.17-1.091.455-1.197.182-.06.273-.09.455-.152v-.797c-1.138.207-2.28.392-3.426.544v.797c.182.005.273.006.455.009.284.016.455.396.455 1.053v3.315c-.036 1.881.615 3.55 2.829 3.12 1.837-.355 2.284-2.148 2.26-3.786v-.911-2.656c0-.532.085-1.08.469-1.216l.125-.045.003-.002.327-.118v-.797c-.913.192-1.827.378-2.744.552v.798zm8.048 5.387c1.308-.445 1.46-2.658 1.448-3.769 0-.083.002-.19.004-.315.019-.96.058-2.94-1.1-2.848l-.957.206c-.45.098-.479.527-.479 1.174v4.8c0 .649.141.956.436.891l.648-.14zm-3.574-7.073c1.322-.291 2.644-.582 3.967-.867 2.47-.574 2.917 2.175 2.955 3.938.044 2.072-1.226 4.543-3.447 5.036-.898.194-1.795.392-2.693.59l-.782.172v-.803l.45-.169c.338-.145.45-.578.45-1.226v-4.87c0-.662-.168-1.033-.45-1.027l-.125.007-.325.021v-.802zm9.11 5.998l-.457.142v.809a57.11 57.11 0 013.461-.455v-.808a44 44 0 00-.457-.024c-.358-.032-.472-.429-.472-1.08v-4.907c0-.667.171-1.099.457-1.186.183-.049.275-.072.458-.119V48a57.207 57.207 0 00-3.447.453v.808h.458c.286.012.458.399.458 1.065v4.907c0 .652-.115 1.08-.458 1.203zm7.663-.581c.83.014.999-.93.999-1.877v-3.706c0-.78-.17-1.565-1-1.58-.844-.013-.998.765-.998 1.545v3.707c0 1.017.154 1.896.999 1.91zm-2.913-4.848c.005-1.61 1.166-3.245 2.913-3.22 1.782.026 2.902 1.694 2.913 3.334v2.564c.027 1.661-1.185 3.089-2.913 3.061-1.749-.027-2.963-1.357-2.927-3.077l.006-1.148.008-1.514zm10.694 6.018c-.826-.254-1.576-.792-2.003-1.545-.225-.396-.364-.733-.434-1.123-.28-.057-.42-.083-.7-.133v2.995c.28.049.42.075.7.132.126-.225.28-.471.504-.421.224.05.48.234.798.47.308.23.798.538 1.317.713 1.276.43 2.55-.258 2.52-1.684-.035-1.736-1.194-3.135-2.646-3.954-.657-.37-1.57-.905-1.555-1.78.009-.535.364-1.065 1.149-.836.602.176 1.288.874 1.54 1.285.21.341.379.795.477 1.251.274.106.411.162.686.277v-2.618c-.275-.116-.412-.171-.686-.277-.099.06-.21.128-.379.066-.19-.07-.38-.195-.581-.326l-.063-.04a5.019 5.019 0 00-1.162-.53c-1.287-.384-2.525.452-2.522 1.813.003 1.296.656 2.381 1.765 3.082.437.288.656.437 1.093.747.462.333 1.204.924 1.204 1.717 0 .557-.434.9-1.022.72z",
  fill: "#fff"
});

function SvgNeptuneStudiosWhite(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 53,
    height: 64,
    fill: "none"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/neptune-studios--white.5cfd86b2.svg");


/***/ }),

/***/ "./src/assets/svg/path.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/path.svg ***!
  \*********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgPath; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#E23C52"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M-57.252 75.838l-2.964-2.149a43.562 43.562 0 002.799-4.605l3.205 1.751a47.057 47.057 0 01-3.04 5.003zm5.435-10.361l-3.398-1.319a43.522 43.522 0 001.566-5.174l3.535.865a47.344 47.344 0 01-1.703 5.628zM-94.314 95.354c-.952 0-1.912-.03-2.857-.09l.224-3.702c1.769.11 3.582.107 5.312-.004l.231 3.701c-.954.062-1.933.095-2.91.095zm-8.583-.825a44.55 44.55 0 01-5.593-1.474l1.133-3.524a40.655 40.655 0 005.143 1.354l-.683 3.644zm17.217-.01l-.688-3.643a41.318 41.318 0 005.137-1.359l1.137 3.522a44.642 44.642 0 01-5.586 1.48zm-28.172-3.653a45.558 45.558 0 01-5.043-2.867l1.97-3.119a41.645 41.645 0 004.638 2.638l-1.565 3.348zm39.113-.02l-1.568-3.347a41.58 41.58 0 004.633-2.641l1.973 3.117a45.271 45.271 0 01-5.038 2.871zm-48.799-6.34a46.107 46.107 0 01-4.175-4.062l2.671-2.517a42.35 42.35 0 003.843 3.738l-2.339 2.841zm58.476-.028l-2.343-2.839a42.528 42.528 0 003.841-3.742l2.673 2.515a46.535 46.535 0 01-4.171 4.066zm-66.291-8.6a46.122 46.122 0 01-3.044-4.997l3.203-1.754a42.835 42.835 0 002.803 4.598l-2.962 2.153zm-5.443-10.347a46.751 46.751 0 01-1.71-5.622l3.534-.872a43.325 43.325 0 001.573 5.17l-3.397 1.324z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#21B8BF",
  d: "M-49.207 44.858C-50.888 27.241-62.036 12.649-77.478 6.38h22.864c.571 1.719 2.152 2.967 4.029 2.967 2.356 0 4.272-1.955 4.272-4.357 0-2.404-1.916-4.36-4.272-4.36-1.877 0-3.458 1.249-4.029 2.969h-33.009a45.323 45.323 0 00-2.548-.313V.496h-8.547v2.64h-35.467c-.687-1.476-2.148-2.505-3.853-2.505-2.355 0-4.272 1.956-4.272 4.36 0 2.402 1.917 4.357 4.272 4.357 1.704 0 3.166-1.029 3.853-2.504h21.694c-14.879 6.5-25.549 20.809-27.19 38.016h-2.63v8.719h8.545V44.86h-2.253c2.083-20.095 17.559-35.824 37.301-37.847V9.21h8.547V7.011c19.74 2.023 35.218 17.758 37.302 37.848h-1.987v8.719h8.546v-8.719h-2.897zm-1.377-41.446c.852 0 1.545.708 1.545 1.577 0 .868-.693 1.575-1.545 1.575-.853 0-1.546-.707-1.546-1.575 0-.869.693-1.577 1.546-1.577zm-87.452 3.152c-.852 0-1.545-.707-1.545-1.575 0-.869.693-1.577 1.545-1.577.853 0 1.546.708 1.546 1.577 0 .868-.694 1.575-1.546 1.575zm1.544 44.23h-3.09v-3.153h3.09v3.153zm43.595-44.365h-3.092V3.276h3.092v3.153zm43.86 44.365h-3.091v-3.153h3.091v3.153z"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#3D68B0",
  d: "M-73.717 48.017a27.132 27.132 0 01-9.356 5.538l-7.409-15.532c-1.188-2.372-3.138-4.291-5.592-5.522l-.446-.231c-2.025-.872-3.333-2.886-3.333-5.127 0-3.069 2.447-5.564 5.454-5.564 3.008 0 5.456 2.495 5.456 5.564 0 2.088-1.128 3.973-2.942 4.936a12.331 12.331 0 012.694 2.668c2.423-1.723 3.885-4.533 3.885-7.604 0-4.457-3.099-8.186-7.213-9.073v-5.945h-3.76v5.945c-4.113.887-7.211 4.616-7.211 9.073 0 3.709 2.148 7.043 5.481 8.513l.285.151c.077.04.149.084.225.123l-20.237 41.757 3.261 1.645 11.081-22.866a30.15 30.15 0 0011.559 2.276c7.579 0 14.871-2.824 20.533-7.95l-2.415-2.775zm-18.119 7.013c-3.445 0-6.78-.645-9.938-1.907l7.172-14.797c.333.425.627.875.866 1.352l7.08 14.844a26.868 26.868 0 01-5.18.508zM-83.751 60.285l9.337 19.058 3.247-1.67-9.095-18.568a30.387 30.387 0 01-3.489 1.18z"
});

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#3D68B0"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M-69.546-102.082a6.351 6.351 0 00-6.344 6.344 6.353 6.353 0 006.346 6.345 6.352 6.352 0 006.344-6.345 6.352 6.352 0 00-6.346-6.344zm.002 8.688h-.002a2.347 2.347 0 01-2.344-2.345 2.347 2.347 0 012.344-2.344 2.348 2.348 0 012.346 2.344 2.347 2.347 0 01-2.344 2.345z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M-56.688-107.26l-.313-.984-.982-.315c-.1-.032-2.484-.782-6.11-.782-4.169 0-10.489.999-16.979 5.795L-95.765-91.99c-1.855-1.372-9.051-5.369-19.593 5.172l-1.538 1.538 8.206 6.933a12.602 12.602 0 00-.5 5.267c-1.397 1.4-4.011 4.448-4.166 7.784-.084 1.816.575 3.48 1.907 4.812l6.485 6.485c1.258 1.259 2.82 1.924 4.517 1.924 3.405 0 6.521-2.629 7.963-4.06.577.079 1.154.119 1.727.119h.002c2.092 0 3.948-.524 5.563-1.285l6.023 7.129 1.538-1.538c9.964-9.963 6.94-16.933 5.42-19.234l10.505-13.319c8.521-11.534 5.164-22.535 5.018-22.997zm-54.252 21.776c5.956-5.235 9.976-4.636 11.803-3.854l-2.751 2.164c-.541.361-3.07 2.144-5.021 5.095l-4.031-3.405zm10.493 29.409c-.639 0-1.175-.239-1.688-.752l-6.485-6.485c-.538-.538-.767-1.085-.741-1.773.045-1.192.817-2.527 1.661-3.631a48.39 48.39 0 004.935 5.759 47.994 47.994 0 006.091 5.175c-1.14.884-2.548 1.707-3.773 1.707zm21.483-.053l-2.821-3.34c2.083-1.711 3.346-3.508 3.646-3.957l3.199-4.057c.669 1.994.82 5.845-4.024 11.354zm-2.371-9.705l-.114.16c-.036.057-3.709 5.657-9.307 5.657a9.012 9.012 0 01-1.996-.229l-.654-.146c-.223-.147-.446-.3-.669-.455l.797-.798c12.513-12.513 9.948-19.61 9.614-20.378l-3.695 1.529c.018.05 1.513 4.726-6.596 13.755l-1.589-4.167-3.737 1.425 2.51 6.582a46.669 46.669 0 01-3.166-2.89c-1.877-1.878-3.547-3.859-4.92-5.827l-.232-1.136c-1.351-6.622 5.175-10.938 5.448-11.115l12.066-9.485c1.54 3.143 3.699 6.153 6.353 8.807 2.831 2.832 6.047 5.087 9.408 6.639l-9.521 12.072zm12.076-15.31c-3.248-1.347-6.385-3.479-9.135-6.229-2.562-2.564-4.604-5.486-5.96-8.511l5.705-4.484c5.565-4.112 10.986-4.975 14.554-4.975 1.655 0 2.986.185 3.84.347.518 2.73 1.23 10.371-4.629 18.304l-4.375 5.548z"
}));

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#E23C52"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M-142.224-39.765v4c6.785 0 12.305 5.52 12.305 12.305h4c0-8.99-7.314-16.305-16.305-16.305z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M-142.255-51.446v4c13.257 0 24.042 10.785 24.042 24.043h4c0-15.463-12.579-28.043-28.042-28.043z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M-142.31-63.641v4c19.982 0 36.238 16.256 36.238 36.237h4c.001-22.186-18.05-40.237-40.238-40.237z"
}));

var _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#21B8BF"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M-62.88-57.108c-.97-.479-2.2-.06-2.68.9a1.995 1.995 0 00.9 2.68c.28.14.58.21.891.21.76 0 1.45-.42 1.79-1.1.489-.99.089-2.2-.901-2.69zM-77.06-38.698c3.37-1.86 6.42-4.24 9.06-7.07.76-.81.71-2.08-.09-2.83-.78-.72-2.11-.68-2.83.101a32.616 32.616 0 01-8.07 6.3l-.1.05c-1.64.9-3.37 1.67-5.13 2.271-.51.17-.92.529-1.15 1.01a1.966 1.966 0 00-.1 1.52 2.01 2.01 0 001.89 1.36c.221 0 .44-.04.65-.11 1.99-.68 3.939-1.54 5.8-2.56.021-.012.05-.032.07-.042zM-61-62.809a1.998 1.998 0 002.311-1.63c.359-2.069.54-4.189.54-6.31a2 2 0 00-4 0c0 1.88-.16 3.779-.48 5.62-.09.529.03 1.06.34 1.5.299.431.76.731 1.289.82zM-93.45-38.168c-1.1.04-1.96.97-1.92 2.069a1.99 1.99 0 002 1.92h.08a1.998 1.998 0 001.92-2.069 2.001 2.001 0 00-2.08-1.92zM-91.729-105.688c0-1.09-.87-1.97-1.95-2h-.05c-2.11 0-4.23.18-6.31.54-.53.09-.99.38-1.29.82a1.997 1.997 0 001.97 3.12c1.85-.32 3.75-.48 5.63-.48 1.099 0 2-.9 2-2zM-118.71-97.849a36.814 36.814 0 00-7.11 9.14 36.27 36.27 0 00-2.57 5.8c-.35 1.04.21 2.18 1.25 2.54.21.07.43.1.65.1.85 0 1.61-.54 1.89-1.35.61-1.78 1.37-3.51 2.28-5.16 1.67-3.03 3.8-5.77 6.34-8.14.81-.76.85-2.02.1-2.83-.73-.779-2.06-.819-2.83-.1zM-110.06-103.858c-.98.49-1.38 1.7-.89 2.68.34.69 1.02 1.11 1.79 1.11.31 0 .61-.07.89-.21.98-.49 1.39-1.7.9-2.68-.48-.96-1.72-1.38-2.69-.9zM-128.23-74.469c-1.12-.07-2.04.82-2.08 1.92-.04 1.1.82 2.03 1.92 2.08h.08a2.004 2.004 0 001.47-3.36c-.37-.39-.86-.62-1.39-.64zM-53.17-85.898l.03.06c.89 2.38 1.58 4.85 2.05 7.36.17.95 1 1.63 1.96 1.63.13 0 .25-.01.37-.03 1.08-.2 1.8-1.25 1.6-2.33-.51-2.74-1.26-5.45-2.239-8.04-.37-1-1.561-1.54-2.57-1.16-.5.18-.9.56-1.12 1.04-.21.47-.24.98-.07 1.47h-.011zM-46.92-70.258a1.932 1.932 0 00-1.39-.63c-1.12-.07-2.03.82-2.061 1.93-.02.529.17 1.04.53 1.43.37.39.86.62 1.4.63.02.01.04.01.069.01 1.08 0 1.96-.85 1.99-1.939a1.944 1.944 0 00-.538-1.431zM-86.069-27.278c-.53.09-.98.39-1.28.83-.311.44-.42.97-.32 1.5.18.94 1.01 1.63 1.97 1.63.12 0 .25-.01.37-.03a2.006 2.006 0 001.59-2.34c-.2-1.07-1.261-1.8-2.33-1.59zM-70.22-33.679a44.03 44.03 0 01-6.73 3.62 2.01 2.01 0 00-1.069 1.09c-.19.5-.19 1.04.02 1.53.32.74 1.04 1.21 1.84 1.21h.011c.27 0 .529-.05.779-.16a47.597 47.597 0 007.341-3.939 2.01 2.01 0 00.909-1.7 2.04 2.04 0 00-.33-1.07c-.58-.89-1.87-1.171-2.771-.581zM-49.99-58.038a2.031 2.031 0 00-2.43 1.04v-.061l-.1.301a42.604 42.604 0 01-3 7.029c-.25.471-.3 1.01-.15 1.521.16.51.5.93.97 1.18a1.99 1.99 0 002.71-.821c1.311-2.439 2.4-5 3.261-7.62 0-.01.01-.02.02-.039v-.011c.061-.21.101-.42.09-.64a1.988 1.988 0 00-1.371-1.879zM-60.91-41.858a1.998 1.998 0 001.521 3.299c.58 0 1.14-.25 1.52-.689.71-.84.62-2.11-.22-2.82-.81-.701-2.131-.59-2.821.21zM-135.88-90.829c-1-.41-2.2.09-2.61 1.09a1.997 1.997 0 001.85 2.76c.81 0 1.54-.48 1.85-1.23a2.017 2.017 0 00-1.09-2.62zM-94.33-117.358c-.05-1.1-.98-1.97-2.09-1.91-2.74.12-5.49.49-8.18 1.08-.03 0-.06.01-.08.01l-.04.02a1.978 1.978 0 00-1.48 2.37c.2.91 1.02 1.57 1.95 1.57.15 0 .29-.02.44-.05 2.48-.55 5.02-.89 7.57-1 1.1-.05 1.96-.99 1.91-2.09zM-139.08-81.358a2.02 2.02 0 00-2.32 1.62 48.95 48.95 0 00-.71 8.3c0 1.11.89 2 2 2a2 2 0 002-2c0-2.56.22-5.12.65-7.61a1.996 1.996 0 00-1.62-2.31zM-128.48-98.869c1.59-1.98 3.36-3.84 5.28-5.53.83-.73.91-1.99.18-2.82-.7-.8-2.02-.88-2.82-.18a48.926 48.926 0 00-5.76 6.02c-.29.36-.44.78-.44 1.23a2.005 2.005 0 002 2.03c.61 0 1.18-.279 1.56-.75zM-86.37-114.648c.98 0 1.811-.69 1.971-1.66a2.002 2.002 0 00-1.63-2.31l-.061-.01c-1.07-.14-2.07.59-2.25 1.64a2.014 2.014 0 001.63 2.32c.11.009.231.02.34.02zM-117.33-113.389c-.46.26-.8.68-.95 1.2-.15.51-.09 1.05.17 1.52.35.64 1.02 1.03 1.75 1.03.34 0 .67-.08.96-.25.97-.53 1.32-1.75.79-2.71-.51-.94-1.78-1.31-2.72-.79z"
}));

var _ref7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#E23C52",
  d: "M43.439-73.153h-5.553a2 2 0 000 4h5.553a2 2 0 000-4zM68.786-69.149c.017 0 .032-.004.048-.004h2.949a2 2 0 000-4h-2.949c-.016 0-.031-.006-.048-.006h-9a2.005 2.005 0 000 4.01h9zM53.616-71.159c0-1.1-.9-2-2-2a2.005 2.005 0 000 4.01c1.1 0 2-.899 2-2.01zM31.932-61.347h3a2 2 0 100-4h-3a2 2 0 000 4zM43.855-63.347c0 1.109.891 2 2 2a2 2 0 10-2-2zM54.775-63.349c0 1.109.891 2 2 2h11.969c.014 0 .025.004.039.004h3a2 2 0 000-4h-2.959c-.013 0-.025-.004-.038-.004H56.775a2 2 0 00-2 2z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#3D68B0",
  d: "M77.008-95.165h-5.969c-1.056 0-2.33.506-3.1 1.229l-3.487 3.27v-1.779c0-1.654-1.346-3-3-3h-4.823c-1.053 0-2.324.5-3.094 1.215l-6.806 6.324h-4.745v-2.547a5.031 5.031 0 00-5.027-5.025c-2.633 0-4.816 2.041-5.026 4.621-.009.044-.012 1.306-.012 2.951h-.015v4h.019l.008 3.869c0 2.35 1.911 4.26 4.26 4.26 2.35 0 4.261-1.91 4.261-4.26v-1.309a2 2 0 00-4 0v1.309c0 .285-.521.287-.521 0v-3.869h25.201c1.054 0 2.325-.385 3.093-1.105l6.433-5.99c.081-.062.308-.152.382-.162h4.969v38.168a1.84 1.84 0 01-1.837 1.84l-52.292-.178a1.842 1.842 0 01-1.84-1.84v-28.893a1.84 1.84 0 011.832-1.84h7.149v-4h-7.142a5.846 5.846 0 00-5.84 5.84v28.893c0 3.219 2.619 5.84 5.834 5.84l52.289.178h.006a5.846 5.846 0 005.84-5.84v-39.168a3.004 3.004 0 00-3-3.002zm-39.024 7.258H35.93v-2.547a1.026 1.026 0 012.053 0v2.547zm22.468 0h-7.849l3.633-3.377a1.31 1.31 0 01.393-.162h3.823v3.539z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#21B8BF",
  d: "M49.309-27.855a1.843 1.843 0 01-2.603 0l-2.485-2.484-2.828 2.828 2.485 2.485c2.276 2.275 5.981 2.277 8.255.004l2.51-2.493-2.828-2.829-2.506 2.489zM43.878-117.611l-2.485 2.485 2.828 2.828 2.485-2.484a1.843 1.843 0 012.603 0l2.506 2.489 2.828-2.829-2.51-2.493c-2.274-2.273-5.979-2.271-8.255.004zM94.319-74.853l-2.493-2.51-2.829 2.828 2.489 2.506a1.843 1.843 0 010 2.603l-2.484 2.485 2.828 2.828 2.485-2.485c2.276-2.276 2.278-5.981.004-8.255zM7.05-74.534l-2.829-2.828-2.493 2.51c-2.273 2.273-2.271 5.979.004 8.255l2.485 2.485 2.828-2.828-2.484-2.485a1.843 1.843 0 010-2.603l2.489-2.506z"
}));

var _ref8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#21B8BF"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M87.075 55.87c-2.38-1.354-5.217-1.684-7.777-.906-2.47.749-4.477 2.453-5.676 4.849a28.017 28.017 0 01-3.169 5.209l3.174 2.437a31.842 31.842 0 003.596-5.904c.872-1.736 2.241-2.461 3.238-2.763 1.517-.463 3.205-.258 4.616.542 2.967 1.734 3.597 4.145 2.099 8.053l-1.134 2.249a43.944 43.944 0 01-16.098 16.181c-13.78 7.998-30.853 7.91-44.57-.221-3.721-2.548-12.458-5.453-19.322 1.554l2.861 2.797c6.24-6.371 13.923-1.241 14.24-1.023l.118.076a48.07 48.07 0 0024.584 6.755 47.992 47.992 0 0024.1-6.479 47.952 47.952 0 0017.59-17.704l1.249-2.474.078-.174c2.839-7.298-.485-11.12-3.797-13.054z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M69.234 41.048c-3.142 1.725-6.604-.168-8.484-2.647-3.04-4.057-7.692-6.383-12.764-6.383-8.791 0-15.943 7.146-15.943 15.931S39.195 63.88 47.986 63.88c1.507 0 3.336-.259 4.721-.662 1.435-.375 3.147-.132 3.74 1.259.297.7.303 1.481.015 2.145-.185.425-.577.993-1.463 1.317-.074.029-7.534 2.921-15.872-.715l-.113-.045c-1.355-.494-2.76-.33-3.954.466-1.453.967-2.448 2.814-2.537 4.778-.038 3.53 2.905 5.226 4.589 5.673 3.457 1.291 7.061 1.919 11.012 1.919 7.197 0 14.001-2.321 19.678-6.715l-2.45-3.161c-4.97 3.845-10.926 5.877-17.228 5.877-3.55 0-6.634-.541-9.706-1.7l-.252-.077c-.017-.004-1.655-.403-1.643-1.703.031-.684.409-1.332.755-1.562.117-.078.193-.092.321-.052 9.903 4.28 18.536.872 18.833.751 1.684-.613 2.998-1.842 3.701-3.456.723-1.664.723-3.597-.004-5.306-1.302-3.056-4.771-4.52-8.486-3.546a14.361 14.361 0 01-3.656.517c-6.584 0-11.941-5.353-11.941-11.933 0-6.579 5.357-11.932 11.941-11.932 3.799 0 7.283 1.741 9.567 4.789 3.532 4.662 9.129 6.203 13.607 3.747 4.668-2.562 6.559-8.044 4.398-12.75-.171-.373-.621-1.072-.97-1.592a32.706 32.706 0 00-1.231-1.716l-3.173 2.437c.376.488.735.99 1.077 1.502.257.381.595.912.66 1.036 1.297 2.824.166 6.011-2.688 7.578z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M7.258 73.313l.128.193c2.244 3.843 5.887 6.039 9.587 6.039a9.336 9.336 0 003.493-.68c2.637-1.059 4.734-3.146 5.756-5.723.985-2.487.895-5.221-.256-7.694l-.08-.154a53.63 53.63 0 00-2.433-3.847l-.174-.371a27.973 27.973 0 01-3.27-13.129c0-15.414 12.55-27.954 27.977-27.954 6.194 0 12.061 1.979 16.967 5.726l2.431-3.178c-5.61-4.283-12.318-6.547-19.397-6.547-17.634 0-31.979 14.334-31.979 31.953a31.987 31.987 0 003.709 14.951l.168.37.189.33a49.94 49.94 0 012.296 3.61c.834 1.85.533 3.444.13 4.463-.618 1.562-1.903 2.832-3.527 3.484-3.334 1.337-6.55-.963-8.183-3.751l-.159-.242a43.88 43.88 0 01-6.629-23.214 44.033 44.033 0 019.78-27.634l-3.11-2.516C3.79 26.293 0 37 0 47.948a47.889 47.889 0 007.258 25.365z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M94.958 10.54l-3.498 1.942c.692 1.242.566 2.362.339 3.084-.347 1.104-1.171 2.043-2.258 2.574-2.221 1.082-4.57-.379-5.815-2.193l-.548-.597C74.122 5.596 61.296 0 47.986 0a48.041 48.041 0 00-30.851 11.223l2.574 3.062A44.037 44.037 0 0147.986 3.999c12.199 0 23.957 5.129 32.307 14.122l.24.242c1.897 2.673 4.654 4.149 7.408 4.149a7.628 7.628 0 003.356-.779c2.069-1.011 3.645-2.821 4.318-4.968.656-2.077.422-4.288-.657-6.225z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#3D68B0"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M72.908 23.168a5.26 5.26 0 00-3.746-1.552 5.257 5.257 0 00-3.743 1.551 5.25 5.25 0 00-1.553 3.743c0 1.413.551 2.743 1.553 3.741 1 1 2.329 1.551 3.743 1.551a5.264 5.264 0 003.746-1.551 5.292 5.292 0 000-7.483zm-2.376 5.112c-.73.73-2.005.732-2.737-.001a1.925 1.925 0 010-2.733 1.923 1.923 0 011.367-.567 1.935 1.935 0 011.37 3.301zM5.349 85.415a5.262 5.262 0 00-3.745 1.551 5.253 5.253 0 00-1.552 3.742 5.25 5.25 0 001.552 3.741c1.001 1 2.33 1.551 3.745 1.551s2.744-.551 3.745-1.551a5.295 5.295 0 00.001-7.483 5.266 5.266 0 00-3.746-1.551zm1.369 6.663c-.731.73-2.004.732-2.738-.001a1.923 1.923 0 01-.567-1.366c0-.517.202-1.001.568-1.367a1.926 1.926 0 011.368-.567 1.935 1.935 0 011.369 3.301z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#E23C52"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M93.816 2.239A7.41 7.41 0 0088.545.056a7.407 7.407 0 00-5.272 2.182 7.401 7.401 0 00-2.185 5.27c0 1.989.776 3.859 2.184 5.268a7.411 7.411 0 005.273 2.182 7.404 7.404 0 005.271-2.182 7.402 7.402 0 002.185-5.268 7.397 7.397 0 00-2.185-5.269zm-2.829 7.709c-1.307 1.303-3.581 1.304-4.885-.001a3.424 3.424 0 01-1.013-2.439c0-.922.359-1.789 1.013-2.441a3.436 3.436 0 012.442-1.011c.922 0 1.79.359 2.442 1.011a3.432 3.432 0 011.012 2.441 3.42 3.42 0 01-1.011 2.44zM69.242 63.955a5.263 5.263 0 00-3.745 1.551 5.253 5.253 0 00-1.552 3.742 5.25 5.25 0 001.552 3.741c1 1 2.331 1.551 3.745 1.551a5.295 5.295 0 003.745-9.034c-1-1-2.33-1.551-3.745-1.551zm1.368 6.664c-.73.73-2.003.732-2.737-.002a1.924 1.924 0 01.002-2.733 1.923 1.923 0 011.367-.566c.517 0 1.003.201 1.368.566a1.936 1.936 0 010 2.735zM15.203 9.733a6.059 6.059 0 00-4.309 1.782c-1.151 1.15-1.784 2.68-1.784 4.306s.633 3.154 1.784 4.304a6.058 6.058 0 004.309 1.783 6.057 6.057 0 004.307-1.783c1.151-1.149 1.785-2.678 1.785-4.304s-.634-3.155-1.784-4.306a6.06 6.06 0 00-4.308-1.782zm1.478 7.565c-.79.788-2.165.789-2.957 0a2.073 2.073 0 01-.611-1.477c0-.559.217-1.083.612-1.478s.92-.611 1.479-.611c.558 0 1.082.217 1.478.611.395.395.612.919.612 1.478a2.083 2.083 0 01-.613 1.477z"
})));

var _ref9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#21B8BF"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M212.588-113.334l-7.374 7.406 29.273 29.397 7.372-7.405-29.271-29.398zm-1.769 7.406l1.769-1.777 23.667 23.77-1.768 1.776-23.668-23.769zM154.238-54.732l29.271 29.398 7.373-7.406-29.271-29.396-7.373 7.404zm29.272 23.768l-23.667-23.769 1.769-1.776 23.667 23.769-1.769 1.776z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#3D68B0"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M195.954-75.399l3.962.051.215-16.639 9.522-9.564-2.801-2.814-10.662 10.706zM195.937-63.377l.16 16.614-9.628 9.668 2.801 2.814 10.804-10.85-.176-18.285z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M230.15-80.965l-9.51 9.553-46.734.016-10.796 10.84 2.802 2.815 9.636-9.675 46.733-.018 10.672-10.717zM161.805-78.45l-2.285 1.859c3.377-18.234 19.493-31.998 38.324-31.998v-3.979c-21.055 0-39.025 15.623-42.374 36.16l-2.39-2.964-3.08 2.505 6.398 7.936 7.9-6.426-2.493-3.093z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#E23C52"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ellipse", {
  cx: 174.744,
  cy: -57.75,
  rx: 2.104,
  ry: 2.113
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ellipse", {
  cx: 186.08,
  cy: -57.626,
  rx: 2.104,
  ry: 2.115
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ellipse", {
  cx: 186.264,
  cy: -46.019,
  rx: 2.104,
  ry: 2.115
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ellipse", {
  cx: 206.446,
  cy: -77.484,
  rx: 2.104,
  ry: 2.114
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ellipse", {
  cx: 214.699,
  cy: -85.733,
  rx: 2.105,
  ry: 2.114
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M246.001-61.962l-6.399-7.936-7.9 6.426 2.494 3.094 2.287-1.859c-3.378 18.231-19.494 31.997-38.325 31.997v3.979c21.055 0 39.025-15.625 42.373-36.161l2.391 2.965 3.079-2.505z"
})));

function SvgPath(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 96.001 96"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9);
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/path.c040755b.svg");


/***/ }),

/***/ "./src/assets/svg/title.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/title.svg ***!
  \**********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#E23C52"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M85.058 75.823l-2.964-2.149a43.562 43.562 0 002.799-4.605l3.205 1.751a47.122 47.122 0 01-3.04 5.003zm5.434-10.361l-3.398-1.319a43.522 43.522 0 001.566-5.174l3.535.865a46.975 46.975 0 01-1.703 5.628zM47.995 95.34c-.952 0-1.912-.03-2.857-.09l.224-3.702c1.769.11 3.582.107 5.312-.004l.231 3.701a45.77 45.77 0 01-2.91.095zm-8.583-.825a44.55 44.55 0 01-5.593-1.474l1.133-3.524a40.655 40.655 0 005.143 1.354l-.683 3.644zm17.218-.011l-.688-3.643a41.318 41.318 0 005.137-1.359l1.137 3.522a44.3 44.3 0 01-5.586 1.48zm-28.172-3.652a45.558 45.558 0 01-5.043-2.867l1.97-3.119a41.645 41.645 0 004.638 2.638l-1.565 3.348zm39.112-.021l-1.568-3.347a41.58 41.58 0 004.633-2.641l1.973 3.117a45.181 45.181 0 01-5.038 2.871zm-48.799-6.34a46.107 46.107 0 01-4.175-4.062l2.671-2.517a42.35 42.35 0 003.843 3.738l-2.339 2.841zm58.477-.028l-2.343-2.839a42.528 42.528 0 003.841-3.742l2.673 2.515a46.669 46.669 0 01-4.171 4.066zm-66.291-8.6a46.122 46.122 0 01-3.044-4.997l3.203-1.754a42.835 42.835 0 002.803 4.598l-2.962 2.153zM5.514 65.517a46.751 46.751 0 01-1.71-5.622l3.534-.872a43.325 43.325 0 001.573 5.17l-3.397 1.324z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#21B8BF",
  d: "M93.103 44.844c-1.681-17.617-12.83-32.209-28.271-38.479h22.864c.571 1.719 2.152 2.967 4.029 2.967 2.356 0 4.272-1.955 4.272-4.357 0-2.404-1.916-4.36-4.272-4.36-1.877 0-3.458 1.249-4.029 2.969H54.688a45.323 45.323 0 00-2.548-.313V.481h-8.547v2.64H8.126C7.439 1.644 5.978.614 4.273.614 1.918.614.001 2.57.001 4.974c0 2.402 1.917 4.357 4.272 4.357 1.704 0 3.166-1.029 3.853-2.504H29.82c-14.879 6.5-25.549 20.809-27.19 38.016H0v8.719h8.545v-8.719H6.292C8.375 24.749 23.851 9.02 43.593 6.997v2.198h8.547V6.996C71.88 9.02 87.357 24.754 89.441 44.844h-1.987v8.719H96v-8.719h-2.897zM91.726 3.397c.852 0 1.545.708 1.545 1.577 0 .868-.693 1.575-1.545 1.575-.853 0-1.546-.707-1.546-1.575 0-.869.693-1.577 1.546-1.577zM4.273 6.55c-.852 0-1.545-.707-1.545-1.575 0-.869.693-1.577 1.545-1.577.853 0 1.546.708 1.546 1.577 0 .868-.693 1.575-1.546 1.575zm1.544 44.229h-3.09v-3.153h3.09v3.153zM49.412 6.414H46.32V3.262h3.092v3.152zm43.86 44.365h-3.091v-3.153h3.091v3.153z"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#3D68B0",
  d: "M68.593 48.002a27.132 27.132 0 01-9.356 5.538l-7.409-15.532c-1.188-2.372-3.138-4.291-5.592-5.522l-.446-.231c-2.025-.872-3.333-2.886-3.333-5.127 0-3.069 2.447-5.564 5.454-5.564 3.008 0 5.456 2.495 5.456 5.564 0 2.088-1.128 3.973-2.942 4.936a12.331 12.331 0 012.694 2.668c2.423-1.723 3.885-4.533 3.885-7.604 0-4.457-3.099-8.186-7.213-9.073V12.11h-3.76v5.945c-4.113.887-7.211 4.616-7.211 9.073 0 3.709 2.148 7.043 5.481 8.513l.285.151c.077.04.149.084.225.123L24.573 77.671l3.261 1.645L38.915 56.45a30.15 30.15 0 0011.559 2.276c7.579 0 14.871-2.824 20.533-7.95l-2.414-2.774zm-18.119 7.014c-3.445 0-6.78-.645-9.938-1.907l7.172-14.797c.333.425.627.875.866 1.352l7.08 14.844a26.868 26.868 0 01-5.18.508zM58.559 60.271l9.337 19.058 3.247-1.67-9.095-18.569a30.523 30.523 0 01-3.489 1.181z"
});

function SvgTitle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 96 96"
  }, props), _ref, _ref2, _ref3);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOTYgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk2IDk2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRTIzQzUyIiBkPSJNODUuMDU4LDc1LjgyM2wtMi45NjQtMi4xNDljMS4wMjQtMS40NzEsMS45NjYtMy4wMiwyLjc5OS00LjYwNWwzLjIwNSwxLjc1MQ0KCQkJQzg3LjE5Myw3Mi41NDIsODYuMTcxLDc0LjIyNiw4NS4wNTgsNzUuODIzeiBNOTAuNDkyLDY1LjQ2MmwtMy4zOTgtMS4zMTljMC42MjctMS42ODUsMS4xNTQtMy40MjYsMS41NjYtNS4xNzRsMy41MzUsMC44NjUNCgkJCUM5MS43NDgsNjEuNzM1LDkxLjE3NSw2My42MjksOTAuNDkyLDY1LjQ2MnoiLz4NCgkJPHBhdGggZmlsbD0iI0UyM0M1MiIgZD0iTTQ3Ljk5NSw5NS4zNGMtMC45NTIsMC0xLjkxMi0wLjAzLTIuODU3LTAuMDlsMC4yMjQtMy43MDJjMS43NjksMC4xMSwzLjU4MiwwLjEwNyw1LjMxMi0wLjAwNA0KCQkJbDAuMjMxLDMuNzAxQzQ5Ljk1MSw5NS4zMDcsNDguOTczLDk1LjMzOSw0Ny45OTUsOTUuMzR6IE0zOS40MTIsOTQuNTE1Yy0xLjg4OC0wLjM2OC0zLjc3LTAuODY0LTUuNTkzLTEuNDc0bDEuMTMzLTMuNTI0DQoJCQljMS42NzYsMC41NjEsMy40MDYsMS4wMTcsNS4xNDMsMS4zNTRMMzkuNDEyLDk0LjUxNXogTTU2LjYzLDk0LjUwNGwtMC42ODgtMy42NDNjMS43MzQtMC4zNCwzLjQ2My0wLjc5OSw1LjEzNy0xLjM1OWwxLjEzNywzLjUyMg0KCQkJQzYwLjM5NSw5My42MzcsNTguNTE2LDk0LjEzNCw1Ni42Myw5NC41MDR6IE0yOC40NTgsOTAuODUyYy0xLjczMS0wLjg0My0zLjQyOS0xLjgwNy01LjA0My0yLjg2N2wxLjk3LTMuMTE5DQoJCQljMS40ODUsMC45NzYsMy4wNDUsMS44NjMsNC42MzgsMi42MzhMMjguNDU4LDkwLjg1MnogTTY3LjU3LDkwLjgzMWwtMS41NjgtMy4zNDdjMS41OTItMC43NzYsMy4xNTEtMS42NjUsNC42MzMtMi42NDENCgkJCWwxLjk3MywzLjExN0M3MC45OTUsODkuMDIxLDY5LjMwMiw4OS45ODgsNjcuNTcsOTAuODMxeiBNMTguNzcxLDg0LjQ5MWMtMS40NjctMS4yNTYtMi44NzEtMi42MjItNC4xNzUtNC4wNjJsMi42NzEtMi41MTcNCgkJCWMxLjIsMS4zMjUsMi40OTMsMi41ODMsMy44NDMsMy43MzhMMTguNzcxLDg0LjQ5MXogTTc3LjI0OCw4NC40NjNsLTIuMzQzLTIuODM5YzEuMzUyLTEuMTYsMi42NDUtMi40MTksMy44NDEtMy43NDJsMi42NzMsMi41MTUNCgkJCUM4MC4xMTksODEuODM0LDc4LjcxNiw4My4yMDEsNzcuMjQ4LDg0LjQ2M3ogTTEwLjk1Nyw3NS44NjNjLTEuMTE0LTEuNTkyLTIuMTM5LTMuMjcyLTMuMDQ0LTQuOTk3bDMuMjAzLTEuNzU0DQoJCQljMC44MzUsMS41ODUsMS43NzYsMy4xMzIsMi44MDMsNC41OThMMTAuOTU3LDc1Ljg2M3ogTTUuNTE0LDY1LjUxN2MtMC42ODUtMS44My0xLjI2MS0zLjcyMS0xLjcxLTUuNjIybDMuNTM0LTAuODcyDQoJCQljMC40MTQsMS43NDgsMC45NDQsMy40ODgsMS41NzMsNS4xN0w1LjUxNCw2NS41MTd6Ii8+DQoJPC9nPg0KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNENjhCMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49ImJldmVsIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik00OCw3OC40OTMiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzIxQjhCRiIgZD0iTTkzLjEwMyw0NC44NDRDOTEuNDIyLDI3LjIyNyw4MC4yNzMsMTIuNjM1LDY0LjgzMiw2LjM2NWgyMi44NjRjMC41NzEsMS43MTksMi4xNTIsMi45NjcsNC4wMjksMi45NjcNCgkJCWMyLjM1NiwwLDQuMjcyLTEuOTU1LDQuMjcyLTQuMzU3YzAtMi40MDQtMS45MTYtNC4zNi00LjI3Mi00LjM2Yy0xLjg3NywwLTMuNDU4LDEuMjQ5LTQuMDI5LDIuOTY5SDU0LjY4OA0KCQkJYy0wLjg0Mi0wLjEyOC0xLjY5MS0wLjIzMi0yLjU0OC0wLjMxM3YtMi43OWgtOC41NDd2Mi42NEg4LjEyNkM3LjQzOSwxLjY0NCw1Ljk3OCwwLjYxNCw0LjI3MywwLjYxNA0KCQkJYy0yLjM1NSwwLTQuMjcyLDEuOTU2LTQuMjcyLDQuMzZjMCwyLjQwMiwxLjkxNyw0LjM1Nyw0LjI3Miw0LjM1N2MxLjcwNCwwLDMuMTY2LTEuMDI5LDMuODUzLTIuNTA0SDI5LjgyDQoJCQljLTE0Ljg3OSw2LjUtMjUuNTQ5LDIwLjgwOS0yNy4xOSwzOC4wMTZIMHY4LjcxOWg4LjU0NXYtOC43MTlINi4yOTJDOC4zNzUsMjQuNzQ5LDIzLjg1MSw5LjAyLDQzLjU5Myw2Ljk5N3YyLjE5OGg4LjU0N1Y2Ljk5Ng0KCQkJQzcxLjg4LDkuMDIsODcuMzU3LDI0Ljc1NCw4OS40NDEsNDQuODQ0aC0xLjk4N3Y4LjcxOUg5NnYtOC43MTlIOTMuMTAzeiBNOTEuNzI2LDMuMzk3YzAuODUyLDAsMS41NDUsMC43MDgsMS41NDUsMS41NzcNCgkJCWMwLDAuODY4LTAuNjkzLDEuNTc1LTEuNTQ1LDEuNTc1Yy0wLjg1MywwLTEuNTQ2LTAuNzA3LTEuNTQ2LTEuNTc1QzkwLjE4LDQuMTA1LDkwLjg3MywzLjM5Nyw5MS43MjYsMy4zOTd6IE00LjI3Myw2LjU1DQoJCQljLTAuODUyLDAtMS41NDUtMC43MDctMS41NDUtMS41NzVjMC0wLjg2OSwwLjY5My0xLjU3NywxLjU0NS0xLjU3N2MwLjg1MywwLDEuNTQ2LDAuNzA4LDEuNTQ2LDEuNTc3DQoJCQlDNS44MTksNS44NDMsNS4xMjYsNi41NSw0LjI3Myw2LjU1eiBNNS44MTcsNTAuNzc5aC0zLjA5di0zLjE1M2gzLjA5VjUwLjc3OXogTTQ5LjQxMiw2LjQxNEg0Ni4zMlYzLjI2MmgzLjA5MlY2LjQxNHoNCgkJCSBNOTMuMjcyLDUwLjc3OWgtMy4wOTF2LTMuMTUzaDMuMDkxVjUwLjc3OXoiLz4NCgkJPHBhdGggZmlsbD0iIzNENjhCMCIgZD0iTTY4LjU5Myw0OC4wMDJjLTIuNzQ5LDIuNDg4LTUuOTM1LDQuMzU3LTkuMzU2LDUuNTM4bC03LjQwOS0xNS41MzJjLTEuMTg4LTIuMzcyLTMuMTM4LTQuMjkxLTUuNTkyLTUuNTIyDQoJCQlsLTAuNDQ2LTAuMjMxYy0yLjAyNS0wLjg3Mi0zLjMzMy0yLjg4Ni0zLjMzMy01LjEyN2MwLTMuMDY5LDIuNDQ3LTUuNTY0LDUuNDU0LTUuNTY0YzMuMDA4LDAsNS40NTYsMi40OTUsNS40NTYsNS41NjQNCgkJCWMwLDIuMDg4LTEuMTI4LDMuOTczLTIuOTQyLDQuOTM2YzEuMDM5LDAuNzU1LDEuOTQ2LDEuNjUxLDIuNjk0LDIuNjY4YzIuNDIzLTEuNzIzLDMuODg1LTQuNTMzLDMuODg1LTcuNjA0DQoJCQljMC00LjQ1Ny0zLjA5OS04LjE4Ni03LjIxMy05LjA3M3YtNS45NDVoLTMuNzZ2NS45NDVjLTQuMTEzLDAuODg3LTcuMjExLDQuNjE2LTcuMjExLDkuMDczYzAsMy43MDksMi4xNDgsNy4wNDMsNS40ODEsOC41MTMNCgkJCWwwLjI4NSwwLjE1MWMwLjA3NywwLjA0LDAuMTQ5LDAuMDg0LDAuMjI1LDAuMTIzTDI0LjU3Myw3Ny42NzFsMy4yNjEsMS42NDVsMTEuMDgxLTIyLjg2NmMzLjY2OSwxLjUxMiw3LjU0OSwyLjI3NiwxMS41NTksMi4yNzYNCgkJCWM3LjU3OSwwLDE0Ljg3MS0yLjgyNCwyMC41MzMtNy45NUw2OC41OTMsNDguMDAyeiBNNTAuNDc0LDU1LjAxNmMtMy40NDUsMC02Ljc4LTAuNjQ1LTkuOTM4LTEuOTA3bDcuMTcyLTE0Ljc5Nw0KCQkJYzAuMzMzLDAuNDI1LDAuNjI3LDAuODc1LDAuODY2LDEuMzUybDcuMDgsMTQuODQ0QzUzLjk1OCw1NC44NDEsNTIuMjI2LDU1LjAxNiw1MC40NzQsNTUuMDE2eiIvPg0KCQk8cGF0aCBmaWxsPSIjM0Q2OEIwIiBkPSJNNTguNTU5LDYwLjI3MWw5LjMzNywxOS4wNThsMy4yNDctMS42N0w2Mi4wNDgsNTkuMDlDNjAuOTA5LDU5LjU1Myw1OS43NDQsNTkuOTQ5LDU4LjU1OSw2MC4yNzF6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/assets/svg/visions.svg":
/*!************************************!*\
  !*** ./src/assets/svg/visions.svg ***!
  \************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgVisions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#3D68B0"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M72.764 17.236a6.351 6.351 0 00-6.344 6.344 6.353 6.353 0 006.346 6.345 6.352 6.352 0 006.344-6.345 6.353 6.353 0 00-6.346-6.344zm.002 8.689h-.002a2.347 2.347 0 01-2.344-2.345 2.347 2.347 0 012.344-2.344 2.348 2.348 0 012.346 2.344 2.348 2.348 0 01-2.344 2.345z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M85.621 12.058l-.313-.984-.982-.315c-.1-.032-2.484-.782-6.11-.782-4.169 0-10.489.999-16.979 5.795L46.544 27.328c-1.855-1.372-9.051-5.369-19.593 5.172l-1.538 1.538 8.206 6.933a12.602 12.602 0 00-.5 5.267c-1.397 1.4-4.011 4.448-4.166 7.784-.084 1.816.575 3.48 1.907 4.812l6.485 6.485c1.258 1.259 2.82 1.924 4.517 1.924 3.405 0 6.521-2.629 7.963-4.06.577.079 1.154.119 1.727.119h.002c2.092 0 3.948-.524 5.563-1.285l6.023 7.129 1.538-1.538c9.964-9.963 6.94-16.933 5.42-19.234l10.505-13.319c8.522-11.534 5.165-22.534 5.018-22.997zM31.37 33.834c5.956-5.235 9.976-4.636 11.803-3.854l-2.751 2.164c-.541.361-3.07 2.144-5.021 5.095l-4.031-3.405zm10.493 29.409c-.639 0-1.175-.239-1.688-.752l-6.485-6.485c-.538-.538-.767-1.085-.741-1.773.045-1.192.817-2.527 1.661-3.631a48.39 48.39 0 004.935 5.759 47.994 47.994 0 006.091 5.175c-1.14.884-2.548 1.707-3.773 1.707zm21.483-.053l-2.821-3.34c2.083-1.711 3.346-3.508 3.646-3.957l3.199-4.057c.669 1.994.819 5.846-4.024 11.354zm-2.371-9.705l-.114.16c-.036.057-3.709 5.657-9.307 5.657a9.012 9.012 0 01-1.996-.229l-.654-.146c-.223-.147-.446-.3-.669-.455l.797-.798c12.513-12.513 9.948-19.61 9.614-20.378l-3.695 1.529c.018.05 1.513 4.726-6.596 13.755l-1.589-4.167-3.737 1.425 2.51 6.582a46.669 46.669 0 01-3.166-2.89c-1.877-1.878-3.547-3.859-4.92-5.827l-.232-1.136c-1.351-6.622 5.175-10.938 5.448-11.115l12.066-9.485c1.54 3.143 3.699 6.153 6.353 8.807 2.831 2.832 6.047 5.087 9.408 6.639l-9.521 12.072zm12.076-15.309c-3.248-1.347-6.385-3.479-9.135-6.229-2.562-2.564-4.604-5.486-5.96-8.511l5.705-4.484c5.565-4.112 10.986-4.975 14.554-4.975 1.655 0 2.986.185 3.84.347.518 2.73 1.23 10.371-4.629 18.304l-4.375 5.548z"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#E23C52"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M.086 79.554v4c6.785 0 12.305 5.52 12.305 12.305h4c0-8.991-7.315-16.305-16.305-16.305z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M.055 67.872v4c13.257 0 24.042 10.785 24.042 24.043h4c0-15.463-12.58-28.043-28.042-28.043z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 55.678v4c19.982 0 36.238 16.256 36.238 36.237h4c0-22.186-18.05-40.237-40.238-40.237z"
}));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#21B8BF"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M79.43 62.21c-.97-.479-2.2-.06-2.68.9a1.995 1.995 0 00.9 2.68c.28.14.58.21.891.21.76 0 1.45-.42 1.79-1.1.488-.99.089-2.2-.901-2.69zM65.25 80.62c3.37-1.86 6.42-4.24 9.06-7.07.76-.81.71-2.08-.09-2.83-.78-.72-2.11-.68-2.83.101a32.616 32.616 0 01-8.07 6.3l-.1.05c-1.64.9-3.37 1.67-5.13 2.271-.51.17-.92.529-1.15 1.01a1.966 1.966 0 00-.1 1.52 2.01 2.01 0 001.89 1.36c.221 0 .44-.04.65-.11 1.99-.68 3.939-1.54 5.8-2.56.02-.012.049-.032.07-.042zM81.31 56.51a1.998 1.998 0 002.311-1.63c.359-2.069.54-4.189.54-6.31a2 2 0 00-4 0c0 1.88-.16 3.779-.48 5.62-.09.529.03 1.06.34 1.5.298.43.759.73 1.289.82zM48.86 81.15c-1.1.04-1.96.97-1.92 2.069a1.99 1.99 0 002 1.92h.08a1.998 1.998 0 001.92-2.069 2.001 2.001 0 00-2.08-1.92zM50.58 13.63c0-1.09-.87-1.97-1.95-2h-.05c-2.11 0-4.23.18-6.31.54-.53.09-.99.38-1.29.82a1.997 1.997 0 001.97 3.12c1.85-.32 3.75-.48 5.63-.48 1.1 0 2-.9 2-2zM23.6 21.47a36.814 36.814 0 00-7.11 9.14 36.27 36.27 0 00-2.57 5.8c-.35 1.04.21 2.18 1.25 2.54.21.07.43.1.65.1.85 0 1.61-.54 1.89-1.35.61-1.78 1.37-3.51 2.28-5.16 1.67-3.03 3.8-5.77 6.34-8.14.81-.76.85-2.02.1-2.83-.73-.78-2.06-.82-2.83-.1zM32.25 15.46c-.98.49-1.38 1.7-.89 2.68.34.69 1.02 1.11 1.79 1.11.31 0 .61-.07.89-.21.98-.49 1.39-1.7.9-2.68-.48-.96-1.72-1.38-2.69-.9zM14.08 44.85c-1.12-.07-2.04.82-2.08 1.92-.04 1.1.82 2.03 1.92 2.08H14a2.004 2.004 0 001.47-3.36c-.37-.39-.86-.62-1.39-.64zM89.14 33.42l.03.06c.89 2.38 1.58 4.85 2.05 7.36.17.95 1 1.63 1.96 1.63.13 0 .25-.01.37-.03 1.08-.2 1.8-1.25 1.6-2.33-.51-2.74-1.26-5.45-2.239-8.04-.37-1-1.561-1.54-2.57-1.16-.5.18-.9.56-1.12 1.04-.21.47-.24.98-.07 1.47h-.011zM95.39 49.061A1.94 1.94 0 0094 48.43c-1.12-.07-2.03.82-2.061 1.93-.02.529.17 1.04.53 1.43.37.39.86.62 1.4.63.02.01.04.01.069.01 1.08 0 1.96-.85 1.99-1.939a1.945 1.945 0 00-.538-1.43zM56.24 92.04c-.53.09-.98.39-1.28.83-.311.44-.42.97-.32 1.5.18.94 1.01 1.63 1.97 1.63.12 0 .25-.01.37-.03a2.006 2.006 0 001.59-2.34c-.2-1.069-1.26-1.8-2.33-1.59zM72.09 85.64a44.03 44.03 0 01-6.73 3.62 2.01 2.01 0 00-1.069 1.09c-.19.5-.19 1.04.02 1.53.32.74 1.04 1.21 1.84 1.21h.011c.27 0 .529-.05.779-.16a47.597 47.597 0 007.341-3.939 2.01 2.01 0 00.909-1.7 2.04 2.04 0 00-.33-1.07c-.581-.891-1.871-1.171-2.771-.581zM92.319 61.28a2.031 2.031 0 00-2.43 1.04v-.06l-.1.301a42.604 42.604 0 01-3 7.029c-.25.471-.3 1.01-.15 1.521.16.51.5.93.97 1.18a1.99 1.99 0 002.71-.821c1.311-2.439 2.4-5 3.261-7.62 0-.01.01-.02.02-.039V63.8c.061-.21.101-.42.09-.64a1.989 1.989 0 00-1.371-1.88zM81.399 77.46a1.998 1.998 0 001.521 3.299c.58 0 1.14-.25 1.52-.689.71-.84.62-2.11-.22-2.82-.81-.7-2.13-.59-2.821.21zM6.43 28.49c-1-.41-2.2.09-2.61 1.09a1.997 1.997 0 001.85 2.76c.81 0 1.54-.48 1.85-1.23.42-1.02-.07-2.19-1.09-2.62zM47.98 1.96C47.93.86 47-.01 45.89.05c-2.74.12-5.49.49-8.18 1.08-.03 0-.06.01-.08.01l-.04.02a1.978 1.978 0 00-1.48 2.37c.2.91 1.02 1.57 1.95 1.57.15 0 .29-.02.44-.05 2.48-.55 5.02-.89 7.57-1 1.1-.05 1.96-.99 1.91-2.09zM3.23 37.96a2.02 2.02 0 00-2.32 1.62 48.95 48.95 0 00-.71 8.3c0 1.11.89 2 2 2a2 2 0 002-2c0-2.56.22-5.12.65-7.61.19-1.09-.54-2.12-1.62-2.31zM13.83 20.45c1.59-1.98 3.36-3.84 5.28-5.53.83-.73.91-1.99.18-2.82-.7-.8-2.02-.88-2.82-.18a48.926 48.926 0 00-5.76 6.02c-.29.36-.44.78-.44 1.23a2.005 2.005 0 002 2.03c.61 0 1.18-.28 1.56-.75zM55.939 4.67c.98 0 1.811-.69 1.971-1.66A2.002 2.002 0 0056.28.7l-.06-.01c-1.07-.14-2.07.59-2.25 1.64a2.014 2.014 0 001.63 2.32c.11.01.23.02.339.02zM24.98 5.93c-.46.26-.8.68-.95 1.2-.15.51-.09 1.05.17 1.52.35.64 1.02 1.03 1.75 1.03.34 0 .67-.08.96-.25.97-.53 1.32-1.75.79-2.71-.51-.94-1.78-1.31-2.72-.79z"
}));

function SvgVisions(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 96 96"
  }, props), _ref, _ref2, _ref3);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOTYgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk2IDk2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjM0Q2OEIwIiBkPSJNNzIuNzY0LDE3LjIzNmMtMy40OTgsMC02LjM0NCwyLjg0Ni02LjM0NCw2LjM0NGMwLDMuNDk5LDIuODQ3LDYuMzQ1LDYuMzQ2LDYuMzQ1DQoJCQljMy40OTgsMCw2LjM0NC0yLjg0Niw2LjM0NC02LjM0NUM3OS4xMDksMjAuMDgyLDc2LjI2MywxNy4yMzYsNzIuNzY0LDE3LjIzNnogTTcyLjc2NiwyNS45MjVoLTAuMDAyDQoJCQljLTEuMjkyLDAtMi4zNDQtMS4wNTItMi4zNDQtMi4zNDVjMC0xLjI5MiwxLjA1Mi0yLjM0NCwyLjM0NC0yLjM0NGMxLjI5MywwLDIuMzQ2LDEuMDUxLDIuMzQ2LDIuMzQ0DQoJCQlDNzUuMTA5LDI0Ljg3Myw3NC4wNTgsMjUuOTI1LDcyLjc2NiwyNS45MjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMzRDY4QjAiIGQ9Ik04NS42MjEsMTIuMDU4bC0wLjMxMy0wLjk4NGwtMC45ODItMC4zMTVjLTAuMS0wLjAzMi0yLjQ4NC0wLjc4Mi02LjExLTAuNzgyDQoJCQljLTQuMTY5LDAtMTAuNDg5LDAuOTk5LTE2Ljk3OSw1Ljc5NUw0Ni41NDQsMjcuMzI4Yy0xLjg1NS0xLjM3Mi05LjA1MS01LjM2OS0xOS41OTMsNS4xNzJsLTEuNTM4LDEuNTM4bDguMjA2LDYuOTMzDQoJCQljLTAuNDksMS41NzctMC43MjcsMy4zMzMtMC41LDUuMjY3Yy0xLjM5NywxLjQtNC4wMTEsNC40NDgtNC4xNjYsNy43ODRjLTAuMDg0LDEuODE2LDAuNTc1LDMuNDgsMS45MDcsNC44MTJsNi40ODUsNi40ODUNCgkJCWMxLjI1OCwxLjI1OSwyLjgyLDEuOTI0LDQuNTE3LDEuOTI0YzMuNDA1LDAsNi41MjEtMi42MjksNy45NjMtNC4wNmMwLjU3NywwLjA3OSwxLjE1NCwwLjExOSwxLjcyNywwLjExOQ0KCQkJYzAuMDAxLDAsMC4wMDEsMCwwLjAwMiwwYzIuMDkyLDAsMy45NDgtMC41MjQsNS41NjMtMS4yODVsNi4wMjMsNy4xMjlsMS41MzgtMS41MzhjOS45NjQtOS45NjMsNi45NC0xNi45MzMsNS40Mi0xOS4yMzQNCgkJCWwxMC41MDUtMTMuMzE5Qzg5LjEyNSwyMy41MjEsODUuNzY4LDEyLjUyMSw4NS42MjEsMTIuMDU4eiBNMzEuMzcsMzMuODM0YzUuOTU2LTUuMjM1LDkuOTc2LTQuNjM2LDExLjgwMy0zLjg1NGwtMi43NTEsMi4xNjQNCgkJCWMtMC41NDEsMC4zNjEtMy4wNywyLjE0NC01LjAyMSw1LjA5NUwzMS4zNywzMy44MzR6IE00MS44NjMsNjMuMjQzYy0wLjYzOSwwLTEuMTc1LTAuMjM5LTEuNjg4LTAuNzUybC02LjQ4NS02LjQ4NQ0KCQkJYy0wLjUzOC0wLjUzOC0wLjc2Ny0xLjA4NS0wLjc0MS0xLjc3M2MwLjA0NS0xLjE5MiwwLjgxNy0yLjUyNywxLjY2MS0zLjYzMWMxLjQyLDEuOTU4LDMuMDg2LDMuOTEsNC45MzUsNS43NTkNCgkJCWMxLjk2LDEuOTYsNC4wMjQsMy43MDcsNi4wOTEsNS4xNzVDNDQuNDk2LDYyLjQyLDQzLjA4OCw2My4yNDMsNDEuODYzLDYzLjI0M3ogTTYzLjM0Niw2My4xOWwtMi44MjEtMy4zNA0KCQkJYzIuMDgzLTEuNzExLDMuMzQ2LTMuNTA4LDMuNjQ2LTMuOTU3bDMuMTk5LTQuMDU3QzY4LjAzOSw1My44Myw2OC4xODksNTcuNjgyLDYzLjM0Niw2My4xOXogTTYwLjk3NSw1My40ODVsLTAuMTE0LDAuMTYNCgkJCWMtMC4wMzYsMC4wNTctMy43MDksNS42NTctOS4zMDcsNS42NTdjLTAuNjU3LDAtMS4zMjgtMC4wNzctMS45OTYtMC4yMjlsLTAuNjU0LTAuMTQ2Yy0wLjIyMy0wLjE0Ny0wLjQ0Ni0wLjMtMC42NjktMC40NTUNCgkJCWwwLjc5Ny0wLjc5OGMxMi41MTMtMTIuNTEzLDkuOTQ4LTE5LjYxLDkuNjE0LTIwLjM3OGwtMy42OTUsMS41MjljMC4wMTgsMC4wNSwxLjUxMyw0LjcyNi02LjU5NiwxMy43NTVsLTEuNTg5LTQuMTY3DQoJCQlsLTMuNzM3LDEuNDI1bDIuNTEsNi41ODJjLTEuMDcxLTAuODktMi4xMzItMS44NTYtMy4xNjYtMi44OWMtMS44NzctMS44NzgtMy41NDctMy44NTktNC45Mi01LjgyN2wtMC4yMzItMS4xMzYNCgkJCWMtMS4zNTEtNi42MjIsNS4xNzUtMTAuOTM4LDUuNDQ4LTExLjExNWwxMi4wNjYtOS40ODVjMS41NCwzLjE0MywzLjY5OSw2LjE1Myw2LjM1Myw4LjgwN2MyLjgzMSwyLjgzMiw2LjA0Nyw1LjA4Nyw5LjQwOCw2LjYzOQ0KCQkJTDYwLjk3NSw1My40ODV6IE03My4wNTEsMzguMTc2Yy0zLjI0OC0xLjM0Ny02LjM4NS0zLjQ3OS05LjEzNS02LjIyOWMtMi41NjItMi41NjQtNC42MDQtNS40ODYtNS45Ni04LjUxMWw1LjcwNS00LjQ4NA0KCQkJYzUuNTY1LTQuMTEyLDEwLjk4Ni00Ljk3NSwxNC41NTQtNC45NzVjMS42NTUsMCwyLjk4NiwwLjE4NSwzLjg0LDAuMzQ3YzAuNTE4LDIuNzMsMS4yMywxMC4zNzEtNC42MjksMTguMzA0TDczLjA1MSwzOC4xNzZ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRTIzQzUyIiBkPSJNMC4wODYsNzkuNTU0djRjNi43ODUsMCwxMi4zMDUsNS41MiwxMi4zMDUsMTIuMzA1aDRDMTYuMzkxLDg2Ljg2OCw5LjA3Niw3OS41NTQsMC4wODYsNzkuNTU0eiIvPg0KCQk8cGF0aCBmaWxsPSIjRTIzQzUyIiBkPSJNMC4wNTUsNjcuODcydjRjMTMuMjU3LDAsMjQuMDQyLDEwLjc4NSwyNC4wNDIsMjQuMDQzaDRDMjguMDk3LDgwLjQ1MiwxNS41MTcsNjcuODcyLDAuMDU1LDY3Ljg3MnoiLz4NCgkJPHBhdGggZmlsbD0iI0UyM0M1MiIgZD0iTTAsNTUuNjc4djRjMTkuOTgyLDAsMzYuMjM4LDE2LjI1NiwzNi4yMzgsMzYuMjM3aDRDNDAuMjM4LDczLjcyOSwyMi4xODgsNTUuNjc4LDAsNTUuNjc4eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzIxQjhCRiIgZD0iTTc5LjQzLDYyLjIxYy0wLjk3LTAuNDc5LTIuMi0wLjA2LTIuNjgsMC45Yy0wLjI0LDAuNDc5LTAuMjgsMS4wMi0wLjExLDEuNTINCgkJCWMwLjE3LDAuNTEsMC41MywwLjkyLDEuMDEsMS4xNmMwLjI4LDAuMTQsMC41OCwwLjIxLDAuODkxLDAuMjFjMC43NiwwLDEuNDUtMC40MiwxLjc5LTEuMUM4MC44MTksNjMuOTEsODAuNDIsNjIuNyw3OS40Myw2Mi4yMXoiDQoJCQkvPg0KCQk8cGF0aCBmaWxsPSIjMjFCOEJGIiBkPSJNNjUuMjUsODAuNjJjMy4zNy0xLjg2LDYuNDItNC4yNCw5LjA2LTcuMDdjMC43Ni0wLjgxLDAuNzEtMi4wOC0wLjA5LTIuODMNCgkJCWMtMC43OC0wLjcyLTIuMTEtMC42OC0yLjgzLDAuMTAxYy0yLjM1LDIuNTItNS4wNyw0LjY0LTguMDcsNi4zbC0wLjEsMC4wNWMtMS42NCwwLjktMy4zNywxLjY3LTUuMTMsMi4yNzENCgkJCWMtMC41MSwwLjE3LTAuOTIsMC41MjktMS4xNSwxLjAxYy0wLjIzOSwwLjQ3OS0wLjI3LDEuMDItMC4xLDEuNTJjMC4yOCwwLjgxMSwxLjA0LDEuMzYsMS44OSwxLjM2YzAuMjIxLDAsMC40NC0wLjA0LDAuNjUtMC4xMQ0KCQkJYzEuOTktMC42OCwzLjkzOS0xLjU0LDUuOC0yLjU2QzY1LjIsODAuNjUsNjUuMjI5LDgwLjYzLDY1LjI1LDgwLjYyeiIvPg0KCQk8cGF0aCBmaWxsPSIjMjFCOEJGIiBkPSJNODEuMzEsNTYuNTFjMC4xMSwwLjAyMSwwLjIyMSwwLjAzLDAuMzQsMC4wM2MwLjk4LDAsMS44MDEtMC43LDEuOTcxLTEuNjYNCgkJCWMwLjM1OS0yLjA2OSwwLjU0LTQuMTg5LDAuNTQtNi4zMWMwLTEuMS0wLjg5MS0yLTItMmMtMS4xMDEsMC0yLDAuOS0yLDJjMCwxLjg4LTAuMTYsMy43NzktMC40OCw1LjYyDQoJCQljLTAuMDksMC41MjksMC4wMywxLjA2LDAuMzQsMS41QzgwLjMxOSw1Ni4xMiw4MC43OCw1Ni40Miw4MS4zMSw1Ni41MXoiLz4NCgkJPHBhdGggZmlsbD0iIzIxQjhCRiIgZD0iTTQ4Ljg2LDgxLjE1Yy0xLjEsMC4wNC0xLjk2LDAuOTctMS45MiwyLjA2OWMwLjA0LDEuMDgsMC45MiwxLjkyLDIsMS45MmMwLjAyLDAsMC4wNSwwLDAuMDgsMA0KCQkJYzEuMTAxLTAuMDQsMS45Ni0wLjk3LDEuOTItMi4wNjlDNTAuODksODEuOTYsNDkuOTcsODEuMTEsNDguODYsODEuMTV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMyMUI4QkYiIGQ9Ik01MC41OCwxMy42M2MwLTEuMDktMC44Ny0xLjk3LTEuOTUtMmgtMC4wNWMtMi4xMSwwLTQuMjMsMC4xOC02LjMxLDAuNTRjLTAuNTMsMC4wOS0wLjk5LDAuMzgtMS4yOSwwLjgyDQoJCQljLTAuMzEsMC40My0wLjQzLDAuOTctMC4zNCwxLjQ5YzAuMTcsMC45NiwwLjk5LDEuNjYsMS45NywxLjY2YzAuMTEsMCwwLjIzLTAuMDEsMC4zNC0wLjAzYzEuODUtMC4zMiwzLjc1LTAuNDgsNS42My0wLjQ4DQoJCQlDNDkuNjgsMTUuNjMsNTAuNTgsMTQuNzMsNTAuNTgsMTMuNjN6Ii8+DQoJCTxwYXRoIGZpbGw9IiMyMUI4QkYiIGQ9Ik0yMy42LDIxLjQ3Yy0yLjg1LDIuNjctNS4yNCw1Ljc0LTcuMTEsOS4xNGMtMS4wMiwxLjg0LTEuODgsMy43OS0yLjU3LDUuOA0KCQkJYy0wLjM1LDEuMDQsMC4yMSwyLjE4LDEuMjUsMi41NGMwLjIxLDAuMDcsMC40MywwLjEsMC42NSwwLjFjMC44NSwwLDEuNjEtMC41NCwxLjg5LTEuMzVjMC42MS0xLjc4LDEuMzctMy41MSwyLjI4LTUuMTYNCgkJCWMxLjY3LTMuMDMsMy44LTUuNzcsNi4zNC04LjE0YzAuODEtMC43NiwwLjg1LTIuMDIsMC4xLTIuODNDMjUuNywyMC43OSwyNC4zNywyMC43NSwyMy42LDIxLjQ3eiIvPg0KCQk8cGF0aCBmaWxsPSIjMjFCOEJGIiBkPSJNMzIuMjUsMTUuNDZjLTAuOTgsMC40OS0xLjM4LDEuNy0wLjg5LDIuNjhjMC4zNCwwLjY5LDEuMDIsMS4xMSwxLjc5LDEuMTFjMC4zMSwwLDAuNjEtMC4wNywwLjg5LTAuMjENCgkJCWMwLjk4LTAuNDksMS4zOS0xLjcsMC45LTIuNjhDMzQuNDYsMTUuNCwzMy4yMiwxNC45OCwzMi4yNSwxNS40NnoiLz4NCgkJPHBhdGggZmlsbD0iIzIxQjhCRiIgZD0iTTE0LjA4LDQ0Ljg1Yy0xLjEyLTAuMDctMi4wNCwwLjgyLTIuMDgsMS45MmMtMC4wNCwxLjEsMC44MiwyLjAzLDEuOTIsMi4wOGMwLjAzLDAsMC4wNSwwLDAuMDgsMA0KCQkJYzEuMDgsMCwxLjk1LTAuODUsMi0xLjkyYzAuMDItMC41NC0wLjE3LTEuMDUtMC41My0xLjQ0QzE1LjEsNDUuMSwxNC42MSw0NC44NywxNC4wOCw0NC44NXoiLz4NCgkJPHBhdGggZmlsbD0iIzIxQjhCRiIgZD0iTTg5LjE0LDMzLjQybDAuMDMsMC4wNmMwLjg5LDIuMzgsMS41OCw0Ljg1LDIuMDUsNy4zNmMwLjE3LDAuOTUsMSwxLjYzLDEuOTYsMS42Mw0KCQkJYzAuMTMsMCwwLjI1LTAuMDEsMC4zNy0wLjAzYzEuMDgtMC4yLDEuOC0xLjI1LDEuNi0yLjMzYy0wLjUxLTIuNzQtMS4yNi01LjQ1LTIuMjM5LTguMDRjLTAuMzctMS0xLjU2MS0xLjU0LTIuNTctMS4xNg0KCQkJYy0wLjUsMC4xOC0wLjksMC41Ni0xLjEyLDEuMDRjLTAuMjEsMC40Ny0wLjI0LDAuOTgtMC4wNywxLjQ3SDg5LjE0eiIvPg0KCQk8cGF0aCBmaWxsPSIjMjFCOEJGIiBkPSJNOTUuMzksNDkuMDYxQzk1LjAzLDQ4LjY3LDk0LjUzLDQ4LjQ0LDk0LDQ4LjQzYy0xLjEyLTAuMDctMi4wMywwLjgyLTIuMDYxLDEuOTMNCgkJCWMtMC4wMiwwLjUyOSwwLjE3LDEuMDQsMC41MywxLjQzYzAuMzcsMC4zOSwwLjg2LDAuNjIsMS40LDAuNjNjMC4wMiwwLjAxLDAuMDQsMC4wMSwwLjA2OSwwLjAxYzEuMDgsMCwxLjk2LTAuODUsMS45OS0xLjkzOQ0KCQkJQzk1Ljk1LDQ5Ljk2LDk1Ljc2LDQ5LjQ1LDk1LjM5LDQ5LjA2MXoiLz4NCgkJPHBhdGggZmlsbD0iIzIxQjhCRiIgZD0iTTU2LjI0LDkyLjA0Yy0wLjUzLDAuMDktMC45OCwwLjM5LTEuMjgsMC44M2MtMC4zMTEsMC40NC0wLjQyLDAuOTctMC4zMiwxLjUNCgkJCWMwLjE4LDAuOTQsMS4wMSwxLjYzLDEuOTcsMS42M2MwLjEyLDAsMC4yNS0wLjAxLDAuMzctMC4wM2MxLjA4LTAuMjEsMS44MDEtMS4yNiwxLjU5LTIuMzRDNTguMzcsOTIuNTYxLDU3LjMxLDkxLjgzLDU2LjI0LDkyLjA0DQoJCQl6Ii8+DQoJCTxwYXRoIGZpbGw9IiMyMUI4QkYiIGQ9Ik03Mi4wOSw4NS42NGMtMi4xMywxLjQtNC4zOSwyLjYxLTYuNzMsMy42MmMtMC40ODksMC4yMS0wLjg2OSwwLjYwMS0xLjA2OSwxLjA5DQoJCQljLTAuMTksMC41LTAuMTksMS4wNCwwLjAyLDEuNTNjMC4zMiwwLjc0LDEuMDQsMS4yMSwxLjg0LDEuMjFoMC4wMTFjMC4yNywwLDAuNTI5LTAuMDUsMC43NzktMC4xNg0KCQkJYzIuNTQtMS4wOSw1LjAxMS0yLjQwOSw3LjM0MS0zLjkzOWMwLjU3OS0wLjM4LDAuOTA5LTEuMDEsMC45MDktMS43Yy0wLjAxLTAuMzgtMC4xMi0wLjc1LTAuMzMtMS4wNw0KCQkJQzc0LjI4LDg1LjMzLDcyLjk5LDg1LjA1LDcyLjA5LDg1LjY0eiIvPg0KCQk8cGF0aCBmaWxsPSIjMjFCOEJGIiBkPSJNOTIuMzE5LDYxLjI4Yy0wLjk0OS0wLjMxMS0yLjAxLDAuMTYtMi40MywxLjA0VjYyLjI2bC0wLjEsMC4zMDFjLTAuNzgsMi40MDktMS43OSw0Ljc3OS0zLDcuMDI5DQoJCQljLTAuMjUsMC40NzEtMC4zLDEuMDEtMC4xNSwxLjUyMWMwLjE2LDAuNTEsMC41LDAuOTMsMC45NywxLjE4YzAuMjksMC4xNiwwLjYyLDAuMjQsMC45NSwwLjI0YzAuNzMsMCwxLjQxLTAuNCwxLjc2LTEuMDYxDQoJCQljMS4zMTEtMi40MzksMi40LTUsMy4yNjEtNy42MmMwLTAuMDEsMC4wMS0wLjAyLDAuMDItMC4wMzlWNjMuOGMwLjA2MS0wLjIxLDAuMTAxLTAuNDIsMC4wOS0wLjY0DQoJCQlDOTMuNjg5LDYyLjMsOTMuMTMsNjEuNTUsOTIuMzE5LDYxLjI4eiIvPg0KCQk8cGF0aCBmaWxsPSIjMjFCOEJGIiBkPSJNODEuMzk5LDc3LjQ2Yy0wLjcyLDAuODQtMC42MTksMi4xMDEsMC4yMjEsMi44MmMwLjM1OSwwLjMxLDAuODE5LDAuNDc5LDEuMywwLjQ3OQ0KCQkJYzAuNTgsMCwxLjE0LTAuMjUsMS41Mi0wLjY4OWMwLjcxLTAuODQsMC42Mi0yLjExLTAuMjItMi44MkM4My40MSw3Ni41NSw4Mi4wOSw3Ni42Niw4MS4zOTksNzcuNDZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMyMUI4QkYiIGQ9Ik02LjQzLDI4LjQ5Yy0xLTAuNDEtMi4yLDAuMDktMi42MSwxLjA5QzMuNCwzMC42LDMuODgsMzEuNzcsNC45LDMyLjE5YzAuMjUsMC4xLDAuNSwwLjE1LDAuNzcsMC4xNQ0KCQkJYzAuODEsMCwxLjU0LTAuNDgsMS44NS0xLjIzQzcuOTQsMzAuMDksNy40NSwyOC45Miw2LjQzLDI4LjQ5eiIvPg0KCQk8cGF0aCBmaWxsPSIjMjFCOEJGIiBkPSJNNDcuOTgsMS45NmMtMC4wNS0xLjEtMC45OC0xLjk3LTIuMDktMS45MWMtMi43NCwwLjEyLTUuNDksMC40OS04LjE4LDEuMDhjLTAuMDMsMC0wLjA2LDAuMDEtMC4wOCwwLjAxDQoJCQlsLTAuMDQsMC4wMmMtMC45LDAuMjEtMS41MiwxLTEuNTMsMS45MmMwLDAuMTUsMC4wMiwwLjMsMC4wNSwwLjQ1YzAuMiwwLjkxLDEuMDIsMS41NywxLjk1LDEuNTdjMC4xNSwwLDAuMjktMC4wMiwwLjQ0LTAuMDUNCgkJCWMyLjQ4LTAuNTUsNS4wMi0wLjg5LDcuNTctMUM0Ny4xNyw0LDQ4LjAzLDMuMDYsNDcuOTgsMS45NnoiLz4NCgkJPHBhdGggZmlsbD0iIzIxQjhCRiIgZD0iTTMuMjMsMzcuOTZjLTEuMDgtMC4xOS0yLjEzLDAuNTUtMi4zMiwxLjYyQzAuNDQsNDIuMywwLjIsNDUuMSwwLjIsNDcuODhjMCwxLjExLDAuODksMiwyLDINCgkJCWMxLjEsMCwyLTAuODksMi0yYzAtMi41NiwwLjIyLTUuMTIsMC42NS03LjYxQzUuMDQsMzkuMTgsNC4zMSwzOC4xNSwzLjIzLDM3Ljk2eiIvPg0KCQk8cGF0aCBmaWxsPSIjMjFCOEJGIiBkPSJNMTMuODMsMjAuNDVjMS41OS0xLjk4LDMuMzYtMy44NCw1LjI4LTUuNTNjMC44My0wLjczLDAuOTEtMS45OSwwLjE4LTIuODJjLTAuNy0wLjgtMi4wMi0wLjg4LTIuODItMC4xOA0KCQkJYy0yLjA4LDEuODMtNC4wMiwzLjg2LTUuNzYsNi4wMmMtMC4yOSwwLjM2LTAuNDQsMC43OC0wLjQ0LDEuMjNjLTAuMDEsMC42MiwwLjI3LDEuMiwwLjc1LDEuNTljMC4zNSwwLjI4LDAuNzksMC40NCwxLjI1LDAuNDQNCgkJCUMxMi44OCwyMS4yLDEzLjQ1LDIwLjkyLDEzLjgzLDIwLjQ1eiIvPg0KCQk8cGF0aCBmaWxsPSIjMjFCOEJGIiBkPSJNNTUuOTM5LDQuNjdjMC45OCwwLDEuODExLTAuNjksMS45NzEtMS42NmMwLjE4OS0xLjA4LTAuNTQtMi4xMi0xLjYzLTIuMzFMNTYuMjIsMC42OQ0KCQkJYy0xLjA3LTAuMTQtMi4wNywwLjU5LTIuMjUsMS42NGMtMC4xODksMS4wOSwwLjU1LDIuMTMsMS42MywyLjMyQzU1LjcxLDQuNjYsNTUuODMsNC42Nyw1NS45MzksNC42N3oiLz4NCgkJPHBhdGggZmlsbD0iIzIxQjhCRiIgZD0iTTI0Ljk4LDUuOTNjLTAuNDYsMC4yNi0wLjgsMC42OC0wLjk1LDEuMmMtMC4xNSwwLjUxLTAuMDksMS4wNSwwLjE3LDEuNTJjMC4zNSwwLjY0LDEuMDIsMS4wMywxLjc1LDEuMDMNCgkJCWMwLjM0LDAsMC42Ny0wLjA4LDAuOTYtMC4yNWMwLjk3LTAuNTMsMS4zMi0xLjc1LDAuNzktMi43MUMyNy4xOSw1Ljc4LDI1LjkyLDUuNDEsMjQuOTgsNS45M3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/components/caseCard.js":
/*!************************************!*\
  !*** ./src/components/caseCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svg_arrow_right_blue_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg/arrow-right--blue.svg */ "./src/assets/svg/arrow-right--blue.svg");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.module.css */ "./src/components/components.module.css");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony default export */ __webpack_exports__["default"] = (props=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.caseCard},props.imagePath&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.caseCardImage},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_1___default.a,{fluid:props.imagePath})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.caseCardTitle},props.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.caseCardSubtitle},props.subtitle),!!props.linkTo&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{className:_components_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.caseCardLink,to:props.linkTo},"LEARN MORE",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_assets_svg_arrow_right_blue_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"],null)));});

/***/ }),

/***/ "./src/components/centerTitle.js":
/*!***************************************!*\
  !*** ./src/components/centerTitle.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.module.css */ "./src/components/components.module.css");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony default export */ __webpack_exports__["default"] = (props=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.centerTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,props.children),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.centerTitleDivider}));});

/***/ }),

/***/ "./src/components/components.module.css":
/*!**********************************************!*\
  !*** ./src/components/components.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"unstyledButton": "components-module--unstyledButton--2HZKx",
	"header": "components-module--header--aDEEh",
	"headerLogo": "components-module--headerLogo--2-7oJ",
	"headerLinks": "components-module--headerLinks--2S2cu",
	"headerLink": "components-module--headerLink--3dD3f",
	"headerHamburger": "components-module--headerHamburger--3DPiB",
	"footer": "components-module--footer--1j9Wt",
	"footerSocial": "components-module--footerSocial--3Tr9d",
	"footerSocialLink": "components-module--footerSocialLink--w4d2_",
	"centerTitle": "components-module--centerTitle--2yDHa",
	"centerTitleDivider": "components-module--centerTitleDivider--2LO_R",
	"caseCard": "components-module--caseCard--36bb1",
	"caseCardTitle": "components-module--caseCardTitle--ct9SJ",
	"caseCardSubtitle": "components-module--caseCardSubtitle--3uwb7",
	"caseCardLink": "components-module--caseCardLink--3zCxD",
	"caseCardImage": "components-module--caseCardImage--1v2rM",
	"feature": "components-module--feature--2WLU2",
	"featureHeader": "components-module--featureHeader--kX3pk",
	"featureIcon": "components-module--featureIcon--2spDS",
	"featureTitles": "components-module--featureTitles--3G3HL",
	"featureTitle": "components-module--featureTitle--2qmdr",
	"featureSubtitle": "components-module--featureSubtitle--AUEv4",
	"featureDescription": "components-module--featureDescription--3uIO8",
	"leadForm": "components-module--leadForm--3VDPF",
	"leadFormInput": "components-module--leadFormInput--uNSk2",
	"errorInput": "components-module--errorInput--3uJbB components-module--leadFormInput--uNSk2",
	"inputError": "components-module--inputError--1mDQm",
	"leadFormSubmit": "components-module--leadFormSubmit--3zbaw",
	"menu": "components-module--menu--rpvbO",
	"menuLinks": "components-module--menuLinks--2OlAS",
	"menuLink": "components-module--menuLink--2M4S4",
	"menuLinkActive": "components-module--menuLinkActive--3SBpw components-module--menuLink--2M4S4",
	"menuSocial": "components-module--menuSocial--1UyZM",
	"menuSocialLink": "components-module--menuSocialLink--1rdFP",
	"menuCloseButton": "components-module--menuCloseButton--38gJJ components-module--unstyledButton--2HZKx"
};

/***/ }),

/***/ "./src/components/feature.js":
/*!***********************************!*\
  !*** ./src/components/feature.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.module.css */ "./src/components/components.module.css");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony default export */ __webpack_exports__["default"] = (props=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.feature},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.featureHeader},!!props.svgPath&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.featureIcon,src:props.svgPath}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.featureTitles},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.featureTitle},props.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.featureSubtitle},props.subtitle))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.featureDescription},props.paragraph));});

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_page_data_sq_d_716385884_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/716385884.json */ "./public/page-data/sq/d/716385884.json");
var _public_page_data_sq_d_716385884_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/page-data/sq/d/716385884.json */ "./public/page-data/sq/d/716385884.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _assets_svg_behance_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg/behance.svg */ "./src/assets/svg/behance.svg");
/* harmony import */ var _assets_svg_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/svg/linkedin.svg */ "./src/assets/svg/linkedin.svg");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components.module.css */ "./src/components/components.module.css");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_5__);
const currentYear=new Date().getFullYear();/* harmony default export */ __webpack_exports__["default"] = (props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"],{query:"716385884",render:data=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footerCopyright},`© ${data.site.siteMetadata.title} ${currentYear}`),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footerSocial},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:data.site.siteMetadata.linkedIn,className:_components_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footerSocialLink},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_svg_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:data.site.siteMetadata.behance,className:_components_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footerSocialLink},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_svg_behance_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"],null)))),data:_public_page_data_sq_d_716385884_json__WEBPACK_IMPORTED_MODULE_0__}));

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_svg_hamburger_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg/hamburger.svg */ "./src/assets/svg/hamburger.svg");
/* harmony import */ var _assets_svg_neptune_studios_white_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg/neptune-studios--white.svg */ "./src/assets/svg/neptune-studios--white.svg");
/* harmony import */ var _context_MenuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/MenuContext */ "./src/context/MenuContext.js");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useMedia */ "./src/hooks/useMedia.js");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.module.css */ "./src/components/components.module.css");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony default export */ __webpack_exports__["default"] = (props=>{const{setIsOpen}=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MenuContext__WEBPACK_IMPORTED_MODULE_4__["default"]);const isMobile=Object(_hooks_useMedia__WEBPACK_IMPORTED_MODULE_5__["default"])('(max-width: 480px)');const getActiveBorder=pathName=>{if(props.currentPath===pathName){return{borderBottom:'3px solid #fff'};}else return{};};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.header},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_svg_neptune_studios_white_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"],{className:_components_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerLogo}),isMobile?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.unstyledButton,onClick:()=>setIsOpen(true)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_svg_hamburger_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"],{className:_components_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerHamburger})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerLinks},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{to:"/",className:_components_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerLink,style:getActiveBorder('/')},"Main"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{to:"/work",className:_components_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerLink,style:getActiveBorder('/work')},"Work"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{to:"/about",className:_components_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerLink,style:getActiveBorder('/about')},"About"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{to:"/contact",className:_components_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerLink,style:getActiveBorder('/contact')},"Contact")));});

/***/ }),

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_page_data_sq_d_1545480084_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1545480084.json */ "./public/page-data/sq/d/1545480084.json");
var _public_page_data_sq_d_1545480084_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/page-data/sq/d/1545480084.json */ "./public/page-data/sq/d/1545480084.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/pages.module.css */ "./src/pages/pages.module.css");
/* harmony import */ var _pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony default export */ __webpack_exports__["default"] = (props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"],{query:"1545480084",render:data=>{const content=data.allContentfulHero.edges.find(edge=>edge.node.contentfulid===`${props.for}:hero`).node;if(content){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:props.heroStyles},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heroText},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heroTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle},content.subtitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,content.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heroDescription,dangerouslySetInnerHTML:{__html:content.description.childContentfulRichText.html}})),props.heroImage);}},data:_public_page_data_sq_d_1545480084_json__WEBPACK_IMPORTED_MODULE_0__}));

/***/ }),

/***/ "./src/components/imageAndText.js":
/*!****************************************!*\
  !*** ./src/components/imageAndText.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.module.css */ "./src/components/components.module.css");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.module.css */ "./src/global.module.css");
/* harmony import */ var _global_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony default export */ __webpack_exports__["default"] = (props=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageAndText},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textSide},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title},props.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description},props.description.description),!!props.linkTo&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:_global_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,href:props.linkTo},`Go to ${props.title}`)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageSide},!!props.imagePath&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_1___default.a,{fluid:props.imagePath})));});

/***/ }),

/***/ "./src/components/leadForm.js":
/*!************************************!*\
  !*** ./src/components/leadForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.module.css */ "./src/components/components.module.css");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony default export */ __webpack_exports__["default"] = (props=>{const{register,handleSubmit,errors}=Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();const onSubmit=data=>console.log(data);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.leadForm,onSubmit:handleSubmit(onSubmit)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:errors.name?_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.errorInput:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.leadFormInput,name:"name",placeholder:"Name (Required)",ref:register({required:true})}),errors.name&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputError},"Please, enter your name."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:errors.email?_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.errorInput:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.leadFormInput,name:"email",placeholder:"Email (Required)",ref:register({required:true})}),errors.email&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputError},"Please, double check your email address. Unfortunately this input field isn\u2019t THAT smart."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.leadFormInput,name:"subject",placeholder:"Subject",ref:register}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.leadFormInput,name:"subject",placeholder:"Your inquiry",rows:"6",ref:register}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:_components_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.leadFormSubmit,type:"submit"},"Send message"));});

/***/ }),

/***/ "./src/context/MenuContext.js":
/*!************************************!*\
  !*** ./src/context/MenuContext.js ***!
  \************************************/
/*! exports provided: MenuProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProvider", function() { return MenuProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const defaultState={isOpen:false,setIsOpen:()=>{}};const MenuContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultState);const MenuProvider=props=>{const{0:isOpen,1:setIsOpen}=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuContext.Provider,{value:{isOpen,setIsOpen}},props.children);};/* harmony default export */ __webpack_exports__["default"] = (MenuContext);

/***/ }),

/***/ "./src/global.module.css":
/*!*******************************!*\
  !*** ./src/global.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"heroText": "global-module--heroText--oWkca"
};

/***/ }),

/***/ "./src/hooks/useMedia.js":
/*!*******************************!*\
  !*** ./src/hooks/useMedia.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
const useMedia=query=>{const{0:matches,1:setMatches}=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(window.matchMedia(query),'matches'));Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{const media=window.matchMedia(query);if(media.matches!==matches)setMatches(media.matches);const listener=()=>setMatches(media.matches);media.addListener(listener);return()=>media.removeListener(listener);},[matches,query]);return matches;};/* harmony default export */ __webpack_exports__["default"] = (useMedia);

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = (()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"404 Not Found"));

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_png_about_hero_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/png/about-hero.png */ "./src/assets/png/about-hero.png");
/* harmony import */ var _assets_png_about_hero_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_png_about_hero_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_svg_curriculum_vitae_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg/curriculum-vitae.svg */ "./src/assets/svg/curriculum-vitae.svg");
/* harmony import */ var _assets_svg_path_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg/path.svg */ "./src/assets/svg/path.svg");
/* harmony import */ var _assets_svg_title_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/svg/title.svg */ "./src/assets/svg/title.svg");
/* harmony import */ var _assets_svg_visions_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/svg/visions.svg */ "./src/assets/svg/visions.svg");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/feature */ "./src/components/feature.js");
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages.module.css */ "./src/pages/pages.module.css");
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_pages_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony default export */ __webpack_exports__["default"] = (({data,...props})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"],{currentPath:props.location.pathname}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_6__["default"],{for:"about",heroStyles:_pages_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.aboutHero,heroImage:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.aboutHeroImage,src:_assets_png_about_hero_png__WEBPACK_IMPORTED_MODULE_1___default.a,alt:"Pyry Nousiainen"})}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.content},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.aboutFeatures},data.tripleFeature.feature.map((feature,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_9__["default"],{key:`${feature.title}:${index}`,svgPath:feature.svgImage.file.url,title:feature.title,subtitle:feature.subtitle,paragraph:feature.description.description}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.aboutCV},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_svg_curriculum_vitae_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"],{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.aboutCVIcon}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.aboutCVTitle},"Download Curriculum Vitae",' ',/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://www.youtube.com/watch?v=oHg5SJYRHA0"},"HERE"),"."))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"],null)));const query="3325514250";

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_png_contact_hero_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/png/contact-hero.png */ "./src/assets/png/contact-hero.png");
/* harmony import */ var _assets_png_contact_hero_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_png_contact_hero_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_centerTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/centerTitle */ "./src/components/centerTitle.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_leadForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/leadForm */ "./src/components/leadForm.js");
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages.module.css */ "./src/pages/pages.module.css");
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pages_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony default export */ __webpack_exports__["default"] = (({data,...props})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"],{currentPath:props.location.pathname}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_3__["default"],{for:"contact",heroStyles:_pages_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contactHero,heroImage:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contactHeroImage,src:_assets_png_contact_hero_png__WEBPACK_IMPORTED_MODULE_1___default.a,alt:"Contact Neptune Studios"})}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.content},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_centerTitle__WEBPACK_IMPORTED_MODULE_2__["default"],null,"How to reach",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Neptune Studios?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contactForm},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_leadForm__WEBPACK_IMPORTED_MODULE_6__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contactFormDescription},"When having a brilliant idea circling around or maybe there is other inquiry, please send a message and we start from there!"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"],null)));const query="4081498453";

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_png_diver_hero_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/png/diver-hero.png */ "./src/assets/png/diver-hero.png");
/* harmony import */ var _assets_png_diver_hero_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_png_diver_hero_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_caseCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/caseCard */ "./src/components/caseCard.js");
/* harmony import */ var _components_centerTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/centerTitle */ "./src/components/centerTitle.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.module.css */ "./src/pages/pages.module.css");
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_pages_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony default export */ __webpack_exports__["default"] = (({data,...props})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"],{currentPath:props.location.pathname}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_5__["default"],{for:"main",heroStyles:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHero,heroImage:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHeroImage,src:_assets_png_diver_hero_png__WEBPACK_IMPORTED_MODULE_2___default.a,alt:"Illustration of a diver"})}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_centerTitle__WEBPACK_IMPORTED_MODULE_4__["default"],null,"Neptune Studios ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null)," can help you with:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHelp},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHelpPara},"The goal is to help clients achieve the best solution with a design related problem. Functionality and practicality does not have to mean \u201Cdull\u201D or \u201CMy nephew could\u2019ve done it!\u201D. On the right side is presented part of the skill set I\u2019ve worked with."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.divider}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHelpItems},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHelpItem},"User interface design"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHelpItem},"User experience design"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHelpItem},"Workshops"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHelpItem},"User testing"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHelpItem},"Prototypes"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainHelpItem},"Visual design")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainCases},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.fullWidthGrey}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Have a peek"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.largePara},"Some of the selected works from different creative fields."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainCaseCards},lodash_filter__WEBPACK_IMPORTED_MODULE_0___default()(data.allContentfulCase.edges.reverse(),edge=>edge.node.contentfulid!=='case:various').map((edge,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_caseCard__WEBPACK_IMPORTED_MODULE_3__["default"],{key:`${edge.node.title}:${index}`,title:edge.node.title,subtitle:edge.node.subtitle,linkTo:edge.node.URL,imagePath:edge.node.image&&edge.node.image.fluid}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"],null)));const query="134048920";

/***/ }),

/***/ "./src/pages/pages.module.css":
/*!************************************!*\
  !*** ./src/pages/pages.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"page": "pages-module--page--2w-na",
	"hero": "pages-module--hero--jzr91",
	"heroText": "pages-module--heroText--1Gzd-",
	"heroTitle": "pages-module--heroTitle--3DtFF",
	"heroDescription": "pages-module--heroDescription--1J_7h",
	"subtitle": "pages-module--subtitle--2avCJ",
	"heroImage": "pages-module--heroImage--3VNzO",
	"content": "pages-module--content--45sNd",
	"largePara": "pages-module--largePara--2InUP",
	"divider": "pages-module--divider--2Bl8J",
	"fullWidthGrey": "pages-module--fullWidthGrey--1CA_o",
	"mainHero": "pages-module--mainHero---V-Qi pages-module--hero--jzr91",
	"mainHeroImage": "pages-module--mainHeroImage--1Mtt7 pages-module--heroImage--3VNzO",
	"mainHelp": "pages-module--mainHelp--1wENW",
	"mainHelpPara": "pages-module--mainHelpPara--gm9ow pages-module--largePara--2InUP",
	"mainHelpItems": "pages-module--mainHelpItems--1y6O4",
	"mainHelpItem": "pages-module--mainHelpItem--3LwKL",
	"mainCases": "pages-module--mainCases--3TwB9 pages-module--fullWidthGrey--1CA_o",
	"mainCaseCards": "pages-module--mainCaseCards--27j8X",
	"workHero": "pages-module--workHero--x48ZK pages-module--hero--jzr91",
	"workHeroImage": "pages-module--workHeroImage--2VGz3 pages-module--heroImage--3VNzO",
	"aboutHero": "pages-module--aboutHero--3cIBG pages-module--hero--jzr91",
	"aboutHeroImage": "pages-module--aboutHeroImage--2dNvu pages-module--heroImage--3VNzO",
	"aboutFeatures": "pages-module--aboutFeatures--25Tjd",
	"aboutCV": "pages-module--aboutCV--nWtCX pages-module--fullWidthGrey--1CA_o",
	"aboutCVIcon": "pages-module--aboutCVIcon--HRi3p",
	"aboutCVTitle": "pages-module--aboutCVTitle--3L14v pages-module--largePara--2InUP",
	"contactHero": "pages-module--contactHero--1aa7r pages-module--hero--jzr91",
	"contactHeroImage": "pages-module--contactHeroImage--3DPob pages-module--heroImage--3VNzO",
	"contactForm": "pages-module--contactForm--24CJf",
	"contactFormDescription": "pages-module--contactFormDescription--31nms pages-module--largePara--2InUP"
};

/***/ }),

/***/ "./src/pages/work.js":
/*!***************************!*\
  !*** ./src/pages/work.js ***!
  \***************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_png_case_hero_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/png/case-hero.png */ "./src/assets/png/case-hero.png");
/* harmony import */ var _assets_png_case_hero_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_png_case_hero_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_imageAndText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/imageAndText */ "./src/components/imageAndText.js");
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages.module.css */ "./src/pages/pages.module.css");
/* harmony import */ var _pages_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony default export */ __webpack_exports__["default"] = (({data,...props})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"],{currentPath:props.location.pathname}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_2__["default"],{for:"work",heroStyles:_pages_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.workHero,heroImage:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.workHeroImage,src:_assets_png_case_hero_png__WEBPACK_IMPORTED_MODULE_1___default.a,alt:"Phone with V\xE4ppi application"})}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_pages_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.workCases},data.allContentfulCase.edges.reverse().map(edge=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_imageAndText__WEBPACK_IMPORTED_MODULE_5__["default"],{key:edge.node.contentfulid,title:edge.node.title,description:edge.node.description,linkTo:edge.node.URL});})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"],null)));const query="1802506552";

/***/ }),

/***/ "@reach/router":
/*!****************************************************************************************************!*\
  !*** external "/Users/joniramo_houston/Sites/neptune-studios/node_modules/@reach/router/index.js" ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!**********************************************************************************************!*\
  !*** external "/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/lodash.js" ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "lodash/filter":
/*!**********************************************************************************************!*\
  !*** external "/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/filter.js" ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_filter__;

/***/ }),

/***/ "lodash/get":
/*!*******************************************************************************************!*\
  !*** external "/Users/joniramo_houston/Sites/neptune-studios/node_modules/lodash/get.js" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_get__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map