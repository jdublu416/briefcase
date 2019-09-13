import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserJobs } from '../../actions/jobActions';

/*****************************************Notes*********************
 * display via cards for all jobs for User in the db
 * buttons on card will display all info for clicked on job with a modal and buttons to link to an
 *      interview, delete job, archive job, edit job
 */

const Jobs = ({ getJobs }) => {
  return <div>Jobs</div>;
};

Jobs.propTypes = {
  getUserJobs: PropTypes.func.isRequired
};

export default connect(
  null,
  { getUserJobs }
)(Jobs);
