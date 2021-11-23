import React, {useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import HeaderMain from '../../components/header/HeaderMain';
import CardEvent from '../../components/CardEvent';
import Floatingicon from '../../components/Floatingicon';
import {useNavigation} from '@react-navigation/core';
import SkeletonEvent from '../../components/Skeleton/SkeletonEvent';
import Button from '../../components/button/Button';
import Buttonsign from '../../components/button/Buttonsign';
import {connect} from 'react-redux';
import CardEventMyEvent from '../../components/CardEventMyEvent';
const Event = props => {
  const token = 123;
  const navigation = useNavigation();
  console.log('INI PROPS DARI DATAHOME 10 TOPKEN', props.token);
  console.log('INI PROPS DARI DATAHOME 10 DATANYA', props.dataHome10);
  console.log('INI DATA AUTH', props.datauth);
  useEffect(() => {
    props.passingToken(props.token);
  }, []);
  const renderCard = ({item}) => {
    return (
      <CardEventMyEvent
        data={item}
        // handleNavigate={() =>
        //   navigation.navigate('EventDetail', {gabungan: item.id})
        // }
      />
    );
  };
  if (props.token == false) {
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
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={props.dataHome10}
            renderItem={renderCard}
            keyExtractor={(item, index) => index}
          />
        </View>
        <SkeletonEvent />

        <Floatingicon />
      </View>
    );
  }
};

const reduxDispatch = dispatch => ({
  passingToken: passingToken =>
    dispatch({type: 'GETMYEVENT_ID', value: passingToken}),
});

const reduxState = state => ({
  token: state.auth.token,
  dataHome10: state.home.dataHome10,
  datauth: state.home,
});

export default connect(reduxState, reduxDispatch)(Event);
