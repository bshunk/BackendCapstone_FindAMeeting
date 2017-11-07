const express = require('express');
const router = express.Router();

const { getMeetings } = require('../controllers/meetings');

router.get('/meetings', getMeetings);

module.exports = router;
