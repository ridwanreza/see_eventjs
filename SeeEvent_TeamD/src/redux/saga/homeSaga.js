import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';

function* getEventInHome(action) {
  try {
    console.log('GETEVENT START');
    const resGetEventHOme = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/events/tody',
    });

    const resGetEventHOme2 = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/events/tomorrow',
    });

    const resGetEventHOme3 = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/events/we',
    });

    const resGetEventHOme4 = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/events/month/',
    });

    const resGetEventHOme5 = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/events/year/',
    });

    const resGetEventHOme6 = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/events/cat/7',
    });
    const resGetEventHOme7 = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/events',
    });

    yield put({
      type: 'GETEVENT_START_SUCCES',
      data: resGetEventHOme.data.events,
      data2: resGetEventHOme2.data.events,
      data3: resGetEventHOme3.data.events,
      data4: resGetEventHOme4.data.events,
      data5: resGetEventHOme5.data.events,
      data6: resGetEventHOme6.data.events,
      data7: resGetEventHOme6.data.events,
    });
  } catch (err) {
    console.log('EROR GET EVENT FROM API:', err);
  }
}

function* rootSaga() {
  yield takeLatest('GETEVENT START', getEventInHome);
}

export default rootSaga;
