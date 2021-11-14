import React from 'react';
import {View, Text, Image, TouchableHighlightComponent} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderMain from './header/HeaderMain';

export default function CardEvent(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.handleNavigation}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
            // alignItems: 'center',
            paddingVertical: 20,
            height: 150,
          }}>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: '#373737',
                marginVertical: 5,
              }}>
              {props.date}
            </Text>
            <View style={{flexWrap: 'wrap', width: 174}}>
              <Text
                style={{
                  width: 174,
                  marginVertical: 5,
                  fontWeight: 'bold',
                  color: '#214457',
                }}>
                {props.text1}
              </Text>
            </View>
            <Text style={{marginVertical: 4}}>{props.text2}</Text>
            <View
              style={{
                backgroundColor: '#F0F2E9',
                width: 72,
                marginHorizontal: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 12, color: '#214457'}}>
                {props.text3}
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Image
              source={require('../assets/imgevent.png')}
              style={{borderRadius: 5, width: 135, height: 88}}></Image>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginVertical: 5,
              }}>
              <TouchableOpacity>
                <Icon
                  name="share-social-outline"
                  size={25}
                  color={'#214457'}
                  style={{marginHorizontal: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="bookmark" size={25} color={'#214457'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#E3E3E3',
          borderBottomWidth: 1,
          width: '90%',
          alignSelf: 'center',
        }}
      />
    </View>
  );
}
