import React from 'react';
import { Link } from 'react-router-dom';

const DashboardBtns = props => {
  return (
    <div className='dash-buttons'>
      <Link to='/add-job' className='btn btn-primary'>
        <i className='fas fa-briefcase text-light' /> Add Job
      </Link>
      <Link to='/add-interview' className='btn btn-dark'>
        <i className='fab fa-black-tie text-light' /> Add Interview
      </Link>
      <Link to='/add-schedule' className='btn btn-light'>
        <i className='fas fa-calendar-alt text-primary' /> Schedule
      </Link>
    </div>
  );
};

export default DashboardBtns;
