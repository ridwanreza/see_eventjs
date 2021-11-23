import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../../../components/header/Header';
import {connect} from 'react-redux';
import CardEvntContent2 from '../../../components/CardEvntContent2';
import {useNavigation} from '@react-navigation/core';
const SeeAllEvents = props => {
  const navigation = useNavigation();
  useEffect(() => {
    props.getEventInHOme();
  }, []);
  const gabungan = props.dataHome.concat(
    props.dataHome2,
    props.dataHome3,
    props.dataHome4,
    props.dataHome5,
  );
  const renderCard = ({item}) => {
    console.log('INI CONSOLE DARI ITEM', item.id);
    return (
      <CardEvntContent2
        data={item}
        handleNavigate={() =>
          navigation.navigate('EventDetail', {gabungan: item.id})
        }
      />
    );
  };
  return (
    <View>
      <Header
        title_sec="Event Detail"
        navigation={() => props.navigation.navigate('Home')}
      />
      <View style={{}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          numColumns="2"
          data={gabungan}
          renderItem={renderCard}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

const reduxDispatch = dispatch => ({
  getEventInHOme: () => dispatch({type: 'GETEVENT START'}),
});

const reduxState = state => ({
  dataHome: state.home.dataHome,
  isLoading: state.home.isLoading,
  dataHome2: state.home.dataHome2,
  dataHome3: state.home.dataHome3,
  dataHome4: state.home.dataHome4,
  dataHome5: state.home.dataHome5,
  dataHome6: state.home.dataHome6,
});

export default connect(reduxState, reduxDispatch)(SeeAllEvents);
