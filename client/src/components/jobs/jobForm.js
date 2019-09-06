import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addJob } from '../../actions/jobActions';

const JobForm = ({ addJob }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    title: '',
    description: '',
    contactPerson: '',
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
    setFormData({ [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = e => {
    e.preventDefault();
    addJob({ formData });
  };

  return (
    <Fragment>
      <div className='job-form'>
        <div className='bg-primary p'>
          <h3>Add A Job</h3>
        </div>
        <form className='form my-1' onSubmit={e =>onSubmit(e)}>
          
            <input
            className='form-group'
              type='text'
              placeholder='Company Name...'
              name='companyName'
              // defaultValue={companyName}
              onChange={e => onChange(e)}
            />
            <input
            className='form-group'
              type='text'
              placeholder='Title...'
              name='title'
              // defaultValue={title}
              onChange={e => onChange(e)}
            />
            <input
            className='form-group'
              type='text'
              placeholder='Description...'
              name='description'
              // defaultValue={description}
              onChange={e => onChange(e)}
            />
            {/* Need to do buttons for status, notes, and contactPerson/Need to do radio button for interviewPending */}
            <input
            className='form-group'
              type='text'
              placeholder='Application Date...'
              name='dateapplied'
              // defaultValue={dateapplied}
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
