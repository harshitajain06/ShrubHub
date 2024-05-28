import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
const backImage = require("../assets/Img2.png");

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully!');
      // Navigate to the main screen or dashboard
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Error signing up:', error);
    }
  };

  return (
    <ImageBackground source={backImage} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', fontStyle: 'italic', marginVertical: 20 }}>Welcome Form</Text>
        <TextInput
          style={{ borderColor: 'white', borderWidth: 1, borderRadius: 20, width: 300, height: 50, padding: 10, color: 'white', marginBottom: 10 }}
          placeholder="Name"
          placeholderTextColor="white"
          value={name}
          onChangeText={setName}
        />
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: 20, marginRight: 60 }}>
          <TouchableOpacity onPress={''} style={{ backgroundColor: 'transparent', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, borderWidth: 1, borderColor: 'white', borderRadius: 20 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ backgroundColor: 'transparent', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, borderWidth: 1, borderColor: 'white', borderRadius: 20 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
