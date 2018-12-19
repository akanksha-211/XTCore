const express = require('express');
const orders = require('./model/Orders');

const app = express();

app.get('/api/orders', (req, res) => {
    res.status(200).json(orders);
});

app.post('/api/orders', (req, res) => {
    res.send('orders -POST');
});

app.put('/api/orders/1', (req, res) => {
    res.send('orders - UPDATE');
});

app.delete('/api/orders', (req, res) => {
    res.send('orders - DELETE');
});

app.listen(8081, _ => console.log('Express server ready!'));