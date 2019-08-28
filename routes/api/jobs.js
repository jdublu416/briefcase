const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const config = require('config');
const auth = require('../../middleware/auth');

const Job = require('../../models/Jobs');
const User = require('../../models/User');

//TODO: create an update for job? or handle it within the create job route?

// @router      GET api/jobs
// @desc        get a list of all jobs for user
// @access      private

router.get('/all', auth, async (req, res) => {
  try {
    const jobs = await Job.find({user: req.user.id});
    if (!jobs) {
      return res.status(400).json({ msg: 'No jobs found for this user' });
    }

    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'No jobs found' });
    }
    res.status(500).send('Server Error');
  }
});

// @router      GET api/jobs/:id
// @desc        find one job by id
// @access      private

router.get('/:id', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if(!job){
      return res.status(404).json({msg: 'Job not found'});
    }
    res.json(job)

  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'No jobs found' });
    }
    res.status(500).send('Server Error');
  }
});

// @router      POST api/jobs
// @desc        create new job
// @access      private

router.post(
  '/',
  [
    auth,
    check('companyName', 'Company Name is Required')
      .not()
      .isEmpty(),
    check('title', 'Job Title is  required')
      .not()
      .isEmpty(),
    check('description', 'Description is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const {
      companyName,
      title,
      description,
      contactPerson,
      status,
      interviewPending,
      notes,
      dateApplied,
      interviews
    } = req.body;

    try {
      const user = await User.findById(req.user.id).select('-password');
      const newJob = new Job({
        user: user.id,
        companyName,
        title,
        description,
        contactPerson,
        status,
        interviewPending,
        notes,
        dateApplied,
        interviews
      });
      let job = await newJob.save();
      res.json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route DELETE api/jobs/:id
// @desc  del a Job
// @access private
router.delete('/:id', auth, async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);

    if (!job) return res.status(404).json({ msg: 'No job found' });
    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Job.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Job Removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
// const jobFields = {};

//     jobFields.user = req.user.id;
//     if (companyName) jobFields.companyName = companyName;
//     if (title) jobFields.title = title;
//     if (description) jobFields.description = description;
//     if (status) jobFields.status = status;
//     if (interviewPending) jobFields.interviewPending = interviewPending;
//     if (dateApplied) jobFields.dateApplied = dateApplied;
//     if (interviews) jobFields.interviews = interviews;

//     //build contact person object
//     jobFields.contactPerson = {};
//     if (name) jobFields.contactPerson.name = name;
//     if (phone) jobFields.contactPerson.phone = phone;
//     if (email) jobFields.contactPerson.email = email;

//     //build notes object
//     jobFields.notes = {};
//     if (text) jobFields.notes.text = text;
//     if (date) jobFields.notes.date = date;
