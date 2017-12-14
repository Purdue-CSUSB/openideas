const express = require('express');

const router = express.Router();

router.use('/ideas', require('./ideas'));

module.exports = router;
