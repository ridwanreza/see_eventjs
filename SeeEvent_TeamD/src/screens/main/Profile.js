import React from 'react'
import { View, Text,Pressable } from 'react-native'

const Explore = (props) => {
    return (
        <View>
            <Text>This Is Profile</Text>
            <Pressable style={{backgroundColor: 'green', width: 200, margin: 10}} onPress={() => props.navigation.navigate('Idx')}>
                <Text>Back To Index (Logout)</Text>
            </Pressable>
        </View>
    )
}

export default Explore
