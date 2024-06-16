import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ImageBackground, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import ForumPage from './ForumPage';
import Marketplace from './MarketplacePage';
import Header from './Header';
import SearchBar from './SearchBar';

const backImage = require("../assets/Img2.png");

const Tab = createMaterialTopTabNavigator();

const ForumPageWithTabs = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const ForumComponent = () => <ForumPage searchQuery={searchQuery} />;
  const MarketplaceComponent = () => <Marketplace searchQuery={searchQuery} />;

  return (
    <ImageBackground source={backImage} style={styles.container}>
      <Header navigation={navigation} toggleSearchBar={toggleSearchBar} />
      {isSearchBarVisible && <SearchBar onSearch={handleSearch} />}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: { backgroundColor: '#7C9D45' },
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 16 },
        }}>
        <Tab.Screen name="Forum" component={ForumComponent} />
        <Tab.Screen name="Marketplace" component={MarketplaceComponent} />
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
