import React, {useState} from 'react';
import {Text, StyleSheet, StatusBar, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../components/modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
let Header = props => {
  const [nama, setNama] = useState('');

  return (
    <LinearGradient
      colors={['#0E1D25', '#214457']}
      start={{x: 0.1, y: 0.25}}
      end={{x: 0.72, y: 0.25}}
      style={styles.container}>
      <View
        style={{
          // flex: 1,
          // paddingHorizontal: 20,
          // marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#999999',
          borderRadius: 10,
          width: wp('85%'),
          height: hp('7%'),
          marginVertical: 40,
          marginLeft: 20,
          marginBottom: -5,
        }}>
        <TouchableOpacity onPress={() => props.handleSearch()}>
          <Icon name="search" style={styles.icon} />
        </TouchableOpacity>
        <View style={{marginTop: 5}}>
          <TextInput
            returnKeyType={'search'}
            onSubmitEditing={e => props.Pencarian(e)}
            style={styles.inpt}
            placeholder="Search"
            placeholderTextColor="#999999"
            value={props.valutextinput}
            onChangeText={e => props.Pencarian(e)}>
            <Text style={styles.text}>{nama}</Text>
          </TextInput>
        </View>
      </View>
      <Modal />
      <StatusBar backgroundColor="transparent" translucent={true} />
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 148,
    paddingHorizontal: 10,
    height: hp('22%'),
    justifyContent: 'center',
  },
  inpt: {
    fontSize: 20,
    fontFamily: 'NotoSans-Reguler',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 27,
    color: '#999999',
    marginLeft: 3,
  },
  text: {
    fontFamily: 'NotoSans-Reguler',
    fontSize: 20,
    color: '#999999',
  },
});
