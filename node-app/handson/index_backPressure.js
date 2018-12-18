const fs = require('fs');

const readStream = fs.createReadStream('./newTest.txt', 'UTF-8');

const writeStr = fs.createWriteStream('./newTestCopy.txt');

// readStream.on('data', function(chunk) {
//     var buffer_good = writeStr.write(chunk);
//     if(!buffer_good)
//         readStream.pause();
// });
// readStream.on('error', function(){
//     console.log('Something went wrong!');
// });

// readStream.on('end', () => {
//     console.log('end of file');
// });

// readStream.on('close', () => {
//     console.log('close file');
// });

// console.log('Program ends!!!!');


readStream.pipe(writeStr);