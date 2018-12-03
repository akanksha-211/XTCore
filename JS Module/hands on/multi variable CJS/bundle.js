(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


class FetchService {
    findAll(){
        return 'Find All';
    }
    findById(id) {
        return 'find by id :' +id;
    }
    save(){
        return 'save';
    }
    remove(){
        return 'remove';
    }
}

module.exports = FetchService;
},{}],2:[function(require,module,exports){
const {name, age, isActive, calSalary, skills }= require('./lib.js');
const FetchService = require('./fetchService');
console.log(name, age, isActive, calSalary(), skills);

const fs = new FetchService;
console.log(fs.findAll());
console.log(fs.findById(7));
console.log(fs.save());
console.log(fs.remove());
},{"./fetchService":1,"./lib.js":3}],3:[function(require,module,exports){
// variables
exports.name = 'Akanksha';
exports.age = 29;
exports.isActive = true;
exports.calSalary = function(){
    return 2000;
};
exports.skills=[
    {
        id:1,
        name:'a'
    },
    {
        id : 2,
        name: 'b'
    },
    {
        id:3,
        name:'c'
    }
]
},{}]},{},[2]);
