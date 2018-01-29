const express = require('express');

const router = express.Router();

router.use('/ideas', require('./ideas'));
router.use('/auth', require('./auth'));

module.exports = router;
