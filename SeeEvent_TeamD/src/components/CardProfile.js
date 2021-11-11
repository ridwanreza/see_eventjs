import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function CardProfile(props) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: 'white',
          width: '85%',
          height: 58,
          flexDirection: 'row',
          elevation: 7,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10,
          marginVertical: 8,
        }}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Text>
              <Icon name={props.iconleft} size={25} color={'#2F5062'} />
            </Text>
            <Text style={{marginLeft: 20}}>{props.text1}</Text>
          </View>
        </TouchableOpacity>
        <Text style={{marginHorizontal: 10}}>
          <Icon name={props.iconright} size={25} color={'#2F5062'} />
        </Text>
      </View>
    </View>
  );
}
