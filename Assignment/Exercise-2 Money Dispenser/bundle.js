(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function init() {
    const input = document.querySelector(".input");
    const button = document.querySelector("#button");
    input.addEventListener('input', _ => {
        if(event.target.value && event.target.validity.valid) {
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }
    });
    button.addEventListener('click', function (){
        const arr = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        let amount = input.value;
        let total = 0;
        arr.forEach(element =>{
            let denomination = parseInt(amount/element);
            var span = document.getElementsByClassName(element);
            span[0].innerText = (denomination);
            amount %= element;
            total += denomination;
        });
        document.querySelector(".total").innerText = (total);
    })
}

module.exports = init;
},{}],2:[function(require,module,exports){
var init = require('./calculator');

window.onload = init;
},{"./calculator":1}]},{},[2]);
