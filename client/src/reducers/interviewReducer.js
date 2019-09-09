import {
  GET_INTERVIEW,
  GET_INTERVIEWS,
  ADD_INTERVIEW,
  INTERVIEW_ERROR
} from '../actions/types';

const initialState = {
  interviews: [],
  interview: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_INTERVIEWS:
      return {
        ...state,
        interviews: payload,
        loading: false
      };
    case GET_INTERVIEW:
      return {
        ...state,
        interview: payload,
        loading: false
      };
    case ADD_INTERVIEW:
      return {
        ...state,
        interviews: [payload, ...state.interviews],
        loading: false
      };
    case INTERVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
