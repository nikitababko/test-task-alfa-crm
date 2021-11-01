import { combineReducers } from 'redux';

import customers from './customerReducer';
import auth from './authReducer';

export default combineReducers({
  customers,
  auth,
});
