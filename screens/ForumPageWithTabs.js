import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ForumPage from './ForumPage';
import Marketplace from './MarketplacePage';
import Header from './Header'; // Import the Header component
const backImage = require("../assets/Img2.png");

const Tab = createMaterialTopTabNavigator();

const ForumPageWithTabs = ({ navigation }) => {
  return (
    <ImageBackground source={backImage} style={styles.container}>
      
      <Header navigation={navigation} />
    
      {/* <Header navigation={navigation} /> Include the Header component */}
      <Tab.Navigator
        screenOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          style: { backgroundColor: '#7C9D45' },
        }}>
        <Tab.Screen name="Forum" component={ForumPage} />
        <Tab.Screen name="Marketplace" component={Marketplace} />
      </Tab.Navigator>
      <TouchableOpacity onPress={() => navigation.navigate('CreatePost')} style={styles.addPostIcon}>
      <Image source={require('../assets/Add.png')} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  addPostIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
  },
});

export default ForumPageWithTabs;

