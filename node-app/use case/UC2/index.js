const http = require('http');
const fs = require('fs');

let counter = 0;
const Application = function(req, res) {
    const stream = fs.createReadStream('./newTest.txt', 'UTF-8');
    const fileName = './assets/newFile'+(Math.random())+'.txt';
    console.log(fileName);
    const writeStream = fs.createWriteStream(fileName, 'UTF-8');
    let totalSize = 0;
    let p = 0;
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    stream.on('data', function(chunk) {
        totalSize += chunk.length;
        writeStream.write(chunk);
        p = Math.floor((totalSize/5740000 *100));
        console.log('Uploading - '+ p.toString() +'%');
        res.write('<p>Uploading - '+ p.toString() +'%</p>');
    });
    stream.on('error', function() {
        console.log('Something went wrong');
    });
    stream.on('end', function() {
        console.log('DONE!!!');
        res.write('<h3>Uploaded!</h3>');
        res.end();
    });
}

const server = http.createServer(Application);


server.listen(8080, () => {
    console.log('Server ready!');
})