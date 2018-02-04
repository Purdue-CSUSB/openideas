const express = require('express');
const Idea = require('../models/idea');

const router = express.Router();

const protect = (req, res, next) => {
  if (!req.user) {
    res.code(401);
  } else {
    next();
  }
};

const voteOnce = (req, res, next) => {
  if (!req.user || Idea.findById(req.params.idea_id).voted.includes(req.user.facebookId)) {
    res.code(401);
  } else {
    next();
  }
};

router.route('/')
  .post(protect, (req, res) => {
    const idea = new Idea({ facebookId: req.body.facebookId, author: req.user.display_name });
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
  })
  .patch((req, res) => {
    Idea.findByIdAndUpdate(req.params.idea_id).exec()
      .then(idea => res.json(idea))
      .catch(err => res.send(err));
  })
  .delete((req, res) => {
    Idea.findByIdAndRemove(req.params.idea_id).exec()
      .then(idea => res.json(idea))
      .catch(err => res.send(err));
  });

router.route('/:idea_id/vote')
  .post(protect, voteOnce, (req, res) => {
    Idea.findByIdAndUpdate(req.params.idea_id, {
      $inc: { votes: 1 },
      $push: { voted: req.user.facebookId },
    }, { new: true }).exec()
      .then(idea => res.json(idea))
      .catch(err => res.send(err));
  });

router.route('/:idea_id/comment')
  .post(protect, (req, res) => {
    Idea.findByIdAndUpdate(
      req.params.idea_id,
      { $push: { comments: { author: req.user.display_name, body: req.body.body } } },
      { new: true },
    ).exec()
      .then(idea => res.json(idea))
      .catch(err => res.send(err));
  });

module.exports = router;
