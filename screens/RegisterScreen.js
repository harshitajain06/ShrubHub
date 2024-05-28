import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import {auth} from '../config';
const backImage = require("../assets/Img2.png");

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async() => {
    // Implement sign-up logic here
  //   const auth1 = getAuth();
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          // Send email verification
          await sendEmailVerification(user);

          // Additional actions after successful sign-up, such as navigating to another screen
          console.log('Sign-up successful:', user);
          navigation.navigate('LoginScreen');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
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
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={{ borderColor: 'white', borderWidth: 1, borderRadius: 20, width: 300, height: 50, padding: 10, color: 'white', marginBottom: 10 }}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={{ borderColor: 'white', borderWidth: 1, borderRadius: 20, width: 300, height: 50, padding: 10, color: 'white', marginBottom: 10 }}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: 20, marginRight: 60 }}>
          <TouchableOpacity onPress={handleSignUp} style={{ backgroundColor: 'transparent', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, borderWidth: 1, borderColor: 'white', borderRadius: 20 }}>
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
