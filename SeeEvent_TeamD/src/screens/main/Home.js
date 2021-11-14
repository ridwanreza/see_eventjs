import React from 'react'
import { View, Text, ScrollView, Pressable, Touchable, TouchableOpacity } from 'react-native'
import CardEvntContent from '../../components/CardEvntContent'
import CardPropImg from '../../components/CardPropImg'
import HeaderMain from '../../components/header/HeaderMain'
import HeaderMainTab from '../../components/header/HeaderMainTab'
import Icon from 'react-native-vector-icons/Ionicons';
import ExpCtgBtn from '../../components/button/ExpCtgBtn'

const Explore = () => {
    return (
        <View style={{maxHeight: 750}}>
            <HeaderMainTab title_main= 'SeeEvent'/>
            
            <ScrollView>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{marginLeft: 30,fontWeight: 'bold', marginTop: 30, fontSize: 20}}>
                Starting Soon
                </Text>
                <TouchableOpacity>
                <Text style={{marginTop:40, marginRight: 30, color: '#3E89AE'}}>
                See All
                </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{margin: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>
           <CardEvntContent
           datetime='SUN, OCT 24 @ 1:15 AM ICT'
           eventTitle='Hitting Reset: How to Land A Job in UX Design'
           eventOwner='Test'
           />
           <CardEvntContent
           datetime='SUN, OCT 24 @ 1:15 AM ICT'
           eventTitle='Hitting Reset: How to Land A Job in UX Design'
           eventOwner='Test'
           />
           <CardEvntContent
           datetime='SUN, OCT 24 @ 1:15 AM ICT'
           eventTitle='Hitting Reset: How to Land A Job in UX Design'
           eventOwner='Test'
           />
           <CardEvntContent
           datetime='SUN, OCT 24 @ 1:15 AM ICT'
           eventTitle='Hitting Reset: How to Land A Job in UX Design'
           eventOwner='Test'
           />

            </ScrollView>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{marginLeft: 30,fontWeight: 'bold', fontSize: 20}}>
                Explore by category
                </Text>
            </View>
            <ScrollView style={{margin: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>
                <ExpCtgBtn textCategory='Photography' />
                <ExpCtgBtn textCategory='Design' />
                <ExpCtgBtn textCategory='Technology' />
                <ExpCtgBtn textCategory='Photography' />
            </ScrollView>
            <ScrollView style={{margin: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>
           <CardEvntContent
           datetime='SUN, OCT 24 @ 1:15 AM ICT'
           eventTitle='Hitting Reset: How to Land A Job in UX Design'
           eventOwner='Test'
           />
           <CardEvntContent
           datetime='SUN, OCT 24 @ 1:15 AM ICT'
           eventTitle='Hitting Reset: How to Land A Job in UX Design'
           eventOwner='Test'
           />
           <CardEvntContent
           datetime='SUN, OCT 24 @ 1:15 AM ICT'
           eventTitle='Hitting Reset: How to Land A Job in UX Design'
           eventOwner='Test'
           />
           <CardEvntContent
           datetime='SUN, OCT 24 @ 1:15 AM ICT'
           eventTitle='Hitting Reset: How to Land A Job in UX Design'
           eventOwner='Test'
           />

            </ScrollView>
            </ScrollView>
            
           
        </View>
    )
}

export default Explore
