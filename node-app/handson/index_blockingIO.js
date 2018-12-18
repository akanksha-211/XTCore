// blocking IO API's

const fs = require('fs');
console.log('start');
try{
    console.log(fs.readFileSync('./test.tx', 'UTF-8'));
}
catch(e) {
    console.log('ERROR------------------------->');
}
console.log('end');

// Syncronous Write operation

try {
    const data = 'New Text - Write!'
    fs.writeFileSync('./test.txt', data, 'UTF-8');
    console.log('Data written');
}
catch(e) {
    console.log('Write operation failed!!!');
}