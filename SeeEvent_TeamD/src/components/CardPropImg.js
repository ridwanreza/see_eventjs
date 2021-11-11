import React from 'react';
import {View, Text, Image} from 'react-native';

export default function CardPropImg(props) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <View
        style={{
          width: '85%',
          height: 227,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 7,
          borderRadius: 20,
        }}>
        <View>
          <View
            style={{
              height: 130,
              width: 130,
              borderRadius: 100,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 130, width: 190}}
              source={require('../assets/person.png')}></Image>
          </View>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginVertical: 5}}>
          {props.text1}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginVertical: 5}}>
          {props.text2}
        </Text>
      </View>
    </View>
  );
}
