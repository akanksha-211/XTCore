const http = require('http');

const Application = function(req, res) {
    // writing data in http output stream
    // req.on('data', function(chunk) {
    //     res.write('Welcome to node js HTTP server', chunk);
    //     res.end();
    // });
    req.pipe(res);
};

const server = http.createServer(Application);

server.on('request', function() {
    console.log(new Date());
})

server.listen(8080, () => {
    console.log('Server ready!');
})