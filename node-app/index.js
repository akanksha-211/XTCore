// console.log('Node through JavaScript!!!');

const NEFT = require('./services/NEFTTransferService');


const newTransaction = new NEFT();

newTransaction.transfer(500, 1234, 5678);