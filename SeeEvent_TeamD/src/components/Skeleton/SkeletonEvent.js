import React from 'react';
import {View, Text} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function SkeletonEvent() {
  return (
    <View>
      <SkeletonPlaceholder backgroundColor="#999999">
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: wp('95%'),
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingHorizontal: 10}}>
              <View
                style={{
                  width: wp('46%'),
                  height: hp('2%'),
                  marginVertical: 5,
                }}></View>
              <View
                style={{
                  width: wp('46%'),
                  height: hp('6%'),
                  marginVertical: 5,
                }}></View>
              <View
                style={{
                  width: wp('46%'),
                  height: hp('2%'),
                  marginVertical: 5,
                }}></View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginLeft: 30,
              }}>
              <View
                style={{
                  width: wp('35%'),
                  height: hp('13%'),
                  borderRadius: 10,
                }}></View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: wp('92%'),
            height: hp('2%'),
            alignSelf: 'center',
            marginRight: 5,
          }}></View>
      </SkeletonPlaceholder>
    </View>
  );
}
