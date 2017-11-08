const express = require('express');
const router = express.Router();

const { getMeetings, addNewMeeting } = require('../controllers/meetings');

router.get('/meetings/:day/:time/:city', getMeetings);
router.post('/meetings/addNewMeeting', addNewMeeting);


module.exports = router;
