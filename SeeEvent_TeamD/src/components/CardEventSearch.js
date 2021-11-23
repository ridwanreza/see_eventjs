import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function CardEvent(props) {
  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          height: hp('16%'),
        }}>
        <Pressable onPress={props.handleNavigation}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#373737',
              }}>
              {props.data.dateEvent} @ {props.data.eventTime}
            </Text>
            <View style={{flexWrap: 'wrap', width: 174}}>
              <Text
                style={{
                  width: 174,
                  fontWeight: 'bold',
                  color: '#214457',
                }}>
                {props.data.title}
              </Text>
            </View>
            <Text>{props.data.user.firstName}</Text>
            <View
              style={{
                backgroundColor: '#F0F2E9',
                width: 72,
                justifyContent: 'center',
                marginHorizontal: 10,
                marginVertical: 5,
              }}>
              <Text
                style={{fontSize: 12, color: '#214457', textAlign: 'center'}}>
                {props.data.category.category}
              </Text>
            </View>
          </View>
        </Pressable>
        <View
          style={{
            flex: 1,

            alignItems: 'flex-end',
          }}>
          <Image
            source={{uri: `${props.data.photoEvent}`}}
            style={{
              borderRadius: 5,
              width: wp('35%'),
              height: hp('11%'),
            }}></Image>
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
              <Icon name="bookmark-outline" size={25} color={'#214457'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: '#E3E3E3',
          borderBottomWidth: 1,
          width: '90%',
          alignSelf: 'center',
          marginVertical: 5,
        }}
      />
    </View>
  );
}
