import {takeLatest, put} from '@redux-saga/core/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

function* signup(action) {
  console.log('DARI ACTION SAGA SSIGN UP', action.data);
  try {
    console.log('TRY');
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

    console.log('INI DATA DARI BE SIGN UP', resRegister.data);
    if (resRegister && resRegister.data) console.log('Data dari BEEEEE');
    yield put({type: 'SIGNUP_SUCCESS'});
    Alert.alert('REGISTER SUCCESS, GO TO LOGIN SCREEN ');
  } catch (error) {
    console.log(error);
    yield put({type: 'SIGNUP_FAILED'});

    alert('TRY AGAIN LATER');
  }
}

function* rootSaga() {
  yield takeLatest('SIGNUP', signup);
}

export default rootSaga;
