import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { getUserJobs} from '../../actions/jobActions'


const Jobs = ({jobs, getJobs}) => {
    return (
        <div>
            Jobs
        </div>
    )
}

Jobs.propTypes = {
jobs: PropTypes.array.isRequired,
getUserJobs: PropTypes.func.isRequired
}

export default connect(null, {getUserJobs})(Jobs);