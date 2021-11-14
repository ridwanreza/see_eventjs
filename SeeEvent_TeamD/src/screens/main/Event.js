import React from 'react';
import {View, Text} from 'react-native';
import HeaderMain from '../../components/header/HeaderMain';
import CardEvent from '../../components/CardEvent';
import Floatingicon from '../../components/Floatingicon';
import {useNavigation} from '@react-navigation/core';
const Event = props => {
  const navigation = useNavigation();
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

      <Floatingicon />
    </View>
  );
};

export default Event;
