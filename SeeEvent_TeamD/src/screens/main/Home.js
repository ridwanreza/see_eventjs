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
const Explore = props => {
  console.log(props.dataHome);
  console.log(props.isLoading);
  useEffect(() => {
    props.getEventInHOme();
  }, []);

  const renderCard = ({item}) => {
    return <CardEvntContent data={item} />;
  };
  return (
    <View>
      <HeaderMainTab title_main="SeeEvent" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: hp('144%')}}>
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
              data={props.dataHome}
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
          <TouchableOpacity>
            <Text style={{color: '#3E89AE', textDecorationLine: 'underline'}}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ExpCtgBtn textCategory="Photography" />
            <ExpCtgBtn textCategory="Design" />
            <ExpCtgBtn textCategory="Technology" />
            <ExpCtgBtn textCategory="Photography" />
            <ExpCtgBtn textCategory="Photography" />
            <ExpCtgBtn textCategory="Design" />
            <ExpCtgBtn textCategory="Technology" />
            <ExpCtgBtn textCategory="Photography" />
          </ScrollView>
        </View>
        {props.isLoading == false ? (
          <View style={{height: hp('57%')}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={props.dataHome}
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
});

export default connect(reduxState, reduxDispatch)(Explore);
