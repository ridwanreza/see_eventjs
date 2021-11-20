import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../../components/header/Header';
import FooterSec from '../../../components/Footer/FooterSec';
import Buttonupload from '../../../components/button/Buttonupload';
import CardTextProp from '../../../components/CardTextProp';
import {launchImageLibrary} from 'react-native-image-picker';
import imagedefault from '../../../assets/person.png';
import TextInputWIcon from '../../../components/TextInputWIcon';
export default function EditProfile(props) {
  const [image, setImage] = useState();
  const [rawImage, setRawImage] = useState();
  // For Image picker

  const options = {
    title: 'Upload Images',
    storageOptions: {
      skipBackup: false,
      path: 'images',
    },
  };

  function pickImage() {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancalled image picker');
      } else if (response.error) {
        console.log('ImagePicker Eror: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };

        setRawImage(source);
        setImage(response.assets[0].uri);
      }
    });
  }

  return (
    <View style={{flex: 1}}>
      <Header
        title_sec="Edit Profile"
        navigation={() => props.navigation.navigate('Profile')}
      />
      <View style={{alignSelf: 'center', marginVertical: 25}}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 130,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 100, width: 160, resizeMode: 'contain'}}
            source={!image ? imagedefault : {uri: image}}></Image>
        </View>
      </View>
      <Buttonupload
        text="Upload new picture"
        handleUpload={() => pickImage()}
      />
      <TextInputWIcon text="Pratur Anahata"></TextInputWIcon>
      <TextInputWIcon text="Pratama"></TextInputWIcon>
      <TextInputWIcon text="praturanhata45@gmail.com"></TextInputWIcon>
      <FooterSec text="Saved Profile" />
    </View>
  );
}
