import axios from 'axios';
import { GET_JOBS, GET_JOB, ADD_JOB, DELETE_JOB, JOB_ERROR } from './types';
import { setAlert } from './alertActions';

// GET jobs

export const getUserJobs = () => async dispatch => {
  try {
    const res = await axios.get('/api/jobs/all');

    dispatch({
      type: GET_JOBS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// GET job by ID
export const getJob = id => async dispatch => {
  try {
    const res = await axios.get(`/api/jobs/${id}`);

    dispatch({
      type: GET_JOB,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Job
export const addJob = formData => async dispatch => {
 
  // const body = JSON.stringify(FormData);
  try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };
    const res = await axios.post('/api/jobs', formData, config);
    console.log(res);
    dispatch({
      type: ADD_JOB,
      payload: res.data
    });
    dispatch(setAlert('Job Created', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete job
export const deleteJob = id => async dispatch => {
  try {
    await axios.delete(`/api/jobs/${id}`);

    dispatch({
      type: DELETE_JOB,
      payload: id
    });

    dispatch(setAlert('Job removed', 'success'));
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
