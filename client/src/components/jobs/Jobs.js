import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getUserJobs } from '../../actions/jobActions';
import JobsCard from '../layout/Cards';

/*****************************************Notes*********************
 * display via cards for all jobs for User in the db
 * buttons on card will display all info for clicked on job with a modal and buttons to link to an
 *      interview, delete job, archive job, edit job
 */

const Jobs = ({ getUserJobs, auth: { user }, job: { loading, jobs } }) => {

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
          <JobsCard />         
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
  )
};

Jobs.propTypes = {
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
)(Jobs);
