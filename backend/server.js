const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bluebird = require('bluebird');
const Idea = require('./models/idea');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true });
mongoose.Promise = bluebird;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.route('/ideas')
  .post((req, res) => {
    const idea = new Idea(req.body);
    idea.save((err) => {
      if (err) res.send(err);
      return res.json(idea);
    });
  })
  .get((req, res) => {
    Idea.find((err, ideas) => {
      if (err) res.send(err);
      return res.json(ideas);
    });
  });

app.use('/api', router);

app.listen(port);

// eslint-disable-next-line
console.log('listening on port ' + port)
