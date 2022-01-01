import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Button(props) {
  //const navigation= useNavigation ()

  return (
    <View
      style={{
        // alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: '85%',
          height: hp('7%'),
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#214457',
        }}
        disabled={props.disabled}
        onPress={props.navigation}>
        <Text style={{color: 'white', fontSize: 16}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
