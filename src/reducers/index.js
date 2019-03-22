import { combineReducers } from 'redux';
import authReducer from './authReducer'

export default combineReducers({
    //dummy data just to get rid of the error messages
   auth: authReducer
})