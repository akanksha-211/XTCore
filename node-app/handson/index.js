const express = require('express');

const app = express();

const welcomeMiddleware = function (req, res, next) {
    console.log('Welcome to my app!!');
    next();
};

const timeStamp = function (req, res, next) {
    console.log(new Date());
    next();
};

app.use(welcomeMiddleware);
app.use(timeStamp);
app.use('one', (req, res) => {
    console.log('One');
    next();
})
app.use('two', (req, res) => {
    console.log('Two');
    next();
})
app.use('three', (req, res) => {
    console.log('Three');
    next();
})
app.use('greet', (req, res) => {
    console.log('Greet middleware');
    next();
})
app.get('/', (req, res) => {
    res.end('<h1>Welcome to Express!!</h1>')
});

app.get('/greet', (req, res) => {
    console.log('Host Name', req.hostname);
    next();
}, (req, res) => res.end('greet'))
app.post('/greet', (req, res) => res.end('greet-POST'))
app.listen(8080, ()=> console.log('Express is ready!!'));