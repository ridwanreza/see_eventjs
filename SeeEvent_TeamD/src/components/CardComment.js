import React from 'react';
import {View, Text, Image} from 'react-native';

export default function CardCommet(props) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '85%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View>
          <Image
            style={{borderRadius: 40, width: 40, height: 40}}
            source={{uri: `${props.data.user.image}`}}></Image>
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={{fontSize: 16, color: 'black'}}>
            {props.data.user?.firstName}
          </Text>
          <Text style={{fontSize: 12}}>{props.data.waktuKomen}</Text>
        </View>
      </View>
      <View style={{width: '85%'}}>
        <Text style={{fontSize: 16, flexWrap: 'wrap', marginVertical: 10}}>
          {props.data.comment}
        </Text>
      </View>
    </View>
  );
}
