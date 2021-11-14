import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import Header from '../../../components/header/Header';
import FooterSec from '../../../components/Footer/FooterSec';
import Buttonupload from '../../../components/button/Buttonupload';
import SelectDropdown from 'react-native-select-dropdown';
import TextInputWIcon from '../../../components/TextInputWIcon';
import TextComment from '../../../components/TextComment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '../../../components/button/Buttonupload';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function CreateMyevent(props) {
  const countries = [
    'Photography',
    'Design',
    'Development',
    'Marketing',
    'Business',
    'Lifestyle',
    'Music',
  ];

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('date');
  const [Show, setShow] = useState(false);
  const [text, setText] = useState('Date and Time');

  const onChange = (event, selectDate) => {
    const currrentDate = selectDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currrentDate);

    let tempDate = new Date(currrentDate);
    let FDate =
      tempDate.getMonth() +
      1 +
      '/' +
      tempDate.getDate() +
      '/' +
      tempDate.getFullYear();
    let FTime = +tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(FDate + '\n' + FTime);
    console.log(FDate + '(' + FTime + ')');
    console.log(text);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title_sec="Create Event"
        navigation={() => props.navigation.navigate('Event')}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1, height: '150%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
              borderRadius: 5,
              backgroundColor: 'red',
              width: '85%',
              height: 240,
            }}
            source={require(`../../../assets/uploadimg.png`)}
          />
        </View>
        <Buttonupload text="Upload Image" />
        <TextInputWIcon text="Title" />
        <TextInputWIcon
          text="Date And Time"
          iconright="calendar-outline"
          title="Open"
          isi={text}
          klik={() => showMode('date')}
        />

        {Show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Select Category'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown4BtnStyle}
            buttonTextStyle={styles.dropdown4BtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" color={'#444'} size={18} />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown4DropdownStyle}
            rowStyle={styles.dropdown4RowStyle}
            rowTextStyle={styles.dropdown4RowTxtStyle}
          />
        </View>
        <TextComment text=" Event Details " />
      </ScrollView>
      <FooterSec
        text="Create"
        // navigation={() => props.navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown4BtnStyle: {
    width: '85%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
  },
  dropdown4BtnTxtStyle: {
    color: 'grey',
    textAlign: 'left',
  },
  dropdown4DropdownStyle: {backgroundColor: 'white'},
  dropdown4RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown4RowTxtStyle: {color: '#444', textAlign: 'left'},
});
