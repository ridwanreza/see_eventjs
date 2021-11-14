import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function TextInputWIcon(props) {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: 'white',
        width: '85%',
        height: 48,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
        paddingRight: 10,
      }}>
      <TextInput
        placeholder={props.text}
        style={{
          justifyContent: 'center',
          paddingHorizontal: 10,
          fontSize: 20,
        }}
        defaultValue={props.isi}></TextInput>
      <TouchableOpacity>
        <Icon
          // style={{ top: 30, height: 30}}
          size={20}
          color={'grey'}
          name={props.iconright}
          onPress={props.klik}
        />
      </TouchableOpacity>
    </View>
  );
}
