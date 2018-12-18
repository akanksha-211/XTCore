// Non Blocking - non streaming API

const fs = require('fs');

const options = {
    encoding: 'UTF-8'
}
console.log('start');
fs.readFile('./test.txt', options, (err, data) => {
    if (err)   console.log(err);
    console.log(data);
});
console.log('end');

// Write Operation
const data = ' Test file to test Nono blocking IO - write operation!'
fs.writeFile('./newFile.txt', data, (err) => {
    if (err)   console.log(err);
    console.log('file created.....');
})