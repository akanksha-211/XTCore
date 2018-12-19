const express = require('express');
const { ORDERS, addOrder, updateOrder } = require('../model/Orders');

const OrderCtrl = express.Router();

OrderCtrl.get('/', (req, res) => {
    res.status(200).json(ORDERS);
});

OrderCtrl.post('/', (req, res) => {
    addOrder(3,500);
    res.send('orders -POST');
});

OrderCtrl.put('/1', (req, res) => {
    // console.log(req.url);
    // updateOrder(2, 500);
    res.send('orders - UPDATE');
});

OrderCtrl.delete('/', (req, res) => {
    res.send('orders - DELETE');
});

module.exports = OrderCtrl;