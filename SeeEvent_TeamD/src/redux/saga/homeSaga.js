import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';

function* getEventInHome(action) {
  try {
    console.log('GETEVENT START');

    const resGetEventHOme = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/',
    });
    console.log(resGetEventHOme.data.dataStarted);
    yield put({
      type: 'GETEVENT_START_SUCCES',
      data: resGetEventHOme.data.dataStarted,
    });
  } catch (err) {
    console.log('EROR GET EVENT FROM API:', err);
  }
}

function* rootSaga() {
  yield takeLatest('GETEVENT START', getEventInHome);
}

export default rootSaga;
