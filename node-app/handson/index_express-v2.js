const express = require('express');
const OrderCtrl = require('./controllers/orderController');
const app = express();


app.use('/api/orders', OrderCtrl);
app.listen(8082, () => console.log('Running the express module!!!'));