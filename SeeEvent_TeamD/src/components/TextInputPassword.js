import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function TextInputPassword(props) {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isFocused, setIsFocused] = React.useState();

  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        width: '85%',
        height: hp('7%'),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
        paddingRight: 10,
        backgroundColor: 'white',
        borderColor: isFocused ? 'black' : 'grey',
      }}>
      <TextInput
        placeholder={props.text}
        secureTextEntry={isOpen ? true : false}
        style={{
          justifyContent: 'center',
          paddingHorizontal: 10,
          fontSize: 20,
          width: '85%',
          height: 48,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity>
        <Icon
          // style={{ top: 30, height: 30}}
          size={20}
          color={isFocused ? 'black' : 'grey'}
          onPress={() => setIsOpen(!isOpen)}
          name={isOpen ? 'eye-off' : 'eye'}
        />
      </TouchableOpacity>
    </View>
  );
}
