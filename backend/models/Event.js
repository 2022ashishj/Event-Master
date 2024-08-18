const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  time: String,
  location: String,
  description: String,
  participantLimit: Number,
  waitlist: [String],  // list of user IDs
});

module.exports = mongoose.model('Event', eventSchema);
