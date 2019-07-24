const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  jobs: [
    {
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
        name: {
          type: String
        },
        interviewPending: {
          type: Boolean
        }
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
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Job = mongoose.model('job', JobSchema);
