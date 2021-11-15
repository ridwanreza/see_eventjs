import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CardEvent from '../../components/CardEvent';
import HeaderWSearch from '../../components/header/HeaderWSearch';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/core';
const Explore = props => {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderWSearch />
      <Text
        style={{
          fontWeight: '700',
          fontSize: 18,
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginTop: 22,
        }}>
        Showing Results for "How To"
      </Text>
      <ScrollView style={styles.eventCont}>
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
        <CardEvent
          date="SUN, OCT 24 @ 1:15 AM ICT"
          text1="Hitting Reset: How to Land A Job in UX Design"
          text2="By Adit nento"
          text3="Design"
        />
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  eventCont: {
    width: '100%',
    height: '72%',
  },
});
