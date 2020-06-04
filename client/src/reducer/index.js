import { combineReducers } from 'redux';

import auth from './auth';
import alert from './alert';
import carte from './carte'

import flyer from './flyer'

export default combineReducers({

  auth,
  alert,
  carte,
flyer
});