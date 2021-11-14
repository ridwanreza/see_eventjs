import React from 'react';
import {View, Text} from 'react-native';
import CardEvent from '../../../components/CardEvent';
import Header from '../../../components/header/Header';
export default function SavedEvents(props) {
  return (
    <View>
      <Header
        title_sec="Saved Events"
        navigation={() => props.navigation.navigate('Profile')}
      />
      <CardEvent
        date="SUN, OCT 24 @ 1:15 AM ICT"
        text1="Hitting Reset: How to Land A Job in UX Design"
        text2="By Adit nento"
        text3="Design"
      />

      <CardEvent
        date="SUN, OCT 24 @ 1:15 AM ICT"
        text1="Hitting Reset: How to Land A Job in UX Design"
        text2="By Adit nento"
        text3="Design"
      />

      <CardEvent
        date="SUN, OCT 24 @ 1:15 AM ICT"
        text1="Hitting Reset: How to Land A Job in UX Design"
        text2="By Adit nento"
        text3="Design"
      />
    </View>
  );
}
