import {all} from 'redux-saga/effects';
import authSaga from './atuhsaga';
import homeSaga from './homeSaga';
export default function* rootSaga() {
  yield all([authSaga(), homeSaga()]);
}
