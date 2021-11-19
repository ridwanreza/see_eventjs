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

function* register(action) {
  try {
    console.log('LOGIN START');
    const resRegister = yield axios({
      method: 'POST',
      url: 'https://timdevent.herokuapp.com/signin',
      data: action.data,
    });
    if (resRegister && resRegister.data) {
      yield storeToken(resRegister.data.token);
      yield put({type: 'LOGIN_SUCCESS', token: resRegister.data.token});
    }
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield takeLatest('LOGIN', register);
}

export default rootSaga;
