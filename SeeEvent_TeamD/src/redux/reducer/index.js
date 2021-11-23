import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';
import signup from './signup';
export default combineReducers({
  auth,
  home,
  signup,
});
