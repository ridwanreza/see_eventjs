import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import CardEventMyEvent from '../../../components/CardEventMyEvent';
import CardSAVED from '../../../components/CardSAVED';
import Header from '../../../components/header/Header';

const SavedEvents = props => {
  useEffect(() => {
    props.passingToken(props.token);
  }, []);
  console.log('DATA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', props.dataHome13);
  const renderCard = ({item}) => {
    return (
      <CardSAVED
        data={item}
        // handleNavigate={() =>
        //   navigation.navigate('EventDetail', {gabungan: item.id})
        // }
      />
    );
  };
  return (
    <View>
      <Header
        title_sec="Saved Events"
        navigation={() => props.navigation.navigate('Profile')}
      />
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={props.dataHome13}
          renderItem={renderCard}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

const reduxDispatch = dispatch => ({
  passingToken: passingToken =>
    dispatch({type: 'GETSAVED_START', value: passingToken}),
});

const reduxState = state => ({
  token: state.auth.token,
  dataHome13: state.home.dataHome13,
  datauth: state.home,
});

export default connect(reduxState, reduxDispatch)(SavedEvents);
