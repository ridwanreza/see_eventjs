import React from 'react';
import {View, Text} from 'react-native';

export default function CardTextProp(props) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: '85%',
          height: 48,
          backgroundColor: 'white',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'grey',
          justifyContent: 'center',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>{props.text1}</Text>
      </View>
    </View>
  );
}
