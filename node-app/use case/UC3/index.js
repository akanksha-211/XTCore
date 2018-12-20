const express = require('express');
const ProfileController = require('./controller/profileController');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/profiles', ProfileController);
app.listen(8082, () => console.log('Running the express module!!!'));