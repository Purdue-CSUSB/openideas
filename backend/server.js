require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('short'));

mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true });
mongoose.Promise = bluebird;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  name: 'session',
  secret: process.env.SESSION_SECRET,
}));

app.use('/', router);

const port = process.env.PORT || 8081;
app.listen(port);

// eslint-disable-next-line
console.log('listening on port ' + port)
