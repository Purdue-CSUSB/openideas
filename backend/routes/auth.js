const express = require('express');
const passport = require('../auth');

const router = express.Router();

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

module.exports = router;
