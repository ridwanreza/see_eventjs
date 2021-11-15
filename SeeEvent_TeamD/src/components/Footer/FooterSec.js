import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function FooterSec(props) {
  return (
    <View style={{flex: 1, position: 'absolute', left: 0, right: 0, bottom: 0}}>
      <View
        style={{
          height: hp('12%'),
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 20,
        }}>
        <TouchableOpacity
          style={{
            width: '85%',
            height: 56,
            backgroundColor: '#214457',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
