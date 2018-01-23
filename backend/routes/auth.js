const express = require('express');
const passport = require('../auth');

const router = express.Router();

router.post(
  '/facebook/token',
  passport.authenticate('facebook-token'),
  (req, res) => res.send(req.user ? 200 : 401),
);

module.exports = router;
