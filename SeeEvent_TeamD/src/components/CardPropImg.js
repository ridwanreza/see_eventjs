import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function CardPropImg(props) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
      }}>
      <View
        style={{
          width: wp('85%'),
          height: hp('30'),
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 7,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <View>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 130,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 100, width: 160, resizeMode: 'contain'}}
              source={require('../assets/person.png')}></Image>
          </View>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            marginTop: 15,
          }}>
          {props.text1}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 5,
            color: 'black',
          }}>
          {props.text2}
        </Text>
      </View>
    </View>
  );
}
