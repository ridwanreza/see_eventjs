import {all} from 'redux-saga/effects';
import authSaga from './atuhsaga';
import homeSaga from './homeSaga';
import signupSaga from './signupSaga';
export default function* rootSaga() {
  yield all([authSaga(), homeSaga(), signupSaga()]);
}
