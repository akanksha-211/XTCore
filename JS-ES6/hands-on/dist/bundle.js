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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/*! exports provided: userName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userName\", function() { return userName; });\n\r\nconst userName = _ => {\r\n    const urls = [\r\n        'https://api.github.com/users/rajeevjain1983',\r\n        'https://api.github.com/users/akanksha-211',\r\n        'https://api.github.com/users/CodeWithAnkitSinghal',\r\n        'https://api.github.com/users/adishmodi',\r\n        'https://api.github.com/users/goldy28',\r\n        'https://api.github.com/users/vinamrasingh',\r\n        'https://api.github.com/users/rohit-khanna',\r\n        'https://api.github.com/users/sanjaybhatt0621',\r\n        'https://api.github.com/users/JugalJoshi8',\r\n        'https://api.github.com/users/rohngonnarock',\r\n        'https://api.github.com/users/vivek-khokhar',\r\n        'https://api.github.com/users/SidVedi',\r\n        'https://api.github.com/users/ajayp944',\r\n        'https://api.github.com/users/rao7'\r\n    ];\r\n    const promises = urls.map(url => {\r\n        return fetch(url);\r\n    });\r\n    function addHighlightClass(node){\r\n        console.dir(node);\r\n    }\r\n    Promise.all(promises)\r\n        .then((res) => {\r\n            let list = document.createElement('ol');\r\n            list.className = 'list-group';\r\n            document.body.appendChild(list);\r\n            res.forEach(userResponse => {\r\n            userResponse.json()\r\n                .then((user) => {\r\n                    var list_item = document.createElement('li');\r\n                    list_item.className = 'list-group-item';\r\n                    list_item.innerHTML=`User Name: ${user.name}, User ID: ${user.login}`;\r\n                    // list_item.mouseover = addHighlightClass(list_item);\r\n                    list_item.addEventListener('mouseover', _ => {\r\n                        list_item.addClass='active';\r\n                    });\r\n                    list.appendChild(list_item);\r\n                    \r\n                })\r\n                .catch(_ => console.log('User not found'));\r\n            });\r\n        }).catch(_ => console.log('Promise failed'));\r\n        \r\n}\r\n\r\nuserName();\r\n\n\n//# sourceURL=webpack:///./src/domManipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n\r\n\r\nwindow.onload = _domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"userName\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });