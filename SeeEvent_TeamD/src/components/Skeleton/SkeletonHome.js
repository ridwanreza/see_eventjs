import React from 'react';
import {View, Text} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function SkeletonEvent() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 5,
        height: hp('50%'),
        width: wp('60%'),
      }}>
      <SkeletonPlaceholder backgroundColor="#b7bbbe">
        <View
          style={{
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: hp('28%'),
              width: wp('60%'),
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}></View>
          <View style={{marginHorizontal: 10}}>
            <View
              style={{
                height: hp('3%'),
                width: wp('22%'),
                marginVertical: 5,
              }}></View>
            <View
              style={{
                height: hp('3%'),
                width: wp('45%'),
                marginVertical: 5,
              }}></View>
            <View
              style={{
                height: hp('3%'),
                width: wp('35%'),
                marginVertical: 5,
              }}></View>
            <View
              style={{
                height: hp('3%'),
                width: wp('23%'),
                marginVertical: 5,
              }}></View>
            <View
              style={{
                height: hp('3%'),
                width: wp('15%'),
                marginVertical: 5,
              }}></View>
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}
