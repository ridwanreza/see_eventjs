import React from 'react'
import { View, Text, Pressable } from 'react-native'

const Idx = (props) => {
    return (
        <View>
            <Text>THIS IS INDEX</Text>
            <Pressable style={{backgroundColor: 'green', width: 200, margin: 10}} onPress={() => props.navigation.navigate('SignIn')}>
                <Text>Go To Sign In Screen</Text>
            </Pressable>
            <Pressable style={{backgroundColor: 'green', width: 200, margin: 10}} onPress={() => props.navigation.navigate('SignUp')}>
                <Text>Go To SignUp Screen</Text>
            </Pressable>
            
        </View>
    )
}

export default Idx;
