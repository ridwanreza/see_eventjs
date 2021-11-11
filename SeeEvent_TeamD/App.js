import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import AppStack from './src/navigation/AppStack.js';

const App = () => {
  
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
    
  );
};

export default App;
