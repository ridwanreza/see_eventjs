import React from 'react'
import { View, Text, Pressable} from 'react-native'

const SignIn = (props) => {
    return (
        <View>
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
