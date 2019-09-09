import axios from 'axios';
import {
  GET_INTERVIEW,
  GET_INTERVIEWS,
  ADD_INTERVIEW,
  INTERVIEW_ERROR
} from './types';
import { setAlert } from '../actions/alertActions';

// Get All Interviews

export const getUserInterviews = () => async dispatch => {
  try {
    const res = await axios.get('/api/interviews');

    dispatch({
      type: GET_INTERVIEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: INTERVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Interview by job ID
export const getInterview = id => async dispatch => {
  try {
    const res = await axios.get(`/api/interview/${id}`);

    dispatch({
      type: GET_INTERVIEW,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: INTERVIEW_ERROR,
      payload: { msg: err.respose.statusText, status: err.response.status }
    });
  }
};
