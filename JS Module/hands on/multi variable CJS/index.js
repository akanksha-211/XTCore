const {name, age, isActive, calSalary, skills }= require('./lib.js');
const FetchService = require('./fetchService');
console.log(name, age, isActive, calSalary(), skills);

const fs = new FetchService;
console.log(fs.findAll());
console.log(fs.findById(7));
console.log(fs.save());
console.log(fs.remove());