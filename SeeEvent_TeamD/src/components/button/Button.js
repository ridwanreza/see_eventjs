import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Button(props) {
  //const navigation= useNavigation ()
  
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
          backgroundColor: '#214457',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={props.navigation}
        >
        <Text style={{color: 'white', fontSize: 16}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
