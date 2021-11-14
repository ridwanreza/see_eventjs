import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function CardProfile(props) {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={props.navigation}
        style={{
          alignItems: 'center',
          elevation: 4,
          borderRadius: 10,
          marginVertical: 8,
          backgroundColor: 'white',
          width: '85%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <Text>
            <Icon name={props.iconleft} size={20} color={'#2F5062'} />
          </Text>
          <Text style={{marginLeft: 20}}>{props.text1}</Text>
        </View>

        <Text style={{marginHorizontal: 10}}>
          <Icon name={props.iconright} size={20} color={'#2F5062'} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
