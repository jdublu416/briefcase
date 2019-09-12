const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterviewSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'jobs'
  },
  companyName: String,
  scheduleDate: {
    type: String,
    isrequired: true
  },
  scheduleTime: {
    type: String,
    isrequired: true
  },
  location: String,
  notes: {
    type: String,
    isrequired: true,
    date: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  interviewer: String
});

module.exports = Interview = mongoose.model('interview', InterviewSchema);
