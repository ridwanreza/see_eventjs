import React from 'react';
import {View, Text, Image} from 'react-native';
import HeaderMain from '../../components/header/HeaderMain';
import CardEvent from '../../components/CardEvent';
import Floatingicon from '../../components/Floatingicon';
import {useNavigation} from '@react-navigation/core';
import SkeletonEvent from '../../components/Skeleton/SkeletonEvent';
import Button from '../../components/button/Button';
import Buttonsign from '../../components/button/Buttonsign';
const Event = props => {
  const token = 123;
  const navigation = useNavigation();
  if (token == null) {
    return (
      <View style={{flex: 1}}>
        <HeaderMain title_main="My Events" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 24, color: '#214457', fontWeight: 'bold'}}>
            Sign In or Sign Up
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: '#214457',
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            to Continue
          </Text>
          <Image
            source={require('../../assets/guest.png')}
            style={{marginVertical: 20, alignSelf: 'center'}}></Image>
          <Button
            text="Sign Up"
            navigation={() => props.navigation.navigate('SignUp')}
          />

          <Buttonsign
            text="Sign In"
            navigation={() => props.navigation.navigate('SignIn')}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <HeaderMain title_main="My Events" />
        <CardEvent
          date="SUN, OCT 24 @ 1:15 AM ICT"
          text1="Hitting Reset: How to Land A Job in UX Design"
          text2="By Adit nento"
          text3="Design"
          handleNavigation={() =>
            navigation.navigate(
              'EventDetail',
              // {movie: item.id}
            )
          }
        />
        <CardEvent
          date="SUN, OCT 24 @ 1:15 AM ICT"
          text1="Hitting Reset: How to Land A Job in UX Design"
          text2="By Adit nento"
          text3="Design"
        />

        <SkeletonEvent />

        <Floatingicon />
      </View>
    );
  }
};
export default Event;
