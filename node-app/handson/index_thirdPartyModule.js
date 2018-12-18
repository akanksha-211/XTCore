// Third party module

const _ =require('lodash');
console.log(_);
console.log(_.now());

const array =[1,2,3];
_.fill(array, 'test');

console.log(array);