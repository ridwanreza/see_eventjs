import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import AppStack from './src/navigation/AppStack.js';
import {Provider} from 'react-redux';
import storeRedux from './src/redux/store';
const App = () => {
  return (
    <Provider store={storeRedux}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
