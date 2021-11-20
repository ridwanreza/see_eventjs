import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import CardEvntContent from '../../components/CardEvntContent';
import HeaderMainTab from '../../components/header/HeaderMainTab';
import ExpCtgBtn from '../../components/button/ExpCtgBtn';
import SkeletonHome from '../../components/Skeleton/SkeletonHome';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

const Explore = props => {
  const navigation = useNavigation();
  console.log(props.dataHome);
  console.log(props.isLoading);

  useEffect(() => {
    props.getEventInHOme();
  }, []);

  const gabungan = props.dataHome.concat(
    props.dataHome2,
    props.dataHome3,
    props.dataHome4,
    props.dataHome5,
  );

  console.log('INI GABUNGAN DATA ', gabungan);
  const renderCard = ({item}) => {
    console.log('INI CONSOLE DARI ITEM', item);
    return (
      <CardEvntContent
        data={item}
        handleNavigate={() =>
          navigation.navigate('EventDetail', {gabungan: item})
        }
      />
    );
  };
  return (
    <View>
      <HeaderMainTab title_main="SeeEvent" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: hp('150%')}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
            paddingHorizontal: 20,
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Starting Soon
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#3E89AE',
                textDecorationLine: 'underline',
                fontSize: 14,
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        {props.isLoading == false ? (
          <View style={{height: hp('52%')}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={gabungan}
              renderItem={renderCard}
              keyExtractor={(item, index) => index}
            />
          </View>
        ) : (
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <SkeletonHome />
            <SkeletonHome />
            <SkeletonHome />
          </View>
        )}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Explore By Category
          </Text>
        </View>

        <View style={{marginVertical: 3}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ExpCtgBtn
              textCategory="Photography"
              handleNavigate={() =>
                navigation.navigate('EventDetail', {gabungan: item.id})
              }
            />
            <ExpCtgBtn textCategory="Design" />
            <ExpCtgBtn textCategory="Technology" />
            <ExpCtgBtn textCategory="Photography" />
            <ExpCtgBtn textCategory="Photography" />
            <ExpCtgBtn textCategory="Design" />
            <ExpCtgBtn textCategory="Technology" />
            <ExpCtgBtn textCategory="Photography" />
          </ScrollView>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
            paddingHorizontal: 20,
            marginVertical: 5,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Music Events
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#3E89AE',
                textDecorationLine: 'underline',
                fontSize: 14,
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        {props.isLoading == false ? (
          <View style={{height: hp('57%')}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={props.dataHome6}
              renderItem={renderCard}
              keyExtractor={(item, index) => index}
            />
          </View>
        ) : (
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <SkeletonHome />
            <SkeletonHome />
            <SkeletonHome />
          </View>
        )}
      </ScrollView>
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

export default connect(reduxState, reduxDispatch)(Explore);
