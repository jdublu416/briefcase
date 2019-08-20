import React, { Fragment, useEffect } from 'react';
import { Links } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getJobs, getJob } from '../../actions/jobActions';

const Dashboard = ({ getJobs, auth: { user }, job }) => {
// const {companyName, title, status, dateapplied} =job;

  useEffect(() => {
    getJobs();
  }, [getJobs]);
  return (
      <Fragment>
          <h1 className="text-primary">Welcome {user.name}</h1>

      </Fragment>
  ) ;
};

Dashboard.propTypes = {
  getJobs: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  job: state.job
});

export default connect(
  mapStateToProps,
  { getJobs }
)(Dashboard);
