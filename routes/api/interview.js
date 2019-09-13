const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const config = require('config');
const auth = require('../../middleware/auth');

const Job = require('../../models/Jobs');
const User = require('../../models/User');
const Interview = require('../../models/Interview');

//@route    GET api/posts
//@desc     Get all posts
//@access   private

router.get('/', auth, async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.json(interviews);
  } catch (err) {
    if (err.kind == ObjectId) {
      return res.status(400).json({ msg: 'No jobs found' });
    }
    res.status(500).send('Server Error');
  }
});

//@route    POST api/interview/job/:id
//@desc     post an interview
//@access   private

/**********************Note
 * need to check and test the route again for new properties added to the model. 
 * consider the route here to just be '/' vs /job/:id
 * 
 */

router.post(
  '/job/:id',
  [
    auth,
    [
      check('scheduleDate', 'Scheduled Date is a required field')
        .not()
        .isEmpty(),
        check('scheduleTime', 'Scheduled Time is a required field')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
    //   const user = await User.findById(req.user.id).select('-password');
      const job = await Job.findById(req.params.id);
      const newInterview = new Interview({
        job: req.params.id,
        companyName: job.companyName,
        scheduleDate: req.body.scheduleDate,
        scheduleTime: req.body.scheduleTime,
        interviewer: req.body.interviewer,
        notes: req.body.notes
      });

      const interview = await newInterview.save();
      res.json(interview);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route    Put api/interview/job/:id
//@desc     put an interview
//@access   private
module.exports = router;
