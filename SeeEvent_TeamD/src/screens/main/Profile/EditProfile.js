import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../../components/header/Header';
import FooterSec from '../../../components/Footer/FooterSec';
import Buttonupload from '../../../components/button/Buttonupload';
import CardTextProp from '../../../components/CardTextProp';
export default function EditProfile(props) {
  return (
    <View style={{flex: 1}}>
      <Header
        title_sec="Edit Profile"
        navigation={() => props.navigation.navigate('Profile')}
      />
      <View style={{alignSelf: 'center', marginVertical: 25}}>
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
            source={require('../../../assets/person.png')}></Image>
        </View>
      </View>
      <Buttonupload text="Upload new picture" />
      <CardTextProp text1="Pratur Anahata" />
      <CardTextProp text1="Pratama" />
      <CardTextProp text1="praturanhata45@gmail.com" />
      <FooterSec text="Saved Profile" />
    </View>
  );
}
