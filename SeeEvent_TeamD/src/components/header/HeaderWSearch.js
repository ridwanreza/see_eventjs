
import React, {useState} from 'react'
import {View, StatusBar, Text, TouchableOpacity, Alert, StyleSheet, TextInput, Touchable, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';


const HeaderWSearch = (props) => {

    const [pickerValue1, setPickerValue1] = useState('Sort')
    const [pickerValue2, setPickerValue2] = useState('Date')
    const [pickerValue3, setPickerValue3] = useState('Category')

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
                   <ScrollView style={styles.dropDContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                        
                        <Picker
                        style={styles.picker1}
                        itemStyle={styles.Picker1Item}
                        selectedValue={pickerValue1}
                        onValueChange={(itemValue) => setPickerValue1(itemValue)}
                        ><Picker.Item style={{fontSize: 15, width: 200}} label="Sort" value="Sort"/>
                            <Picker.Item style={{fontSize: 15, width: 200, height: 20}} label="Date" value="Date"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Name" value="Name"/>
                        </Picker>
                        <Picker
                        style={styles.picker2}
                        itemStyle={styles.Picker2Item}
                        selectedValue={pickerValue2}
                        onValueChange={(itemValue) => setPickerValue2(itemValue)}
                        >
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Date" value="Date"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Today" value="Today"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Tomorrow" value="Tomorrow"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="This Week" value="This Week"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="This Month" value="This Month"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="All Upcoming" value="Name"/>
                        </Picker>
                        <Picker
                        style={styles.picker3}
                        itemStyle={styles.Picker3Item}
                        selectedValue={pickerValue3}
                        onValueChange={(itemValue) => setPickerValue3(itemValue)}
                        ><Picker.Item style={{fontSize: 15, width: 200}} label="Category" value="Category"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Any Category" value="Any Category"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Photography" value="Photography"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Design" value="Design"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Development" value="Development"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Marketing" value="Marketing"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Bussines" value="Bussines"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Lifestyle" value="Lifestyle"/>
                            <Picker.Item style={{fontSize: 15, width: 200}} label="Music" value="Music"/>
                        </Picker>
                   </ScrollView>
                   
                   

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
        marginTop: 35
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
        flexDirection: 'row',
        width: '90%',
        height: 10,
        marginTop: 8,
        
   
    },
    srchIcon: {
        width: '10%',
        backgroundColor: 'white',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    picker1: {
        width: 120,
        height: 44,
        backgroundColor: '#ECEEEF',
        borderColor: 'black',
        borderWidth: 1,
        margin: 2,
        borderRadius: 20
      },
      Picker1Item: {
        height: 44,
        color: 'red'
      },
      picker2: {
        width: 168,
        height: 44,
        backgroundColor: '#ECEEEF',
        borderColor: 'black',
        borderWidth: 1,
        margin: 2,
        marginLeft: 5
      },
      Picker2Item: {
        height: 44,
        color: 'red'
      },
      picker3: {
        width: 170,
        height: 44,
        backgroundColor: '#ECEEEF',
        borderColor: 'black',
        borderWidth: 1,
        margin: 2,
        marginLeft: 5
      },
      Picker3Item: {
        height: 44,
        color: 'red'
      }
})

export default HeaderWSearch
