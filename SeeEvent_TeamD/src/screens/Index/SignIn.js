import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import Header from '../../components/header/Header';
import TextInputWIcon from '../../components/TextInputWIcon';
import ButtonWhite from '../../components/button/Buttonwhite';
import Button from '../../components/button/Button';
import TextInputPassword from '../../components/TextInputPassword';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

const SignIn = props => {
  const [email, setEmail] = useState();
  const [password, setPasssword] = useState();
  const navigation = useNavigation();

  console.log('INI IS LOADING', props.token);

  const handleNavigasi = () => {
    const response = props.register({email, password});
    // if (props.token) {
    //   navigation.navigate('GoToHomeScreen');
    // } else {
    //   Alert.alert('Email or Password incorrect');
    // }
  };

  return (
    <View>
      <Header
        title_sec="Sign In"
        navigation={() => props.navigation.navigate('Idx')}
      />
      <Text
        style={{
          fontSize: 40,
          marginTop: 36,
          marginBottom: 32,
          textAlign: 'center',
          color: '#214457',
          fontWeight: '700',
        }}>
        Welcome Back!
      </Text>
      <View style={{marginBottom: 10}}>
        <TextInputWIcon text="Email" ChangeText={text => setEmail(text)} />
      </View>
      <View>
        <TextInputPassword
          text="Password"
          ChangeText={text => setPasssword(text)}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          text={props.isLoading == false ? 'Sign In' : ' Loading....'}
          navigation={() => handleNavigasi()}
        />
      </View>
      <Pressable
        style={{alignSelf: 'center'}}
        onPress={() => props.navigation.navigate('Idx')}>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: '#3E89AE',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Forgot Password?
        </Text>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 36,
          marginRight: 36,
          marginBottom: 10,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: '#E3E3E3'}} />
        <View>
          <Text
            style={{
              fontSize: 16,
              color: '#999999',
              textAlign: 'center',
              width: 50,
            }}>
            or
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#E3E3E3'}} />
      </View>

      <View>
        <ButtonWhite text="Login with Facebook" icon="logo-facebook" />
      </View>
      <View>
        <ButtonWhite text="Login with Google" icon="logo-google" />
      </View>

      {/* <Pressable 
                style={{backgroundColor: 'green', 
                        width: 200, 
                        margin: 10}} 
                        onPress={() => props.navigation.navigate('Idx')}>
                <Text >Go To Index Page</Text>
            </Pressable>
            <Pressable style={{backgroundColor: 'green', width: 200, margin: 10}} onPress={() => props.navigation.navigate('GoToHomeScreen')}>
                <Text >Go To Main Screen/Home Screen</Text>
            </Pressable> */}
    </View>
  );
};

const reduxDispatchSign = dispatch => ({
  register: dataRegister => dispatch({type: 'LOGIN', data: dataRegister}),
});

const reduxState = state => ({
  isLoading: state.auth.isLoading,
  token: state.auth.token,
  isLoggedIn: state.auth.isLoggedIn,
});
export default connect(reduxState, reduxDispatchSign)(SignIn);
