import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from './button/Button';
import CategoryButton from './button/CategoryButton';

const CardEvntContent = (props) => {
    return (
        <View style={styles.container}>
            {/* IMAGE CONTAINER */}
            <View style={styles.imgContainer}>
                <Image 
              style={styles.img}
                source={require('../assets/linkedin-sales-solutions-wXZV6hwN7gQ-unsplash-scaled.jpg')}
                />
            </View>
            
            {/* CONTENT TEXT CONTAINER */}
            <View style={styles.txtContainer}>
                <View style={styles.compContainer}>
                         <CategoryButton categoryText = 'Design'/>
                    <View style={styles.iconContainer}>
                          <TouchableOpacity style={styles.touchOpc}>
                              <Icon
                              name="share-2"
                              size={30}
                              color={'grey'}
                              />
                          </TouchableOpacity >
                          <TouchableOpacity style={styles.touchOpc}>
                              <Icon
          // style={{ top: 30, height: 30}} 
                              name="bookmark"
                              size={30}
                              color={'grey'}
                            />
                          </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.txtCont}>
                    {/* DATE AND TIME */}
                    <Text>
                        {props.datetime}
                    </Text>
                    {/* EVENT TITLE */}
                    <TouchableOpacity>
                        <Text style={styles.textEvent}>
                            {props.eventTitle}
                        </Text>
                    </TouchableOpacity>

                    {/* EVENT OWNER*/}
                    <Text style={{color: '#999999'}}>
                        {props.eventOwner}
                    </Text>
                
                </View>
            </View>
     
        </View>
    )
}

export default CardEvntContent


const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'white',
        width: 240,
        height:352,
        margin: 5,
        elevation: 30,
        borderRadius: 10
    },
    imgContainer: {
        width: 240,
        height:200,
        borderRadius: 10
    },
    img: {
        flex:1,
        height: null,
        width:null,
        resizeMode: 'cover',
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    txtContainer: {
        flex:1,
        borderRadius: 10,

        
    },
    touchOpc: {
        margin: 5
    },
    compContainer: {
        flexDirection: 'row',
        height: 40,
        margin: 10,
      
        justifyContent: 'space-between'
    },
    iconContainer:{
        flexDirection: 'row',
        width: '35%'
    },
    txtCont: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        marginBottom: 10
    },
    textEvent: {
       fontWeight: 'bold',
       fontSize: 14,
       color: '#214457',

    }
})