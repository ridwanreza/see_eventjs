import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';
import signup from './auth';
export default combineReducers({
  auth,
  home,
  signup,
});
