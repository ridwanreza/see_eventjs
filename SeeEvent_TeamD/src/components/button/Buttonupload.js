import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Button(props) {
  return (
    <View
      style={{
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '85%',
        height: 56,
        // backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#214457',
        borderWidth: 2,
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Icon
          name="cloud-upload-outline"
          size={25}
          color={'black'}
          style={{marginHorizontal: 20}}
        />
        <Text
          style={{
            color: '#214457',
            fontSize: 16,
            // marginHorizontal: 20,
            textAlign: 'center',
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
