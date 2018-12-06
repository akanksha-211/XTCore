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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../JS Module/use case/UC1/Ver-2 using ES6/src/profileComponent.js":
/*!*************************************************************************************************************!*\
  !*** D:/Akanksha Imp/CoreXT Training/XTCore/JS Module/use case/UC1/Ver-2 using ES6/src/profileComponent.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProfileComponent; });\nclass  ProfileComponent  {\r\n    constructor(profileService) {\r\n        this.profileService  =  profileService;\r\n    }\r\n\r\n    addProfile(name,  city) {\r\n        this.profileService.add(name, city)\r\n            .then((res)  =>  console.log(res))\r\n            .catch(err  =>  console.log(err.message));\r\n    }\r\n\r\n    findAllProfiles() {\r\n        this.profileService.findAll()\r\n            .then((res)  =>  console.log(res))\r\n            .catch(err  =>  console.log(err.message));\r\n    }\r\n\r\n    findProfileById(id) {\r\n        this.profileService.findById(id)\r\n            .then((res)  =>  console.log(res))\r\n            .catch(err  =>  console.log(err.message));\r\n    }\r\n\r\n    updateProfile(id,  name,  city) {\r\n        this.profileService.update(id, name, city).then((res)  =>  console.log(res))\r\n            .catch(err  =>  console.log(err.message));\r\n    }\r\n\r\n    removeProfile(id) {\r\n        this.profileService.remove(id)\r\n            .then((res)  =>  console.log(res))\r\n            .catch(err  =>  console.log(err.message));\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///D:/Akanksha_Imp/CoreXT_Training/XTCore/JS_Module/use_case/UC1/Ver-2_using_ES6/src/profileComponent.js?");

/***/ }),

/***/ "../../../JS Module/use case/UC1/Ver-2 using ES6/src/profileService.js":
/*!***********************************************************************************************************!*\
  !*** D:/Akanksha Imp/CoreXT Training/XTCore/JS Module/use case/UC1/Ver-2 using ES6/src/profileService.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProfileService; });\nclass  Profile  {\r\n    constructor(id,  name,  city) {\r\n        this.id  =  id;\r\n        this.name  =  name;\r\n        this.city  =  city;\r\n    }\r\n}\r\n\r\nclass  ProfileService  {\r\n    constructor() {\r\n        this.serviceUrl  =  'http://localhost:3000/profile';\r\n    }\r\n\r\n    async add(name,  city) {\r\n        try  {\r\n            const  id  =  Math.floor(Math.random()  *  1000);\r\n            const  profile  =  new  Profile(id, name, city);\r\n            const  response  =  await  fetch(this.serviceUrl, {\r\n                method:  'POST',\r\n                body:  JSON.stringify(profile),\r\n                headers: {\r\n                    'Content-Type':  'application/json'\r\n                }\r\n            });\r\n            if  (response.status  !==  200  &&  response.status  !==  201) {\r\n                throw  new  Error(response.statusText);\r\n            }\r\n            return  await  response.json();\r\n        }\r\n        catch  (err) {\r\n            throw  (err);\r\n        }\r\n    }\r\n\r\n    // return all profiles\r\n    async findAll() {\r\n        try  {\r\n            const  response  =  await  fetch(this.serviceUrl);\r\n            if  (response.status  !==  200  &&  response.status  !==  201) {\r\n                throw  new  Error(response.statusText);\r\n            }\r\n            return  await  response.json();\r\n        }\r\n        catch  (err) {\r\n            throw  (err);\r\n        }\r\n    }\r\n\r\n    async findById(id) {\r\n        try  {\r\n            const  response  =  await  fetch(`${this.serviceUrl}?id=${id}`);\r\n            if  (response.status  !==  200  &&  response.status  !==  201) {\r\n                throw  new  Error(response.statusText);\r\n            }\r\n            return  await  response.json();\r\n        }  catch  (err) {\r\n            throw  (err);\r\n        }\r\n    }\r\n\r\n    async update(id,  name,  city) {\r\n        try  {\r\n            const  profile  =  new  Profile(id, name, city);\r\n            const  response  =  await  fetch(`${this.serviceUrl}/${id}`, {\r\n                method:  'PUT',\r\n                body:  JSON.stringify(profile),\r\n                headers: {\r\n                    'Content-Type':  'application/json'\r\n                }\r\n            });\r\n            if  (response.status  !==  200  &&  response.status  !==  201) {\r\n                throw  new  Error(response.statusText);\r\n            }\r\n            return  await  response.json();\r\n        }  catch  (err) {\r\n            throw  (err);\r\n        }\r\n    }\r\n\r\n    async remove(id) {\r\n        try  {\r\n            const  response  =  await  fetch(`${this.serviceUrl}/${id}`, {\r\n                method:  'DELETE'\r\n            });\r\n            if  (response.status  !==  200  &&  response.status  !==  201) {\r\n                throw  new  Error(response.statusText);\r\n            }\r\n            return  await  response.json();\r\n        }  catch  (err) {\r\n            throw  (err);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///D:/Akanksha_Imp/CoreXT_Training/XTCore/JS_Module/use_case/UC1/Ver-2_using_ES6/src/profileService.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JS_Module_use_case_UC1_Ver_2_using_ES6_src_profileService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../JS Module/use case/UC1/Ver-2 using ES6/src/profileService */ \"../../../JS Module/use case/UC1/Ver-2 using ES6/src/profileService.js\");\n/* harmony import */ var _JS_Module_use_case_UC1_Ver_2_using_ES6_src_profileComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../JS Module/use case/UC1/Ver-2 using ES6/src/profileComponent */ \"../../../JS Module/use case/UC1/Ver-2 using ES6/src/profileComponent.js\");\n\r\n\r\n\r\nconst  profileComponent  =  new  _JS_Module_use_case_UC1_Ver_2_using_ES6_src_profileComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new  _JS_Module_use_case_UC1_Ver_2_using_ES6_src_profileService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()); \r\n\r\n\r\n\r\nfunction validate(){\r\n    const element = (document.getElementsByTagName('input'));\r\n    var valid = true;\r\n    // const fName = document.getElementById(\"fname\");\r\n    // const city = document.getElementById(\"city\");\r\n    Array.prototype.forEach.call(element, (element) => {\r\n        // (element.classList).forEach( el => {\r\n        //     if(el === \"error\") {\r\n        //         return false;\r\n        //     }\r\n        // });\r\n        element.validity\r\n        \r\n    });\r\n    console.log('valid-----------', valid);\r\n    \r\n    // profileComponent.addProfile(fName.value, city.value);\r\n    // window.location = \"./success.html\";\r\n    \r\n}\r\nfunction init() {\r\n    \r\n   document.getElementById(\"form_info\").onsubmit = function() {\r\n       event.preventDefault();\r\n       if(validate())\r\n            return true;\r\n        else {\r\n            event.preventDefault();\r\n            return false;\r\n        }\r\n   };\r\n    \r\n   const fName = document.getElementById(\"fname\");\r\n    fName.addEventListener(\"blur\", function (event) {\r\n        if (!(fName.validity.valid)) {\r\n            fName.setCustomValidity(\"\");\r\n            fName.classList.add('error');\r\n            (fName.parentElement.childNodes).forEach(function(el) {\r\n                if(el.className === 'error-block'){\r\n                    el.style.visibility = 'visible';\r\n                }\r\n            });\r\n        } else {\r\n            fName.classList.remove('error');\r\n            (fName.parentElement.childNodes).forEach(function(el) {\r\n                if(el.className === 'error-block'){\r\n                    el.style.visibility = 'hidden';\r\n                }\r\n            });\r\n        }\r\n    });\r\n\r\n    const lName = document.getElementById(\"lname\");\r\n    lName.addEventListener(\"blur\", function (event) {\r\n        \r\n        if (!(lName.validity.valid)) {\r\n            lName.classList.add('error');\r\n            (lName.parentElement.childNodes).forEach(function(el) {\r\n                if(el.className === 'error-block'){\r\n                    el.style.visibility = 'visible';\r\n                }\r\n            });\r\n        } else {\r\n            lName.classList.remove('error');\r\n            (lName.parentElement.childNodes).forEach(function(el) {\r\n                if(el.className === 'error-block'){\r\n                    el.style.visibility = 'hidden';\r\n                }\r\n            });\r\n        }\r\n    });\r\n    const email = document.getElementById(\"email\");\r\n    email.addEventListener(\"blur\", function (event) {\r\n        \r\n        if (!(email.validity.valid)) {\r\n            email.classList.add('error');\r\n            (email.parentElement.childNodes).forEach(function(el) {\r\n                if(el.className === 'error-block'){\r\n                    el.style.visibility = 'visible';\r\n                }\r\n            });\r\n        } else {\r\n            email.classList.remove('error');\r\n            (email.parentElement.childNodes).forEach(function(el) {\r\n                if(el.className === 'error-block'){\r\n                    el.style.visibility = 'hidden';\r\n                }\r\n            });\r\n        }\r\n    });\r\n    const city = document.getElementById(\"city\");\r\n    city.addEventListener(\"blur\", function (event) {\r\n        \r\n        if (!(city.validity.valid)) {\r\n            city.classList.add('error');\r\n            (city.parentElement.childNodes).forEach(function(el) {\r\n                if(el.className === 'error-block'){\r\n                    el.style.visibility = 'visible';\r\n                }\r\n            });\r\n        } else {\r\n            city.classList.remove('error');\r\n            (city.parentElement.childNodes).forEach(function(el) {\r\n                if(el.className === 'error-block'){\r\n                    el.style.visibility = 'hidden';\r\n                }\r\n            });\r\n            document.querySelector('button').disabled = false;\r\n        }\r\n    });\r\n\r\n    \r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });