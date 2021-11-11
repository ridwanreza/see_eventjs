import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './src/components/header/Header';
import CardProfile from './src/components/CardProfile';
import CardPropImg from './src/components/CardPropImg';
import CardTextProp from './src/components/CardTextProp';
import TouchOp from './src/components/Footer/FooterSec';
import FooterSec from './src/components/Footer/FooterSec';
import Button from './src/components/button/Button';
import TextInputWIcon from './src/components/TextInputWIcon';
import HeaderMainTab from './src/components/header/HeaderMainTab';
import HeaderMain from './src/components/header/HeaderMain';
import Buttonwhite from './src/components/button/Buttonwhite';
import Buttonupload from './src/components/button/Buttonupload';
import Buttonsubmit from './src/components/button/Buttonsubmit';
import FooterDetailEvent from './src/components/Footer/FooterDetailEvent';
import Cusdropdown from './src/components/dropdown/Cusdropdown';
const App = () => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <Header title_sec="Profile" /> */}
      {/* <HeaderMainTab title_main="sdfsdf" style="italic" /> */}
      <HeaderMain title_main="sdfsdf" />
      <CardPropImg
        text1="Pratur Anahata Pratama"
        text2="praturanhata45@gmail.com"
      />
      <Cusdropdown data={countries} />
      <FooterDetailEvent text1="sdfsdf" text2="sdfsdf" />
    </View>
  );
};

export default App;
