import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function TextInputPassword(props) {
  const [isOpen, setIsOpen] = React.useState(true);
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
        secureTextEntry={isOpen ? true : false}
        style={{
          justifyContent: 'center',
          paddingHorizontal: 10,
          fontSize: 20,
        }}></TextInput>
      <TouchableOpacity>
        <Icon
          // style={{ top: 30, height: 30}}
          size={20}
          color={'grey'}
          onPress={() => setIsOpen(!isOpen)}
          name={isOpen ? 'eye-off' : 'eye'}
        />
      </TouchableOpacity>
    </View>
  );
}
