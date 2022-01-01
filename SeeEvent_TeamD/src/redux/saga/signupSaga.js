import {takeLatest, put} from '@redux-saga/core/effects';
import axios from 'axios';
import {ToastAndroid} from 'react-native';

const showToast = () => {
  ToastAndroid.show(
    'Register Success, Please login first ',
    ToastAndroid.SHORT,
  );
};

const showToastFailed = e => {
  ToastAndroid.show(e, ToastAndroid.SHORT);
};

function* signup(action) {
  console.log('ini passingan ke saga', action.data, action.navigasi);
  try {
    const formData = new FormData();
    formData.append('firstName', action.data.firstname);
    formData.append('lastName', action.data.lastname);
    formData.append('email', action.data.email);
    formData.append('password', action.data.password);
    formData.append('confirmPassword', action.data.confirm);
    console.log(formData);
    let headers = {
      // Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };

    const resRegister = yield axios.post(
      'https://timdevent.herokuapp.com/signup',
      formData,
      {headers},
    );

    yield put({type: 'SIGNUP_SUCCESS'});
    showToast();
    action.navigasi.navigate('SignIn');
  } catch (error) {
    yield put({type: 'SIGNUP_FAILED', error: error.response.data.message});
    showToastFailed(error.response.data.message);
  }
}

function* rootSaga() {
  yield takeLatest('SIGNUP', signup);
}

export default rootSaga;
