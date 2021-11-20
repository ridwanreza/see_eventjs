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
      yield put({type: 'LOGIN_SUCCESS', token: resLogin.data.token});
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'LOGIN_FAILED'});
    alert('Email or Password inccorect');
  }
}

function* rootSaga() {
  yield takeLatest('LOGIN', login);
}

export default rootSaga;
