const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator')

const config = require('config');
const auth = require('../../middleware/auth');

const Job = require('../../models/Job');
const User = require('../../models/User');

// @router      GET api/job
// @desc        get a list of all jobs for user
// @access      public

router.get('/user/:user.id', async (req, res) => {
    try {
        const jobs = await Job.find({
            user: req.params.user_id
        });
        console.log(jobs)
        res.json(jobs);
    } catch (err) {
        console.error(err.message);
        if(err.kind == ObjectId){
            return res.status(400).json({msg: 'No jobs found'})
        }
        res.status(500).send('Server Error');
    }
});

