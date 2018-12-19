const http = require('http');

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
        const payload = JSON.stringify(cust);
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.write(payload);
        res.end();
};

const server = http.createServer(Application);

server.on('request', function() {
    console.log(new Date());
})

server.listen(8080, () => {
    console.log('Server ready!');
})