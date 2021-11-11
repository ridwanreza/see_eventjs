import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
          backgroundColor: '#214457',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Icon
          name="chatbubble-outline"
          size={25}
          color={'white'}
          style={{marginHorizontal: 30}}
        />
        <Text style={{color: 'white', fontSize: 16}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
