import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import Ion from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isUpcomingModal, setUpcomingModal] = useState(false);
  const [isCategoryModal, setCategoryModal] = useState(false);

  const navigation = useNavigation();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal1 = () => {
    setUpcomingModal(!isUpcomingModal);
  };
  const toggleModal2 = () => {
    setCategoryModal(!isCategoryModal);
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <ScrollView horizontal={true}>
          <View style={styles.btn}>
            <Pressable style={styles.press} onPress={toggleModal}>
              <Text style={styles.txtmid}>
                Sort
                {/* {passingmodal ? passingmodal : 'Sort'} */}
              </Text>
              <AntDesign name="down" style={styles.icons} />
            </Pressable>
            <Pressable style={styles.press} onPress={toggleModal1}>
              <Text style={styles.txtmid1}>All Upcoming</Text>
              <AntDesign name="down" style={styles.icons} />
            </Pressable>
            <Pressable style={styles.press} onPress={toggleModal2}>
              <Text style={styles.txtmid1}>Any Category</Text>
              <AntDesign name="down" style={styles.icons} />
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <Modal isVisible={isModalVisible} testID={'modal'} style={styles.view}>
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-end',
            borderRadius: 16,
            borderBottomEndRadius: 0,
            borderBottomLeftRadius: 0,
            padding: 20,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <TouchableOpacity title="Hide modal" onPress={toggleModal}>
              <Ion name="close" size={25} color={'black'} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'NotoSans-Reguler',
                color: '#000000',
                paddingLeft: 10,
                paddingBottom: 5,
              }}>
              Category
            </Text>
          </View>
          <View>
            <Text
              style={styles.text}
              onPress={() =>
                navigation.navigate('Explore', {passingmodal: 'Date'})
              }>
              Data
            </Text>

            <Text style={styles.text}>Name</Text>
          </View>
        </View>
      </Modal>
      <Modal isVisible={isUpcomingModal} testID={'modal'} style={styles.view}>
        <View
          style={{
            width: '100%',
            height: 250,
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-end',
            borderRadius: 16,
            borderBottomEndRadius: 0,
            borderBottomLeftRadius: 0,
            padding: 20,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <TouchableOpacity title="Hide modal" onPress={toggleModal1}>
              <Ion name="close" size={25} color={'black'} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'NotoSans-Reguler',
                color: '#000000',
                paddingLeft: 10,
                paddingBottom: 5,
              }}>
              Category
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Today</Text>
            <Text style={styles.text}>Tomorrow</Text>
            <Text style={styles.text}>This Week</Text>
            <Text style={styles.text}>This Month</Text>
            <Text style={styles.text}>All Upcoming</Text>
          </View>
        </View>
      </Modal>
      <Modal isVisible={isCategoryModal} testID={'modal'} style={styles.view}>
        <View
          style={{
            width: '100%',
            height: 330,
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-end',
            borderRadius: 16,
            borderBottomEndRadius: 0,
            borderBottomLeftRadius: 0,
            padding: 20,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <TouchableOpacity title="Hide modal" onPress={toggleModal2}>
              <Ion name="close" size={25} color={'black'} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'NotoSans-Reguler',
                color: '#000000',
                paddingLeft: 10,
                paddingBottom: 5,
              }}>
              Category
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Photograpy</Text>
            <Text style={styles.text}>Design</Text>
            <Text style={styles.text}>Development</Text>
            <Text style={styles.text}>Marketing</Text>
            <Text style={styles.text}>Business</Text>
            <Text style={styles.text}>Lifestyle</Text>
            <Text style={styles.text}>Music</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 15,
    padding: 5,
  },
  press: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 10,
    paddingHorizontal: 20,
    height: hp('5%'),
    marginHorizontal: 10,
  },
  txtmid: {
    fontFamily: 'NotoSans-Reguler',
    fontSize: 16,
    color: '#214457',
    alignSelf: 'center',
  },
  txtmid1: {
    fontFamily: 'NotoSans-Reguler',
    fontSize: 16,
    color: '#214457',
  },
  icons: {
    fontSize: 16,
    color: '#214457',
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'NotoSans-Reguler',
    fontStyle: 'normal',
    marginVertical: 5,
  },
});

// {

// // <Text>Date</Text>
// // <Text>Name</Text> */
// // }
