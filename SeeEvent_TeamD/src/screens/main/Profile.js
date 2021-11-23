import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import HeaderMain from '../../components/header/HeaderMain';
import CardPropImg from '../../components/CardPropImg';
import CardProfile from '../../components/CardProfile';
import {useNavigation} from '@react-navigation/core';
import Button from '../../components/button/Button';
import Buttonsign from '../../components/button/Buttonsign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = props => {
  useEffect(() => {
    props.getProfil();
  }, []);
  console.log('INI PROPS DARI DATAHOME 11 TOPKEN', props.token);
  console.log('INI PROPS DARI DATAHOME 11 DATANYA', props.dataHome11);
  console.log('INI DATA SDAERI REDUCER', props.dataisi);
  const navigation = useNavigation();
  console.log('NILAI TOKEN', props.token);
  if (props.token == false) {
    return (
      <View style={{flex: 1}}>
        <HeaderMain title_main="My Events" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 24, color: '#214457', fontWeight: 'bold'}}>
            Sign In or Sign Up
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: '#214457',
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            to Continue
          </Text>
          <Image
            source={require('../../assets/guest.png')}
            style={{marginVertical: 20, alignSelf: 'center'}}></Image>
          <Button
            text="Sign Up"
            navigation={() => props.navigation.navigate('SignUp')}
          />

          <Buttonsign
            text="Sign In"
            navigation={() => props.navigation.navigate('SignIn')}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1, height: hp('100%')}}>
        <HeaderMain title_main="Profile" />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 8,
          }}>
          <View
            style={{
              width: wp('85%'),
              height: hp('30'),
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 7,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <View>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 130,
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 100, width: 160, resizeMode: 'contain'}}
                  source={{uri: `${props.dataHome11.data?.image}`}}></Image>
              </View>
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'black',
                marginTop: 15,
              }}>
              {props.dataHome11.data?.firstName}
              {props.dataHome11.data?.lastName}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginVertical: 5,
                color: 'black',
              }}>
              {props.dataHome11.data?.email}
            </Text>
          </View>
        </View>
        <CardProfile
          text1="Edit Profile"
          iconleft="person-outline"
          iconright="chevron-forward-outline"
          navigation={() => props.navigation.navigate('EditProfile')}
        />
        <CardProfile
          text1="Edit Password"
          iconleft="person-outline"
          iconright="chevron-forward-outline"
          navigation={() => props.navigation.navigate('EditPassword')}
        />
        <CardProfile
          text1="Saved Events"
          iconleft="people-sharp"
          iconright="chevron-forward-outline"
          navigation={() => props.navigation.navigate('SavedEvent')}
        />
        <CardProfile
          text1="Log out"
          iconleft="log-out-sharp"
          iconright="chevron-forward-outline"
          navigation={async () => {
            props.delTOken();
            props.navigation.navigate('Idx1');
          }}
        />
        <Text
          style={{
            color: 'grey',
            alignSelf: 'center',
            marginVertical: 5,
            fontSize: 12,
          }}>
          Version v1.1.2
        </Text>
      </View>
    );
  }
};

const reduxDispatch = dispatch => ({
  getProfil: () => dispatch({type: 'GETPROFIL_ID'}),
  delTOken: () => dispatch({type: 'REMOVE_TOKEN'}),
});

const reduxState = state => ({
  token: state.auth.token,
  dataHome11: state.home.dataHome11,
  dataisi: state.home,
});

export default connect(reduxState, reduxDispatch)(Profile);
