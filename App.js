import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.headerview]}>
        <Text style={[styles.header]}>Messages</Text>
        <Feather name="edit" color={'#777583'} size={25} />
      </View>
      <View style={[styles.search]}>
        <Feather name="search" color={'#bcbbc0'} size={15} style={{ marginLeft: 20, marginRight: 10 }} />
        <Text style={{ color: '#bcbbc0' }}>Search for messages or users</Text>
      </View>
      <View style={[styles.profiles]}>
        <Image style={[styles.profilepicture]} source={require('./images/profilepicture1.png')} />
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4b465f' }}>Fahime Rafiei</Text>
            <Text style={{ color: '#a4a3ab', fontSize: 15, marginLeft: 100 }}>5 min</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ width: 190, fontWeight: '600', color: '#4b465f' }}>Of course! I will give you my books.</Text>
            <MaterialCommunityIcons name="numeric-1-box" color={'#7b5bfe'} size={25} style={{ marginLeft: 50 }} />
          </View>
        </View>
      </View>
      <View style={[styles.profiles]}>
        <Image style={[styles.profilepicture]} source={require('./images/profilepicture2.jpeg')} />
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4b465f' }}>John Smith</Text>
            <Text style={{ color: '#a4a3ab', fontSize: 15, marginLeft: 110 }}>10 min</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ width: 210, fontWeight: '600', color: '#a4a3ab' }}>Hi! we are going out tonight do you want to join us?</Text>
            <Ionicons name="checkmark-done" color={'#a4a3ab'} size={25} style={{ marginLeft: 30 }} />
          </View>
        </View>
      </View>
      <View style={[styles.profiles]}>
        <Image style={[styles.profilepicture]} source={require('./images/profilepicture3.jpg')} />
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4b465f' }}>Maria Carry</Text>
            <Text style={{ color: '#a4a3ab', fontSize: 15, marginLeft: 110 }}>15 min</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ width: 200, fontWeight: '600', color: '#4b465f' }}>Elnaz when can you send my photos?</Text>
            <MaterialCommunityIcons name="numeric-2-box" color={'#7b5bfe'} size={25} style={{ marginLeft: 40 }} />
          </View>
        </View>
      </View>
      <View style={[styles.profiles]}>
        <Image style={[styles.profilepicture]} source={require('./images/profilepicture4.jpg')} />
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4b465f' }}>Fateme Rafiei</Text>
            <Text style={{ color: '#a4a3ab', fontSize: 15, marginLeft: 100 }}>1 hour</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ width: 190, fontWeight: '600', color: '#c1c0c5' }}>Darling please don't forget to eat your fruits. </Text>
            <Ionicons name="checkmark" color={'#a4a3ab'} size={25} style={{ marginLeft: 50 }} />
          </View>
        </View>
      </View>
      <View style={styles.navigation}>
        <View>
          <Ionicons name="chatbubbles-outline" color={'#595959'} size={30} />
          <Entypo name="dot-single" color={'#595959'} size={20} style={{ marginLeft: 5 }} />
        </View>
        <Ionicons name="people-outline" color={'grey'} size={30} style={{ marginLeft: 70, marginRight: 70 }} />
        <Ionicons name="ios-options-outline" color={'grey'} size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navigation: {

    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 50,
    height: 100
  },
  headerview: { flexDirection: 'row', marginLeft: '10%', marginTop: '30%', marginBottom: '10%' },
  header: { fontWeight: 'bold', fontSize: 30, color: '#403b51', marginRight: '45%' },
  search: { flexDirection: 'row', backgroundColor: '#f6f6f6', width: '80%', alignSelf: 'center', height: 40, borderRadius: 20, alignItems: 'center' },
  profiles: { flexDirection: 'row', alignSelf: 'center', marginTop: 50, alignItems: 'center' },
  profilepicture: { width: 70, height: 70, borderRadius: 50, marginRight: 20 },


});
