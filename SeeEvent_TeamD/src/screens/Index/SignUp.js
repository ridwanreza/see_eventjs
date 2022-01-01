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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
const SignUp = props => {
  const [fisrtname, setFirstname] = useState();
  const [lastname, setLasname] = useState();
  const [email, setEmail] = useState();
  const [password, setPasssword] = useState();
  const [confirm, setConfirm] = useState();
  return (
    <View>
      <Header
        title_sec="Sign Up"
        navigation={() => props.navigation.navigate('Idx')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, height: hp('135%')}}>
        <View>
          <Text
            style={{
              fontSize: 40,
              marginVertical: 32,
              color: '#214457',
              fontWeight: '700',
              textAlign: 'center',
            }}>
            Join Us!
          </Text>
          <View style={{marginBottom: 5}}>
            <TextInputWIcon
              text="First Name"
              ChangeText={text => setFirstname(text)}></TextInputWIcon>
          </View>
          <View style={{marginBottom: 5}}>
            <TextInputWIcon
              text="Last Name"
              ChangeText={text => setLasname(text)}></TextInputWIcon>
          </View>
          <View style={{marginBottom: 5}}>
            <TextInputWIcon
              text="Email"
              ChangeText={text => setEmail(text)}></TextInputWIcon>
          </View>
          <View style={{marginBottom: 5}}>
            <TextInputPassword
              text="Password"
              isFocused={true}
              ChangeText={text => setPasssword(text)}></TextInputPassword>
          </View>
          <View style={{marginBottom: 10}}>
            <TextInputPassword
              text="Confirm Password"
              ChangeText={text => setConfirm(text)}></TextInputPassword>
          </View>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Button
              bg={props.isLoadingSignup ? 'grey' : '#214457'}
              disabled={props.isLoadingSignup ? true : false}
              text="Sign Up"
              navigation={() =>
                props.signup(
                  {fisrtname, lastname, email, password, confirm},
                  props.navigation,
                )
              }
            />
          </View>
          <Pressable
            style={{alignSelf: 'center'}}
            onPress={() => Alert.alert(' ', 'Try Again Later')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#3E89AE',
                marginTop: 10,
                marginBottom: 10,
              }}>
              Having issue when sign up?
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 36,
              marginRight: 36,
              marginTop: 10,
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
            <ButtonWhite text="Continue with Facebook" icon="logo-facebook" />
          </View>
          <View style={{marginBottom: 30}}>
            <ButtonWhite text="Continue with Google" icon="logo-google" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const reduxDispatchSignup = dispatch => ({
  signup: (dataSignup, nav) =>
    dispatch({type: 'SIGNUP', data: dataSignup, navigasi: nav}),
});

const reduxState = state => ({
  isLoadingSignup: state.signup.isLoadingSignup,
  token: state.signup.token,
});

export default connect(reduxState, reduxDispatchSignup)(SignUp);
