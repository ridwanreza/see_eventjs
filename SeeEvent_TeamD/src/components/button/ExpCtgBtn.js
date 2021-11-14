import React from 'react'
import { View, Text, Pressable,StyleSheet, TouchableOpacity } from 'react-native'

const ExpCtgBtn = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.ctgExpBtn}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>
                    {props.textCategory}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ExpCtgBtn

const styles = StyleSheet.create({

    ctgExpBtn: {
        borderWidth: 2,
        borderColor: '#214457',
        backgroundColor: 'white',
        height: 48,
        borderRadius: 99,
        justifyContent: 'center',
        margin: 5,
        width: 150
    }
})