import React from 'react';
import {View, StatusBar, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';
export default function Header(props) {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient colors={['rgba(14, 29, 37, 1)', 'rgba(33, 68, 87, 1)']}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View
          style={{
            width: '100%',
            height: 100,
            justifyContent: 'flex-end',
            paddingBottom: 14,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginHorizontal: 14,
            }}>
            <TouchableOpacity
              style={{marginHorizontal: 14}}
              onPress={props.navigation}>
              <Icon name="arrow-back-outline" size={25} color={'white'} />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {props.title_sec}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
