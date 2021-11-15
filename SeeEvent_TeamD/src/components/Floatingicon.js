import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Floatingicon() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        left: '80%',
        right: 10,
        bottom: 0,
        backgroundColor: '#214457',
        width: wp('14%'),
        height: hp('8%'),
        borderRadius: 30,
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('CreateEvent')}>
        <Icon name="add-outline" size={35} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}
