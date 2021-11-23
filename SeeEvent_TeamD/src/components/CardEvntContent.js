import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from './button/Button';
import CategoryButton from './button/CategoryButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CardEvntContent = props => {
  // console.log('INI DATA CARD >>>>', props.data);
  return (
    <View style={styles.container}>
      {/* IMAGE CONTAINER */}
      <TouchableOpacity onPress={props.handleNavigate}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{uri: `${props.data.photoEvent}`}}
          />
        </View>
      </TouchableOpacity>
      {/* CONTENT TEXT CONTAINER */}
      <View style={styles.txtContainer}>
        <View style={styles.compContainer}>
          <CategoryButton categoryText={props.data.category.category} />
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.touchOpc}>
              <Icon name="share-2" size={30} color={'grey'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpc}>
              <Icon
                // style={{ top: 30, height: 30}}
                name="bookmark"
                size={30}
                color={'grey'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.txtCont}>
          {/* DATE AND TIME */}
          <Text>
            {props.data.dateEvent} @ {props.data.eventTime}
          </Text>
          {/* EVENT TITLE */}
          <TouchableOpacity>
            <Text style={styles.textEvent}>{props.data.title}</Text>
          </TouchableOpacity>

          {/* EVENT OWNER*/}
          <Text style={{color: '#999999'}}>By {props.data.user.firstName}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardEvntContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: wp('60%'),
    height: hp('50%'),
    elevation: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  imgContainer: {
    width: wp('60%'),
    height: hp('28%'),
    borderRadius: 10,
  },
  img: {
    flex: 1,
    height: hp('28%'),
    width: wp('60%'),
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  txtContainer: {
    flex: 1,
    borderRadius: 10,
  },
  touchOpc: {
    margin: 5,
  },
  compContainer: {
    flexDirection: 'row',
    height: 40,
    margin: 10,

    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    width: '35%',
  },
  txtCont: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    marginBottom: 10,
  },
  textEvent: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#214457',
  },
});
