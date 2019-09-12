import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';

// import logo from '../../images/logoresize.jpg';
import { getUserJobs } from '../../actions/jobActions';
import CardsItem from './CardsItem';

const JobsCard = ({ getUserJobs, job:{jobs}}) => {
  // console.log(jobs);
  useEffect(() => {
    getUserJobs();
  }, [getUserJobs]);

  return (
    <div>
      <Card>
        <div>
          {jobs.map(job => (
            <CardsItem key={job._id} job={job} />
          ))}
        </div>
      </Card>
    </div>
  );
};

JobsCard.propTypes = {
  getUserJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.job
});

export default connect(
  mapStateToProps,
  { getUserJobs }
)(JobsCard);
