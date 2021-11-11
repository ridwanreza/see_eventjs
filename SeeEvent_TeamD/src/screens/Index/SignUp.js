import React from 'react'
import { View, Text, Pressable } from 'react-native'

const SignUp = (props) => {
    return (
        <View>
            <Text>This Is Sign Up</Text>
            <Pressable style={{backgroundColor: 'green', width: 200, margin: 10}}onPress={() => props.navigation.navigate('SignIn')}>
                <Text>Go To Index Screen</Text>
            </Pressable>
        </View>
    )
}

export default SignUp
