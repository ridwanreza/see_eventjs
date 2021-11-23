import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Header from '../../../components/header/Header';
import TextComment from '../../../components/TextComment';
import Buttonsubmit from '../../../components/button/Buttonsubmit';
import FooterDetailEvent from '../../../components/Footer/FooterDetailEvent';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import Commet from '../../../components/CardComment';
import {ActivityIndicatorBase} from 'react-native';
const EventDetail = props => {
  useEffect(() => {
    props.passingEventDetailId(props.route.params.gabungan);
  }, [renderCard]);

  console.log(
    'INI DARI EVENT DETAIL >>>>>>>>>>>>',
    props.route.params.gabungan,
  );
  console.log('INI DATA HOME 8', props.dataHome8.komen);
  console.log('INI IS LOADING', props.isLoading);

  const renderCard = ({item}) => {
    return <Commet data={item} />;
  };
  const kosong = ' ';
  return (
    <View style={{flex: 1}}>
      <Header
        title_sec="Event Detail"
        navigation={() => props.navigation.navigate('Home')}
      />
      <ScrollView
        // contentContainerStyle={{flexGrow: 1, height: hp('400%')}}
        showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '85%',
              marginTop: 30,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                color: 'black',
                letterSpacing: 2,
                flexWrap: 'wrap',
              }}>
              {props.dataHome8.data?.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '85%',
            }}>
            <Icon
              style={{
                flex: 1,
                paddingLeft: 10,
              }}
              name="calendar"
              size={15}
              color={'black'}
            />
            <Text style={{flex: 6, fontSize: 14}}>
              {props.dataHome8.data?.dateEvent} @{' '}
              {props.dataHome8.data?.eventTime}
            </Text>
            <Text
              style={{
                flex: 3,
                fontSize: 12,
                textAlign: 'right',
                paddingRight: 10,
              }}>
              {props.dataHome8.categoryId == 1
                ? 'Photograpy'
                : props.dataHome8.categoryId == 2
                ? 'Design'
                : props.dataHome8.categoryId == 3
                ? 'Development'
                : props.dataHome8.categoryId == 4
                ? 'Marketing'
                : props.dataHome8.categoryId == 5
                ? 'Bussiness'
                : props.dataHome8.categoryId == 6
                ? 'Lifestyle'
                : 'Music'}
            </Text>
          </View>
          <Image
            style={{
              borderRadius: 5,
              marginVertical: 20,
              width: wp('85%'),
              height: hp('40%'),
            }}
            source={{uri: `${props.dataHome8.data?.photoEvent}`}}></Image>

          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={{borderRadius: 40, width: 40, height: 40}}
                source={{uri: `${props.dataHome8.data?.user?.image}`}}></Image>
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text>Created by</Text>
              <Text style={{fontWeight: 'bold'}}>
                {props.dataHome8.data?.user?.firstName}
                {kosong}
                {props.dataHome8.data?.user?.lastName}
              </Text>
            </View>
          </View>
          <View style={{width: '85%'}}>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 10,
                color: 'black',
              }}>
              Details
            </Text>
            <Text style={{textAlign: 'justify', lineHeight: 30}}>
              {props.dataHome8.data?.detail}
            </Text>
            <Text style={{textAlign: 'left', lineHeight: 30, color: 'black'}}>
              Speaker Name : {props.dataHome8.data?.speakerName}
            </Text>
            <Text style={{textAlign: 'left', lineHeight: 30, color: 'black'}}>
              Speaker Jobtitle : {props.dataHome8.data?.speakerJobTitle}
            </Text>
            <Text style={{textAlign: 'left', lineHeight: 30, color: 'black'}}>
              Link Meet : {props.dataHome8.data?.linkMeet}
            </Text>
            <Text style={{fontSize: 20, color: 'black'}}>Comments</Text>
          </View>
        </View>
        {props.dataHome8.komen?.map((item, i) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}
            key={i}>
            <View
              style={{
                flexDirection: 'row',
                width: '85%',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View>
                <Image
                  style={{borderRadius: 40, width: 40, height: 40}}
                  source={{uri: `${item.user.image}`}}></Image>
              </View>
              <View style={{marginHorizontal: 10}}>
                <Text style={{fontSize: 16, color: 'black'}}>
                  {item.user?.firstName}
                </Text>
                <Text style={{fontSize: 12}}>{item.waktuKomen}</Text>
              </View>
            </View>
            <View style={{width: '85%'}}>
              <Text
                style={{fontSize: 16, flexWrap: 'wrap', marginVertical: 10}}>
                {item.comment}
              </Text>
            </View>
          </View>
        ))}

        <TextComment text="Enter your comment here" />
        <Buttonsubmit text="Submit" />
      </ScrollView>
      <FooterDetailEvent text1="Share" text2="Save" />
    </View>
  );
};

const reduxDispatch = dispatch => ({
  passingEventDetailId: passEventDtl =>
    dispatch({type: 'GETEVENT_ID', value: passEventDtl}),
});

const reduxState = state => ({
  dataHome8: state.home.dataHome8,
  isLoading: state.home.isLoading,
});
export default connect(reduxState, reduxDispatch)(EventDetail);
