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
    name: '',
    email: '',
    phone: '',
    status: false,
    interviewPending: false,
    notes: {
      text: '',
      date: ''
    },
    dateapplied: '',
    archives: []
  });

  const [displayJobDetails, toggleJobDetails] = useState(false);
  const [displayNoteInput, toggleNoteInput] = useState(false);

  const {
    companyName,
    title,
    description,
    name,
    email,
    phone,
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
    console.log(formData);
    addJob(formData);
    setFormData({
      companyName: '',
      title: '',
      description: '',
      status: false,
      name: '',
      email: '',
      phone: '',
      notes: {
        text: '',
        date: ''
      },
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
          {/* Required Job Information */}
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

          {/* Contact Person Details */}
          <div className='my-2'>
            <button
              onClick={() => toggleJobDetails(!displayJobDetails)}
              type='button'
              className='btn btn-light'
            >
              Add Contact Person
            </button>
            <span>*</span>
          </div>

          {displayJobDetails && (
            <Fragment>
              <div className='form-group'>
                <input
                  type='text'
                  name='name'
                  id='contact-person-name'
                  placeholder='Contact Person Name...'
                  value={name}
                  onChange={e => onChange(e)}
                />
                <input
                  type='text'
                  name='email'
                  id='contact-person-email'
                  value={email}
                  placeholder='Contact Person Email...'
                  onChange={e => onChange(e)}
                />
                <input
                  type='text'
                  name='phone'
                  id='contact-person-phone'
                  value={phone}
                  placeholder='Contact Person Phone...'
                  onChange={e => onChange(e)}
                />
              </div>
            </Fragment>
          )}

          {/* Job Note Details */}
          <div className='my-2'>
            <button
              onClick={() => toggleNoteInput(!displayNoteInput)}
              type='button'
              className='btn btn-light'
            >
              Add Notes
            </button>
            <span>*</span>
          </div>
          {displayNoteInput && (
            <Fragment>
              <div className='form-group'>
                <textarea
                  name='notes-text'
                  value={notes.text}
                  id=''
                  cols='32'
                  rows='20'
                  placeholder='Enter notes...'
                  onChange={e => onChange(e)}
                ></textarea>
                <input
                  type='text'
                  name='date-of-note'
                  value={notes.date}
                  id='noteDate'
                  placeholder='Enter a date...'
                  onChange={e => onChange(e)}
                />
              </div>
            </Fragment>
          )}

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
