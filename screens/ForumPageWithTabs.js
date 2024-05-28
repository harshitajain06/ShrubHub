import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ForumPage from './ForumPage';
import MarketplacePage from './MarketplacePage';
import Header from './Header'; // Import the Header component
import { Card } from 'react-native-paper';
const backImage = require("../assets/Img2.png");

const Tab = createMaterialTopTabNavigator();

const ForumPageWithTabs = ({ navigation }) => {
  return (
    <ImageBackground source={backImage} style={styles.container}>
      <Card>
        <Header />
      </Card>
      {/* <Header navigation={navigation} /> Include the Header component */}
      <Tab.Navigator
        screenOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          style: { backgroundColor: '#7C9D45' },
        }}>
        <Tab.Screen name="Forum" component={ForumPage} />
        <Tab.Screen name="Marketplace" component={MarketplacePage} />
      </Tab.Navigator>
      <TouchableOpacity onPress={() => navigation.navigate('AddPost')} style={styles.addPostIcon}>
        <Icon name="add" size={30} color="white" />
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

