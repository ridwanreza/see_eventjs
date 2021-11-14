import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function FooterSec(props) {
  return (
    <View style={{flex: 1, position: 'absolute', left: 0, right: 0, bottom: 0}}>
      <View
        style={{
          height: 88,
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
          }}
          onPress={props.navigation}>
          <Text style={{color: 'white', fontSize: 16}}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
