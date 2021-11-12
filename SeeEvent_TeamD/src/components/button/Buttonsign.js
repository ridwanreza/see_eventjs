import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
export default function Button(props) {
  return (
    <View
      style={{
        // alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <TouchableOpacity
        style={{
          width: '85%',
          height: 56,
          backgroundColor: 'white',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#214457',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={props.navigation}
        >
        <Text style={{color: '#214457', fontSize: 16}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
