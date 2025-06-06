const express = require('express');
const router = express.Router();
const { createMeeting } = require('../controllers/meetingController');

router.post('/', createMeeting);

module.exports = router;
