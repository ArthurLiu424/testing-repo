const Meeting = require('../models/Meeting');

const createMeeting = async (req, res) => {
  const { title, transcript } = req.body;

  const summary = "AI summary goes here";
  const actionItems = ["Do X", "Review Y"];

  const meeting = new Meeting({ title, transcript, summary, actionItems });
  await meeting.save();

  res.status(201).json(meeting);
};

module.exports = { createMeeting };
