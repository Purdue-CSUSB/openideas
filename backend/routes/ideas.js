const express = require('express');
const Idea = require('../models/idea');

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

export default router;
