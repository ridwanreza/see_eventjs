import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Header from '../../../components/header/Header';
import TextComment from '../../../components/TextComment';
import Buttonsubmit from '../../../components/button/Buttonsubmit';
import FooterDetailEvent from '../../../components/Footer/FooterDetailEvent';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function EventDetail(props) {
  console.log(props.route.params.gabungan);
  return (
    <View style={{flex: 1}}>
      <Header
        title_sec="Event Detail"
        navigation={() => props.navigation.navigate('Event')}
      />
      <ScrollView
      // contentContainerStyle={{flexGrow: 1, height: hp('400%')}}
      >
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '85%',
              marginTop: 30,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                color: 'black',
                letterSpacing: 2,
                flexWrap: 'wrap',
              }}>
              ESL Game: English on Your Feet!™
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '85%',
            }}>
            <Icon
              style={{
                flex: 1,
                paddingLeft: 10,
              }}
              name="calendar"
              size={15}
              color={'black'}
            />
            <Text style={{flex: 6, fontSize: 14}}>
              SUN, OCT 24 @ 1:15 AM ICT
            </Text>
            <Text
              style={{
                flex: 3,
                fontSize: 12,
                textAlign: 'right',
                paddingRight: 10,
              }}>
              Business
            </Text>
          </View>
          <Image
            style={{borderRadius: 5, marginVertical: 20}}
            source={require(`../../../assets/imgdefault.png`)}></Image>

          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={{borderRadius: 40, width: 40, height: 40}}
                source={require(`../../../assets/person.png`)}></Image>
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text>Created by</Text>
              <Text style={{fontWeight: 'bold'}}>Pratur Anahata Pratama</Text>
            </View>
          </View>
          <View style={{width: '85%'}}>
            <Text style={{fontSize: 20, marginVertical: 10}}>Details</Text>
            <Text style={{textAlign: 'justify', lineHeight: 30}}>
              Welcome to the Parlor! Let's play English on Your Feet!™ GET
              FEEDBACK GAIN CONFIDENCE LAYER UP YOUR ENGLISH!™ Everyone will
              have a chance to speak to the "audience" and receive feedback from
              the audience and our coaches. You don't need to prepare
              anything--just prepare to have fun and try! Relax. Layer Up your
              English!™ We look forward to your participation. PLEASE READ: 5
              Important Notes about this Meetup 1) This event is not a lecture
              or conversation practice. This is a structured activity in which
              all attendees are expected to actively participate. 2)
              Participation in "English on Your Feet!™ is optimal for English
              language learners at the intermediate level and above. 3) Each
              member-participant is allowed one guest-participant per meetup as
              space allows. Guest-participants may attend as guests a maximum of
              2 times then must join to continue. 4) If your plans change,
              please update your RSVP. Repeated "no-shows" will be removed. 5)
              We use Google Meet. A Google or Gmail account is NOT required to
              use the link and join our meeting. Before the meetup, please open
              the link (given to you when you RSVP) and explore the following
              features on the same device that you will use to attend:
              mute/unmute, chat box, and the additional options menu. (See the
              PHOTO for visual instructions.)
            </Text>
            <Text style={{fontSize: 20}}>Comments</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={{borderRadius: 40, width: 40, height: 40}}
                source={require(`../../../assets/person.png`)}></Image>
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 16}}>Created by</Text>
              <Text style={{fontSize: 12}}>4 Days ago</Text>
            </View>
          </View>
          <View style={{width: '85%'}}>
            <Text style={{fontSize: 16, flexWrap: 'wrap', marginVertical: 10}}>
              Hi, do you have a youtube channel that I can subscribe?
            </Text>
          </View>
        </View>

        <TextComment text="Enter your comment here" />
        <Buttonsubmit text="Submit" />
      </ScrollView>
      <FooterDetailEvent text1="Share" text2="Save" />
    </View>
  );
}
