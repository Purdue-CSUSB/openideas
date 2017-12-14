const express = require('express');
const Idea = require('../models/idea');

const router = express.Router();

router.route('/ideas')
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

router.route('/ideas/:idea_id')
  .get((req, res) => {
    Idea.findById(req.params.idea_id).exec()
      .then(idea => res.json(idea))
      .catch(err => res.send(err));
  })
  .patch((req, res) => {
    Idea.findById(req.params.idea_id).exec()
      .then((idea) => {
        idea.set(req.body);
        idea.save()
          .then(() => res.json(idea))
          .catch(err => res.send(err));
      });
  })
  .delete((req, res) => {
    Idea.remove({ _id: req.params.idea_id })
      .then(() => res.json({ success: true }))
      .catch(err => res.send(err));
  });

router.route('/idea/:idea_id/vote')
  .post((req, res) => {
    Idea.findById(req.params.idea_id).exec()
      .then((idea) => {
        idea.set({ votes: idea.votes + 1 });
        idea.save()
          .then(() => res.json(idea))
          .catch(err => res.send(err));
      });
  });

module.exports = router;
