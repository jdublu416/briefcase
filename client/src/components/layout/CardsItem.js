import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardsItem = job => {
  const { companyName, description, title, dateapplied } = job.job;
  return (
    <Fragment>
      <div style={style}>
        <h1><strong>Company:</strong> {companyName}</h1>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Job Title: </strong> {title}</p>
        <p><strong>Application Date:</strong> {dateapplied}</p>
        <Link to='/jobs' className='btn btn-primary'>
          View Job
        </Link>
      </div>
    </Fragment>
  );
};

const style = {
  backgroundColor: '#ececec',
  width: '80%',
  height: 'auto',
  border: '2px solid darkGrey',
  marginBottom: '10px',
  padding: '25px',
  borderRadius: '10px'
};

CardsItem.propTypes = {
  job: PropTypes.object.isRequired
};

export default CardsItem;
