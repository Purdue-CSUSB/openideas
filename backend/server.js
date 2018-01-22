require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./auth');
const router = require('./routes');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true });
mongoose.Promise = bluebird;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

const port = process.env.PORT || 8080;
app.listen(port);

// eslint-disable-next-line
console.log('listening on port ' + port)
