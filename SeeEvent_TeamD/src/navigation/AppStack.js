import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Idx from '../screens/Index/Idx';
import SignIn from '../screens/Index/SignIn';
import SignUp from '../screens/Index/SignUp';
import Explore from '../screens/main/Explore';
import Home from '../screens/main/Home';
import Event from '../screens/main/Event';
import Profile from '../screens/main/Profile';
import EditPassword from '../screens/main/Profile/EditPassword';
import EditProfile from '../screens/main/Profile/EditProfile';
import SavedEvents from '../screens/main/Profile/SavedEvents';
import Icon from 'react-native-vector-icons/Ionicons';
import CreateMyevent from '../screens/main/MyEvent/CreateMyevent';
import EventDetail from '../screens/main/MyEvent/EventDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = props => {
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setSaveToken(props.token);
  }, [props.token]);

  const [savetoken, setSaveToken] = useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('TOKEN');
      if (value !== null) {
        console.log(value);
        setSaveToken(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  console.log('INI DATA DI NAVIGASI', props.token);
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      {savetoken ? (
        <Stack.Screen name="GoToHomeScreen" component={btmNav} />
      ) : (
        <>
          <Stack.Screen name="Idx" component={Idx} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </>
      )}
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditPassword" component={EditPassword} />
      <Stack.Screen name="SavedEvent" component={SavedEvents} />
      <Stack.Screen name="CreateEvent" component={CreateMyevent} />
    </Stack.Navigator>
  );
};

const reduxState = state => ({
  token: state.auth.token,
});

export default connect(reduxState, null)(AppStack);

const btmNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          paddingBottom: 5,
          paddingTop: 5,
          height: hp('7%'),
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name == 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name == 'Explore') {
            iconName = focused ? 'search-outline' : 'search';
          } else if (route.name == 'Event') {
            iconName = focused ? 'people' : 'people-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={25} color={'#214457'} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{tabBarHideOnKeyboard: true}}
      />
      <Tab.Screen name="Event" component={Event} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
