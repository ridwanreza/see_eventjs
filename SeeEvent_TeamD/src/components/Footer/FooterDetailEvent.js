import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function FooterSec(props) {
  return (
    <View style={{flex: 1, position: 'absolute', left: 0, right: 0, bottom: 0}}>
      <View
        style={{
          height: 88,
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 20,
          flexDirection: 'row',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity
          style={{
            width: 135,
            height: 56,
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: '#214457',
            flexDirection: 'row',
          }}>
          <Icon
            name="share-social-outline"
            size={25}
            color={'#214457'}
            style={{marginHorizontal: 10}}
          />
          <Text style={{color: '#214457', fontSize: 16}}>{props.text1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 135,
            height: 56,
            backgroundColor: '#214457',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon
            name="bookmark-outline"
            size={25}
            color={'white'}
            style={{marginHorizontal: 10}}
          />
          <Text style={{color: 'white', fontSize: 16}}>{props.text2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
