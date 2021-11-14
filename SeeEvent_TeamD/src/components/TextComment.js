import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function TextComment(props) {
  return (
    <View
      style={{
        marginVertical: 10,
        backgroundColor: 'white',
        width: '85%',
        height: 160,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
        paddingRight: 10,
      }}>
      <TextInput
        placeholder={props.text}
        style={{
          justifyContent: 'flex-start',
          paddingHorizontal: 10,
          fontSize: 20,
        }}
        multiline={true}></TextInput>
    </View>
  );
}
