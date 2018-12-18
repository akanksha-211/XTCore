const fs = require('fs');

const stream = fs.createReadStream('./newTest.txt', 'UTF-8');
let counter = 0;
stream.on('data', (chunk) => {
    console.log(`recieved ${chunk.length} bytes of data`);
    console.log(counter);
    counter++;
    stream.pause();
    console.log('------------No additional data for 1 sec-------------------');
    setTimeout(() => {
        console.log('****************************stream resumes******************************');
        stream.resume();
    }, 1000);
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