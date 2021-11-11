import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import Idx from '../screens/Index/Idx';
import SignIn from '../screens/Index/SignIn';
import SignUp from '../screens/Index/SignUp';
import Explore from '../screens/main/Explore';
import Home from '../screens/main/Home';
import Event from '../screens/main/Event';
import Profile from '../screens/main/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={() => ({headerShown: false, })}>
        <Stack.Screen name="Idx" component={Idx} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="GoToHomeScreen" component={btmNav}/>
    </Stack.Navigator>
    )
}

export default AppStack;

const btmNav = () =>{
    return (
    <Tab.Navigator screenOptions={() => ({
        headerShown: false,
        tabBarActiveBackgroundColor: '#00E1EF',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor:'#00E1EF'
    })} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Event" component={Event} />
        <Tab.Screen name="Profile" component={Profile} />
        
    </Tab.Navigator>
    );
}
