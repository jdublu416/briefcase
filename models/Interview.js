const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterviewSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  jobs: {
    type: mpngoose.Schema.Types.ObjectId,
    ref: 'jobs'
  },
  scheduleDate: {
    type: String,
    isrequired: true
  },
  notes: {
    text: {
      type: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  }
});

module.exports = Interview = mongoose.model('interview', InterviewSchema);
