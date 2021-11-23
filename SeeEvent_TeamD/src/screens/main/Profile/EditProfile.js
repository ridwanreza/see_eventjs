import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../../components/header/Header';
import FooterSec from '../../../components/Footer/FooterSec';
import Buttonupload from '../../../components/button/Buttonupload';
import CardTextProp from '../../../components/CardTextProp';
import {launchImageLibrary} from 'react-native-image-picker';
import imagedefault from '../../../assets/person.png';
import TextInputWIcon from '../../../components/TextInputWIcon';
import {connect} from 'react-redux';
const EditProfile = props => {
  const [image, setImage] = useState();
  const [rawImage, setRawImage] = useState();
  const [lastname, setLastName] = useState();
  const [firstname, setFirstName] = useState();
  const [email, setEmail] = useState();

  console.log('DATA DI EDI PASSSSS>>>>>>>>>>>>', props.dataHome11);
  useEffect(() => {
    props.getEditProfil();
  }, []);
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
      <TextInputWIcon
        text={props.dataHome11.data?.firstName}
        ChangeText={text => setFirstName(text)}></TextInputWIcon>
      <TextInputWIcon
        text={props.dataHome11.data?.lastName}
        ChangeText={text => setLastName(text)}></TextInputWIcon>
      <TextInputWIcon
        text={props.dataHome11.data?.email}
        ChangeText={text => setEmail(text)}></TextInputWIcon>
      <FooterSec
        text="Saved Profile"
        handleNavigation={() =>
          props.editProfil({lastname, firstname, email, rawImage})
        }
      />
    </View>
  );
};

const reduxDispatch = dispatch => ({
  getEditProfil: () => dispatch({type: 'GETPROFIL_ID'}),

  editProfil: passingDataFLE =>
    dispatch({type: 'EDITPROFIL_START', value: passingDataFLE}),
});

const reduxState = state => ({
  token: state.auth.token,
  dataHome11: state.home.dataHome11,
  dataisi: state.home,
});

export default connect(reduxState, reduxDispatch)(EditProfile);
