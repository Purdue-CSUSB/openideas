const express = require('express');
const passport = require('../auth');

const router = express.Router();

router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: 'email' }));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure',
  }),
);

// TODO: these two need to pass along to the frontend
router.get('/success', (req, res) => res.json(req.user));

router.get('/failure', (req, res) => res.json({ status: 'error' }));

module.exports = router;
