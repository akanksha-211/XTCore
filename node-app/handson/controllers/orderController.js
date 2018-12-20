const express = require('express');
const { ORDERS, addOrder, updateOrder } = require('../model/Orders');


const OrderCtrl = express.Router();


OrderCtrl.get('/', (req, res) => {
    res.status(200).json(ORDERS);
});

OrderCtrl.post('/', (req, res) => {
    // let data = "";
    // req.on('data', (chunk) => {                  Obselete method, not used now a days
    //     data += chunk;
    //     console.log(chunk.toString());
    // })
    const data = req.body;
    console.log(data);
    ORDERS.push(data);
    res.status(201).json(ORDERS);
    res.end('orders -POST');
});

OrderCtrl.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.send('orders - UPDATE');
});

OrderCtrl.delete('/', (req, res) => {
    res.send('orders - DELETE');
});

module.exports = OrderCtrl;