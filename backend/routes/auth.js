const express = require('express');
const axios = require('axios');
const User = require('../models/user');

const router = express.Router();
/* eslint-disable */
router.post('/facebook', (req, res) => {
  axios.post('https://graph.facebook.com/v2.11/oauth/access_token', {
    client_id: process.env.FACEBOOK_APP_ID,
    client_secret: process.env.FACEBOOK_APP_SECRET,
    code: req.body.code,
    redirect_uri: req.body.redirectUri,
  }, { 'Content-Type': 'application/json' })
    .then((tokenResponse) => {
      axios.get('https://graph.facebook.com/v2.11/me', {
        params: { access_token: tokenResponse.data.access_token },
      }).then((userData) => {
        User.findOrCreate(
          { facebookId: userData.data.id },
          {
            display_name: userData.data.name,
            email: '',
          },
        ).then((user) => {
          req.session.user = user.result;
          res.json(tokenResponse.data);
        });
      }).catch(() => {
        res.code = 500;
        res.json({ message: 'Backend failure' });
      });
    }).catch(err => res.json(err));
});

router.delete('/', (req, res) => {
  req.session = null;
  res.json({ success: true });
});

module.exports = router;
