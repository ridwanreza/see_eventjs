import React from 'react';
import {View, Text, Pressable} from 'react-native';
import HeaderMain from '../../components/header/HeaderMain';
import CardPropImg from '../../components/CardPropImg';
import CardProfile from '../../components/CardProfile';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Explore = props => {
  return (
    <View style={{flex: 1, height: hp('100%')}}>
      <HeaderMain title_main="Profile" />

      <CardPropImg
        text1="Pratur Anahata Pratama"
        text2="praturanhata45@gmail.com"
      />
      <CardProfile
        text1="Edit Profile"
        iconleft="person-outline"
        iconright="chevron-forward-outline"
        navigation={() => props.navigation.navigate('EditProfile')}
      />
      <CardProfile
        text1="Edit Password"
        iconleft="person-outline"
        iconright="chevron-forward-outline"
        navigation={() => props.navigation.navigate('EditPassword')}
      />
      <CardProfile
        text1="Saved Events"
        iconleft="people-sharp"
        iconright="chevron-forward-outline"
        navigation={() => props.navigation.navigate('SavedEvent')}
      />
      <CardProfile
        text1="Log out"
        iconleft="log-out-sharp"
        iconright="chevron-forward-outline"
        navigation={() => props.navigation.navigate('Idx')}
      />
      <Text
        style={{
          color: 'grey',
          alignSelf: 'center',
          marginVertical: 5,
          fontSize: 12,
        }}>
        Version v1.1.2
      </Text>
    </View>
  );
};

export default Explore;
