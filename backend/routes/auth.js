const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/facebook', (req, res) => {
  axios.post('https://graph.facebook.com/v2.11/oauth/access_token', {
    client_id: process.env.FACEBOOK_APP_ID,
    client_secret: process.env.FACEBOOK_APP_SECRET,
    code: req.body.code,
    redirect_uri: req.body.redirectUri,
  }, { 'Content-Type': 'application/json' })
    .then((response) => {
      // TODO: should we create the user here?
      res.json(response.data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
