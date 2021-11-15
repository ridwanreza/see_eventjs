import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function HeaderMain(props) {
  return (
    <View>
      <LinearGradient
        colors={['#0E1D25', '#214457']}
        start={{x: 0.1, y: 0.25}}
        end={{x: 0.72, y: 0.25}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View
          style={{
            width: '100%',
            height: hp('12%'),
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 28,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {props.title_main}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
