import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';
import signup from './signup';
import profRed from './profile';
export default combineReducers({
  auth,
  home,
  signup,
  profRed
});
