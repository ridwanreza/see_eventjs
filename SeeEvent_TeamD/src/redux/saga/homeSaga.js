import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
function* getEventInHome(action) {
  try {
    console.log('GETEVENT START');
    // const resGetEventHOme = yield axios({
    //   method: 'GET',
    //   url: 'https://timdevent.herokuapp.com/events?page=1&waktu=month&kategori=7&nata=date',
    // });

    // const resGetEventHOme2 = yield axios({
    //   method: 'GET',
    //   url: 'https://timdevent.herokuapp.com/events?page=1&waktu=month&kategori=1&nata=date',
    // });

    const resGetEventHOme3 = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/events?page=1&waktu=month&kategori=2&nata=date',
    });

    // const resGetEventHOme4 = yield axios({
    //   method: 'GET',
    //   url: 'https://timdevent.herokuapp.com/events?page=1&waktu=month&kategori=3&nata=date',
    // });

    // const resGetEventHOme5 = yield axios({
    //   method: 'GET',
    //   url: 'https://timdevent.herokuapp.com/events?page=1&waktu=month&kategori=4&nata=date',
    // });

    const resGetEventHOme6 = yield axios({
      method: 'GET',
      url: 'https://timdevent.herokuapp.com/events?page=1&waktu=month&kategori=5&nata=date',
    });
    // const resGetEventHOme7 = yield axios({
    //   method: 'GET',
    //   url: 'https://timdevent.herokuapp.com/events?page=1&waktu=month&kategori=6&nata=date',
    // });

    yield put({
      type: 'GETEVENT_START_SUCCES',
      // data: resGetEventHOme.data.events,
      // data2: resGetEventHOme2.data.events,
      data3: resGetEventHOme3.data.events,
      // data4: resGetEventHOme4.data.events,
      // data5: resGetEventHOme5.data.events,
      data6: resGetEventHOme6.data.events,
      // data7: resGetEventHOme7.data.events,
    });
  } catch (err) {
    console.log('EROR GET EVENT FROM API:', err);
  }
}

function* getEvtDetail(action) {
  try {
    const resGetEventDetail = yield axios({
      method: 'GET',
      url: `https://timdevent.herokuapp.com/events/${action.value}`,
    });
    yield put({
      type: 'GETEVENT_ID_SUCCESS',
      data8: resGetEventDetail.data,
    });
    console.log('INI DARI GET EVENT DETAIL', data8);
  } catch (error) {
    console.log(error);
  }
}

function* getExplore(action) {
  try {
    const resGetExplore = yield axios({
      method: 'GET',
      url: `https://timdevent.herokuapp.com/events/cat/${action.value}`,
    });
    yield put({
      type: 'GETEXPLORE_SUCCESS',
      data9: resGetExplore.data.events,
    });
    console.log('INI DARI GET EXPLORE', data9);
  } catch (error) {
    console.log('INI EROPR DATA 9', error);
  }
}

function* getMyevent(action) {
  try {
    const access_token = yield AsyncStorage.getItem('TOKEN');
    console.log('INI DATA DARI TOKENNNN>>>>>>>>>>>>>>>>>>', access_token);

    console.log('INI DARI TOKEN DI SAGA');

    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      access_token: access_token,
    };
    const resGetMyEvent = yield axios.get(
      'https://timdevent.herokuapp.com/bookmark',
      {headers},
    );
    yield put({
      type: 'GETMYEVENT_SUCCESS',
      data10: resGetMyEvent.data.events,
    });
    console.log('INI DARI GETMYEVENT', resGetMyEvent);
  } catch (error) {
    console.log('INI DARI MYEVENT', error);
  }
}

function* getProfile(action) {
  try {
    const access_token = yield AsyncStorage.getItem('TOKEN');
    console.log('INI DATA DARI TOKENNNN>>>>>>>>>>>>>>>>>>', access_token);

    console.log('INI DARI TOKEN DI SAGA');

    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      access_token: access_token,
    };
    const resProfile = yield axios.get(
      'https://timdevent.herokuapp.com/user/myprofile',
      {headers},
    );
    yield put({
      type: 'GETPROFIL_SUCCESS',
      data11: resProfile.data,
    });
    console.log('INI DARI GETPROFIL', resProfile);
  } catch (error) {
    console.log('INI DARI PROFIL', error);
  }
}

function* getEditProf(action) {
  try {
    const access_token = yield AsyncStorage.getItem('TOKEN');
    const password = yield AsyncStorage.getItem('PASSWORD');
    const formData = new FormData();
    formData.append('firstName', action.value.firstname);
    formData.append('lastName', action.value.lastname);
    formData.append('email', action.value.email);
    formData.append('password', password);
    formData.append('image', action.value.rawImage);
    console.log('INI DARI EDIT PROFIL XXXXXXXXXXXXXXXXXXX', formData);
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      access_token: access_token,
    };
    const resProfile = yield axios({
      method: 'PUT',
      url: `https://timdevent.herokuapp.com/user/update`,
      data: formData,
      headers: headers,
    });
    yield put({
      type: 'EDITPROFIL_SUCCESS',
      data11: resProfile.data,
    });
    console.log('INI DARI EDITPROFIL', resProfile.data);
  } catch (error) {
    console.log('INI DARI PROFIL', error);
  }
}

function* getSearch(action) {
  try {
    console.log('NILAI DARI VALUE SEARCH', action);
    let headers = {};
    const resSearch = yield axios({
      method: 'GET',
      url: `https://timdevent.herokuapp.com/events/cari?cari=${action.value1}`,
      headers: headers,
    });
    yield put({
      type: 'SEARCH_SUCCESS',
      data12: resSearch.data.events,
    });
    console.log('INI DARI hasil SEARCH AZXIOS 2', resSearch.data);
  } catch (error) {
    console.log('INI DARI SEARCH', error);
  }
}

function* getSaved(action) {
  try {
    const access_token = yield AsyncStorage.getItem('TOKEN');
    console.log('INI DATA DARI TOKENNNN>>>>>>>>>>>>>>>>>>', access_token);

    console.log('INI DARI TOKEN DI SAGA');

    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      access_token: access_token,
    };
    const resSaved = yield axios.get(
      'https://timdevent.herokuapp.com/user/myevent',
      {headers},
    );
    yield put({
      type: 'GETSAVED_SUCCESS',
      data13: resSaved.data.events,
    });
    console.log('INI DARI GETMYEVENT', resSaved);
  } catch (error) {
    console.log('INI DARI MYEVENT', error);
  }
}

function* rootSaga() {
  yield takeLatest('GETEVENT START', getEventInHome);
  yield takeLatest('GETEVENT_ID', getEvtDetail);
  yield takeLatest('GETEXPLORE_ID', getExplore);
  yield takeLatest('GETMYEVENT_ID', getMyevent);
  yield takeLatest('GETPROFIL_ID', getProfile);
  yield takeLatest('EDITPROFIL_START', getEditProf);
  yield takeLatest('SEARCH_START', getSearch);
  yield takeLatest('GETSAVED_START', getSaved);
}

export default rootSaga;
