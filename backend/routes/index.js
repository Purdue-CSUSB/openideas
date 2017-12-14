const express = require('express');
const ideas = require('./ideas');

const router = express.Router();

router.use('/ideas', ideas);

export default router;
