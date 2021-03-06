const express = require('express');
const OrderCtrl = require('./controllers/orderController');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/orders', OrderCtrl);
app.listen(8082, () => console.log('Running the express module!!!'));