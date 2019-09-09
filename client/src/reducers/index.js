import {combineReducers} from 'redux'
import alert from './alertReducer'
import auth from './authReducer'
import job from './jobReducer'
import interview from './interviewReducer'

export default combineReducers({
    alert,
    auth, 
    job,
    interview
})