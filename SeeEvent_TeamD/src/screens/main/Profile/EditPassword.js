import React from 'react';
import {View, Text, Alert} from 'react-native';
import Header from '../../../components/header/Header';
import FooterSec from '../../../components/Footer/FooterSec';
import TextInputPassword from '../../../components/TextInputPassword';

export default function EditPassword(props) {
  return (
    <View style={{flex: 1}}>
      <Header
        title_sec="Edit Password"
        navigation={() => props.navigation.navigate('Profile')}
      />
      <View style={{marginVertical: 20}}>
        <TextInputPassword text="Old Password" />
        <TextInputPassword text="New Password" />
        <TextInputPassword text="Confirm Password" />
      </View>
      <FooterSec text="Change Password" />
    </View>
  );
}
