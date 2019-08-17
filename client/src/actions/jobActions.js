import axios from 'axios';
import { GET_JOBS, GET_JOB, ADD_JOB, DELETE_JOB, JOB_ERROR } from './types';
import { setAlert } from '../actions/alertActions';

// GET jobs

export const getJobs = () => async dispatch => {
  try {
    const res = await axios.get('/api/jobs');

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

// GET job
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
export const addJob = FormData => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/jobs', FormData, config);
    dispatch({
      type: ADD_JOB,
      payload: res.data
    });
    dispatch(setAlert('Job Created', 'success'));
  } catch (err) {
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