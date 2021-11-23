import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CategoryButton = props => {
  return (
    <View>
      <TouchableOpacity style={styles.ctgBtn}>
        <Text style={{color: '#214457', fontSize: 12}}>
          {props.categoryText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  ctgBtn: {
    borderRadius: 4,
    backgroundColor: '#F0F2E9',
    height: hp('5%'),
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 6,
  },
});
