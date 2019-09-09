const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  companyName: {
    type: String,
    isrequired: true
  },
  title: {
    type: String,
    isrequired: true
  },
  description: {
    type: String,
    isrequired: true
  },
  contactPerson: [
    {
      name: {
        type: String
      },
      phone: {
        type: String
      },
      email: {
        type: String
      }
    }
  ],
  status: {
    type: String
  },
  interviewPending: {
    type: Boolean
  },
  notes: {
    text: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  dateapplied: {
    type: String
  },
  archives: {
    type: Array
  },
  
});

module.exports = Job = mongoose.model('jobs', JobSchema);
