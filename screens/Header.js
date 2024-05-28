import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingBottom:10,paddingTop:10, paddingHorizontal: 20, backgroundColor: '#7C9D45' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="white" />
      </TouchableOpacity>
      <View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Forum</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
        <Icon name="person-circle-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
