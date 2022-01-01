import {underline} from 'chalk';
import React from 'react';
import {View, Text, Pressable, StatusBar, Image} from 'react-native';
import Button from '../../components/button/Button2';
import Buttonsign from '../../components/button/Buttonsign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Idx = props => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: hp('100%'),
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Image source={require('../../assets/splash.png')} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 60,
            marginBottom: 20,
          }}>
          <Image
            source={require('../../assets/Event.png')}
            style={{resizeMode: 'stretch', height: 40, width: 56}}
          />
          <Text
            style={{fontSize: 32, marginHorizontal: 10, fontStyle: 'italic'}}>
            SeeEvent
          </Text>
        </View>
        <View
          style={{
            width: wp('85%'),
            height: hp('40%'),
          }}>
          <View style={{marginVertical: 5}}>
            <Button
              text="Sign Up"
              navigation={() => props.navigation.navigate('SignUp2')}
            />
          </View>
          <Buttonsign
            text="Sign In"
            navigation={() => props.navigation.navigate('SignIn2')}
          />
          <Pressable
            style={{alignSelf: 'center'}}
            onPress={() => props.navigation.navigate('GoToHomeScreen2')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#3E89AE',
                marginVertical: 10,
              }}>
              Continue as guest
            </Text>
          </Pressable>
          <Text style={{alignSelf: 'center', marginVertical: 40}}>
            Version v1.1.2
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Idx;
