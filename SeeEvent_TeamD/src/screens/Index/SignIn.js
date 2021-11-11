import React from 'react'
import { View, Text, Pressable, StatusBar} from 'react-native'
import Header from '../../components/header/Header';
import TextInputWIcon from '../../components/TextInputWIcon'

const SignIn = (props) => {
    return (
        <View>
            <Header title_sec= "Sign In" headernavigation = {() => props.navigation.navigate('Idx')}/>
            <Text>Welcome Back</Text>
            <TextInputWIcon text="Email"/>
            <Text>THIS IS SIGN IN</Text>
            <Pressable style={{backgroundColor: 'green', width: 200, margin: 10}} onPress={() => props.navigation.navigate('Idx')}>
                <Text >Go To Index Page</Text>
            </Pressable>
            <Pressable style={{backgroundColor: 'green', width: 200, margin: 10}} onPress={() => props.navigation.navigate('GoToHomeScreen')}>
                <Text >Go To Main Screen/Home Screen</Text>
            </Pressable>
        </View>
    )
}

export default SignIn;
