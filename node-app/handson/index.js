const fs = require('fs');
const stream = fs.createReadStream('./newTest.txt', 'UTF-8');

let counter = 0; 
stream.on('data', function(chunk){
    counter++;
    console.log(`recieved ${chunk.length} bytes of data`);
    console.log('No of times called', counter);
});

stream.on('error', function(){
    console.log('Something went wrong!');
});

stream.on('end', () => {
    console.log('end of file');
});

stream.on('close', () => {
    console.log('close file');
});