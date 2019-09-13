import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addJob } from '../../actions/jobActions';

/******************************************************Notes*******************
 * need to deal with unused variables to be addressed for adding to db.  toggle on the form for optional info?
 * 
 */
const JobForm = ({ addJob }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    title: '',
    description: '',
    contactPerson: [],
    status: '',
    interviewPending: false,
    notes: '',
    dateapplied: '',
    archives: ''
  });

  const {
    companyName,
    title,
    description,
    contactPerson,
    status,
    interviewPending,
    notes,
    dateapplied,
    archives
  } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };

  const onSubmit = e => {
    
    addJob(formData);
    setFormData({
      companyName: '',
      title: '',
      description: '',
      dateapplied: ''
    });
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className='job-form'>
        <div className='bg-primary p'>
          <h3>Add A Job</h3>
        </div>
        <form className='form my-1' onSubmit={e => onSubmit(e)}>
          <input
            className='form-group'
            type='text'
            placeholder='Company Name...'
            name='companyName'
            value={companyName}
            onChange={e => onChange(e)}
          />
          <input
            className='form-group'
            type='text'
            placeholder='Title...'
            name='title'
            value={title}
            onChange={e => onChange(e)}
          />
          <input
            className='form-group'
            type='text'
            placeholder='Description...'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
          {/* Need to do buttons for status, notes, and contactPerson/Need to do radio button for interviewPending */}
          <input
            className='form-group'
            type='text'
            placeholder='Application Date...'
            name='dateapplied'
            value={dateapplied}
            onChange={e => onChange(e)}
          />

          <input type='submit' className='btn btn-light my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

JobForm.propTypes = {
  addJob: PropTypes.func.isRequired
};

export default connect(
  null,
  { addJob }
)(withRouter(JobForm));
