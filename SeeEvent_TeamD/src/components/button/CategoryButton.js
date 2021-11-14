import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CategoryButton = (props) => {
return (
    <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.ctgBtn}>
            <Text style={{color: '#214457', fontSize: 20}}>{props.categoryText}</Text>
        </TouchableOpacity>
        
    </View>
)
}

export default CategoryButton

const styles = StyleSheet.create({
    btnContainer: {
        width: '30%'
    },
    ctgBtn: {
        backgroundColor: 'red',
        flex: 1,
        borderRadius: 4,
        backgroundColor: '#F0F2E9',
        width: '100%',
        height: 24,
        justifyContent: 'center'
}
})