const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bluebird = require('bluebird');
const router = require('./routes');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true });
mongoose.Promise = bluebird;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use('/api', router);

app.listen(port);

// eslint-disable-next-line
console.log('listening on port ' + port)
