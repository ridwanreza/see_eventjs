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
export default function HeaderMainTab(props) {
  return (
    <View>
      <LinearGradient colors={['rgba(14, 29, 37, 1)', 'rgba(33, 68, 87, 1)']}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View
          style={{
            width: '100%',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 28,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/eventwhite.png')}
            style={{width: 37, height: 26, marginHorizontal: 10}}></Image>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              fontStyle: props.style,
            }}>
            {props.title_main}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
