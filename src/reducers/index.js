import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer'
import streamReducer from './streamRedcer'

export default combineReducers({
    //dummy data just to get rid of the error messages
   auth: authReducer,
   form: formReducer,
   streams: streamReducer
})