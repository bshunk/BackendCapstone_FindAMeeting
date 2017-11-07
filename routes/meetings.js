const express = require('express');
const router = express.Router();
const { } = require('../controllers/meetings');

router.get('/meetings/:category/:type/:group/:city/:day/:time:/location', getMeetings);

module.exports = router;