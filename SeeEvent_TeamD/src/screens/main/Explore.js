import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import CardEvent from '../../components/CardEvent';
import HeaderWSearch from '../../components/header/HeaderWSearch';
import HeaderMain from '../../components/header/HeaderMain';
import {useNavigation} from '@react-navigation/core';
import Button from '../../components/button/Button';
import Buttonsign from '../../components/button/Buttonsign';
import {connect} from 'react-redux';
import HeaderXp from '../../components/headerexp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardEvent2 from '../../components/CardEvent2';
const Explore = props => {
  const navigation = useNavigation();
  const [userinput, setUserinput] = useState();
  console;
  console.log('NILAI RTOKEN DI EXPOLORE >>>', props.token);

  useEffect(() => {
    if (props.route.params) {
      props.passingId(props.route.params.passingan);
    }
  }, [props.route.params?.passingan]);

  console.log('INI DATA yang ada di explore', props.route);
  console.log('ini DARI DATA HOME 12', props.dataHome12);
  console.log('ini DARI DATA HOME 9', props.dataHome9);
  console.log('INI DARI INPUT USER', userinput);

  const renderCard = ({item}) => {
    return (
      <CardEvent
        data={item}
        // handleNavigate={() =>
        //   navigation.navigate('EventDetail', {gabungan: item.id})
        // }
      />
    );
  };

  const renderCard1 = ({item}) => {
    return (
      <CardEvent2
        data={item}
        // handleNavigate={() =>
        //   navigation.navigate('EventDetail', {gabungan: item.id})
        // }
      />
    );
  };
  const showing = 'Showing ';
  const result = 'Result from ';
  const category = ' Category ';
  console.log('INI USER INPUT >>>>>>>>>>', userinput);
  if (!props.route.params) {
    return (
      <View style={{flex: 1, backgroundColor: 'white', height: 300}}>
        <HeaderXp
          Pencarian={e => setUserinput(e)}
          handleSearch={() => props.getSearch(userinput)}
          valuetextinput={userinput}
        />
        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 18,
              alignSelf: 'flex-start',
              marginLeft: 20,
              marginTop: 22,
              color: 'black',
              flexWrap: 'wrap',
              width: wp('80%'),
            }}>
            {showing} {props.dataHome12?.totalItems}
          </Text>
        </View>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={props.dataHome12}
            renderItem={renderCard1}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <HeaderXp
        Pencarian={e => setUserinput(e)}
        handleSearch={() => props.getSearch(userinput)}
        valuetextinput={userinput}
      />
      <View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            alignSelf: 'flex-start',
            marginLeft: 20,
            marginTop: 22,
            color: 'black',
            flexWrap: 'wrap',
            width: wp('80%'),
          }}>
          {showing} {props.dataHome9.length} {result}
          {props.route.params.passingan == 1
            ? 'Photograpy'
            : props.route.params.passingan == 2
            ? 'Design'
            : props.route.params.passingan == 3
            ? 'Development'
            : props.route.params.passingan == 4
            ? 'Marketing'
            : props.route.params.passingan == 5
            ? 'Bussiness'
            : props.route.params.passingan == 6
            ? 'Lifestyle'
            : 'Music'}
          {category}
        </Text>
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={props.dataHome9}
          renderItem={renderCard}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

const reduxDispatch = dispatch => ({
  passingId: passExplore =>
    dispatch({type: 'GETEXPLORE_ID', value: passExplore}),
  getSearch: passTextinput => {
    console.log('DARI DISPARTCH EXPLORE >>>>>>>>>>', passTextinput);
    dispatch({type: 'SEARCH_START', value1: passTextinput});
  },
});

const reduxState = state => ({
  token: state.auth.token,
  dataHome12: state.home.dataHome12,
  dataHome9: state.home.dataHome9,
  isLoading: state.home.isLoading,
});

export default connect(reduxState, reduxDispatch)(Explore);
