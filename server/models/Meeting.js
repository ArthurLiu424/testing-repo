const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  title: String,
  transcript: String,
  summary: String,
  actionItems: [String],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meeting', meetingSchema);
