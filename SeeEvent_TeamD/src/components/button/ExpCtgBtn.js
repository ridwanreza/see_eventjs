import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ExpCtgBtn = props => {
  return (
    <View>
      <TouchableOpacity style={styles.ctgExpBtn}>
        <Text style={{fontSize: 20, textAlign: 'center', color: '#214457'}}>
          {props.textCategory}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpCtgBtn;

const styles = StyleSheet.create({
  ctgExpBtn: {
    borderWidth: 2,
    borderColor: '#214457',
    backgroundColor: 'white',
    height: hp('7%'),
    borderRadius: 99,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
});
