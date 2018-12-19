const http = require('http');
const fs = require('fs');

const cust = [
    {
        name:'abc',
        id:1
    },
    {
        name:'def',
        id:'2'
    }];

const Application = function(req, res) {
        const stream = fs.createReadStream('./newTest.txt');
        res.writeHead(200, {
            'Content-type': 'text/plain'
        })
        stream.on('data', function(chunk) {
            stream.pipe(res);
        });
};

const server = http.createServer(Application);

server.on('request', function() {
    console.log(new Date());
})

server.listen(8080, () => {
    console.log('Server ready!');
})