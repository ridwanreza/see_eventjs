import { underline } from 'chalk'
import React from 'react'
import { View, Text, Pressable, StatusBar, Image } from 'react-native'
import Button from '../../components/button/Button'
import Buttonsign from '../../components/button/Buttonsign'
const Idx = (props) => {
    return (
        <View>
            <View >
            <StatusBar barStyle= 'dark-content' backgroundColor="transparent" translucent={true}/>
                <Image 
                    source={require('../../assets/splash.png')} 
                    style= {{alignSelf: 'center', marginTop: 100}}
                />            
                <View style= {{justifyContent: 'center', 
                            alignItems: 'center', 
                            flexDirection: 'row', 
                            marginTop: 30, 
                            marginBottom: 20}}>
                    <Image 
                        source={require('../../assets/Event.png')} 
                        style= {{resizeMode: 'stretch', height: 40, width: 56}}
                    />
                    <Text style= {{fontSize: 32, 
                                marginLeft: 12, 
                                fontStyle: 'italic',}}>
                        SeeEvent
                    </Text>              
                </View>
            <Button text= "Sign Up" navigation = {() => props.navigation.navigate('SignUp')}/>
            <Buttonsign text= "Sign In" navigation = {() => props.navigation.navigate('SignIn')}/>            
            <Pressable style= {{alignSelf: 'center'}} onPress={() => props.navigation.navigate('GoToHomeScreen')}> 
                <Text style= {{textDecorationLine: 'underline', 
                            color: '#3E89AE', 
                            marginTop: 10}}>
                            Continue as guest
                </Text>               
            </Pressable>
            <Text style= {{alignSelf: 'center', marginTop: 60}}>version v1.1.2</Text>            
            </View>
        </View>
    )
}

export default Idx;
