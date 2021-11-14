import React from 'react';
import {View, StatusBar, Text, TouchableOpacity, Alert, StyleSheet, TextInput, Touchable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const HeaderWSearch = (props) => {
return (
    <View>
        <LinearGradient colors={['rgba(14, 29, 37, 1)', 'rgba(33, 68, 87, 1)']}>
            <StatusBar backgroundColor="transparent" translucent={true} />
                <View
                style={{
                    width: '100%',
                    height: 148,
                    justifyContent: 'center',
                    alignItems: 'center'
             

                }}>
                   <View style={styles.srchBarContainer}>
                        <View style={styles.srchIcon}>
                            <TouchableOpacity>
                                <Icon
                                name= 'search-sharp'
                                size={24}
                                />
                            </TouchableOpacity>
                        </View>
                        <TextInput
                        placeholder='Search events'
                        style={styles.txtInpt}>
                        </TextInput>
                   </View>
                   <View style={styles.dropDContainer}>

                   </View>
                   

                </View>
        </LinearGradient>
    </View>
)
}

const styles= StyleSheet.create ({
    srchBarContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 12
    },
    txtInpt: {
        fontSize: 17,
        height: 40,
        width: '90%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dropDContainer: {
        backgroundColor: 'blue',
        width: '90%',
        height: 40,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    srchIcon: {
        width: '10%',
        backgroundColor: 'white',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    }

})

export default HeaderWSearch
