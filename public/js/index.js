/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\dev\\arkscension_back_end\\resources\\js\\index.js: Unexpected token (7:16)\n\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[32m'./index.html'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 7 | \u001b[39m\u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mApp\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'app'\u001b[39m))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Parser.raise (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:7017:17)\n    at Parser.unexpected (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:8395:16)\n    at Parser.parseExprAtom (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9673:20)\n    at Parser.parseExprSubscripts (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9259:23)\n    at Parser.parseMaybeUnary (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9239:21)\n    at Parser.parseExprOps (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9109:23)\n    at Parser.parseMaybeConditional (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9082:23)\n    at Parser.parseMaybeAssign (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9037:21)\n    at Parser.parseExprListItem (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:10327:18)\n    at Parser.parseCallExpressionArguments (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9440:22)\n    at Parser.parseSubscript (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9346:31)\n    at Parser.parseSubscripts (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9276:19)\n    at Parser.parseExprSubscripts (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9265:17)\n    at Parser.parseMaybeUnary (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9239:21)\n    at Parser.parseExprOps (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9109:23)\n    at Parser.parseMaybeConditional (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9082:23)\n    at Parser.parseMaybeAssign (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:9037:21)\n    at Parser.parseExpression (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:8989:23)\n    at Parser.parseStatementContent (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:10819:23)\n    at Parser.parseStatement (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:11264:25)\n    at Parser.parseBlockBody (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:11251:10)\n    at Parser.parseTopLevel (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:10621:10)\n    at Parser.parse (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:12222:10)\n    at parse (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\parser\\lib\\index.js:12273:38)\n    at parser (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (C:\\dev\\arkscension_back_end\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (C:\\dev\\arkscension_back_end\\node_modules\\gensync\\index.js:254:32)\n    at gen.next (C:\\dev\\arkscension_back_end\\node_modules\\gensync\\index.js:266:13)\n    at async.call.value (C:\\dev\\arkscension_back_end\\node_modules\\gensync\\index.js:216:11)");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./resources/js/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\arkscension_back_end\resources\js\index.js */"./resources/js/index.js");


/***/ })

/******/ });