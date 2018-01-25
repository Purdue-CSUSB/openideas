const express = require('express');
const axios = require('axios');
const User = require('../models/user');

const router = express.Router();

router.post('/facebook', (req, res) => {
  axios.post('https://graph.facebook.com/v2.11/oauth/access_token', {
    client_id: process.env.FACEBOOK_APP_ID,
    client_secret: process.env.FACEBOOK_APP_SECRET,
    code: req.body.code,
    redirect_uri: req.body.redirectUri,
  }, { 'Content-Type': 'application/json' })
    .then((tokenResponse) => {
      res.json(tokenResponse.data);
      axios.post('https://graph.facebook.com/v2.11/me', {
        params: { access_token: tokenResponse.data.access_token },
      }).then((userData) => {
        User.findOrCreate(
          { facebookId: userData.data.id },
          {
            display_name: userData.data.name,
            email: '',
          },
        ).then((user) => {
          // eslint-disable-next-line
          req.session.user = user.result;
        });
      }).catch((err) => {
        // eslint-disable-next-line
        console.log(err.data);
        res.json(err.data);
      });
    }).catch(err => res.json(err));
});

module.exports = router;
