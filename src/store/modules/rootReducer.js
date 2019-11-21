import { combineReducers } from 'redux';

// all reducers
import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
})