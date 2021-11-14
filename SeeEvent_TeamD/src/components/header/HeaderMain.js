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
export default function HeaderMain(props) {
  return (
    <View>
      <LinearGradient colors={['rgba(14, 29, 37, 1)', 'rgba(33, 68, 87, 1)']}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View
          style={{
            width: '100%',
            height: 90,
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
