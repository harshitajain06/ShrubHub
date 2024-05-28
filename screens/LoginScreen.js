import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
const backImage = require("../assets/Img2.png");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully!');
      // Navigate to the main screen or dashboard
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Error signing in:', error);
    }
  };

  return (
    <ImageBackground source={backImage} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', fontStyle: 'italic', marginVertical: 20 }}>Welcome</Text>
        <TextInput
          style={{ borderColor: 'white', borderWidth: 1, borderRadius: 20, width: 300, height: 50, padding: 10, color: 'white', marginBottom: 10 }}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{ borderColor: 'white', borderWidth: 1, borderRadius: 20, width: 300, height: 50, padding: 10, color: 'white', marginBottom: 10 }}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: 20, marginRight: 30 }}>
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'transparent', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginBottom: 10, borderWidth: 1, borderColor: 'white', borderRadius: 20 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForumPageWithTabs')} style={{ backgroundColor: 'transparent', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginBottom: 10, borderWidth: 1, borderColor: 'white', borderRadius: 20 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
