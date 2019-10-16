import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import JobsCard from '../layout/Cards';


import { getUserJobs } from '../../actions/jobActions';
import Spinner from '../layout/Spinner';
import DashboardBtns from './DashboardBtns'; //? Change name to Btns for reusability
// import DashboardList from './DashboardList';

/*Notes********************
todo- need to set a status to the db for logic to display only current jobs
*/

const Dashboard = ({
  getUserJobs,
  auth: { user },
  job: { loading, jobs }
}) => {
  
  useEffect(() => {
    getUserJobs();
  }, [getUserJobs]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='lead text-primary'>Welcome {user && user.name}</h1>
      {jobs.length !== 0 ? (
        <Fragment>
          <JobsCard /> {' '}
          {/* <DashboardList/> */}
          <DashboardBtns />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not added any jobs, please add a job</p>
          <Link to='/add-job' className='btn btn-primary my-1'>
            Add A Job
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getUserJobs: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  job: state.job
});

export default connect(
  mapStateToProps,
  { getUserJobs }
)(Dashboard);
