import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async value => {
  try {
    await AsyncStorage.setItem('TOKEN', value);
    console.log('STORAGE SUCCES');
  } catch (e) {
    console.log('STORAGE FAIILED');
  }
};

const storePassword = async value => {
  try {
    await AsyncStorage.setItem('PASSWORD', value);
    console.log('STORAGE SUCCES');
  } catch (e) {
    console.log('STORAGE FAIILED');
  }
};

function* login(action) {
  try {
    console.log('LOGIN START');
    const resLogin = yield axios({
      method: 'POST',
      url: 'https://timdevent.herokuapp.com/signin',
      data: action.data,
    });
    if (resLogin && resLogin.data) {
      yield storeToken(resLogin.data.token);
      // yield storeToken(resLogin.data);
      yield put({type: 'LOGIN_SUCCESS', token: resLogin.data.token});
      yield storePassword(action.data.password);
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'LOGIN_FAILED'});
    alert('Email or Password inccorect');
  }
}

function* removetokenn(action) {
  try {
    resLogin = yield AsyncStorage.removeItem('TOKEN');
    yield put({type: 'REMOVE_TOKEN_SUCCESS', token: ''});
  } catch (err) {
    console.log(err);
    yield put({type: 'REMOVE_TOKEN_FAILED'});
  }
}

function* rootSaga() {
  yield takeLatest('LOGIN', login);
  yield takeLatest('REMOVE_TOKEN', removetokenn);
}

export default rootSaga;
