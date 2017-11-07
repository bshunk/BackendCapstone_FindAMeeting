const express = require('express');
const router = express.Router();
const { } = require('../controllers/meetings');

router.get('/meetings', getMeetings);

module.exports = router;
