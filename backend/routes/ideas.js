const express = require('express');
const Idea = require('../models/idea');

const router = express.Router();

router.route('/')
  .post((req, res) => {
    const idea = new Idea(req.body);
    idea.save()
      .then(() => res.json(idea))
      .catch(err => res.send(err));
  })
  .get((req, res) => {
    Idea.find().exec()
      .then(ideas => res.json(ideas))
      .catch(err => res.send(err));
  });

router.route('/:idea_id')
  .get((req, res) => {
    Idea.findById(req.params.idea_id).exec()
      .then(idea => res.json(idea))
      .catch(err => res.send(err));
  });

router.route('/:idea_id/vote')
  .post((req, res) => {
    Idea.findByIdAndUpdate(req.params.idea_id, { $inc: { votes: 1 } }, { new: true }).exec()
      .then(idea => res.json(idea))
      .catch(err => res.send(err));
  });

router.route('/:idea_id/comment')
  .post((req, res) => {
    Idea.findByIdAndUpdate(
      req.params.idea_id,
      { $push: { comments: { author: req.body.author, body: req.body.body } } },
      { new: true },
    ).exec()
      .then(idea => res.json(idea))
      .catch(err => res.send(err));
  });

module.exports = router;
