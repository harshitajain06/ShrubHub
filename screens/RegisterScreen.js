import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../config';
import Toast from 'react-native-toast-message';
const backImage = require("../assets/Img2.png");

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);

      // Show success alert
      Alert.alert('Success', 'Account created successfully! Please verify your email.');

      // Show success toast
      Toast.show({
        type: 'success',
        text1: 'Account created successfully!',
        text2: 'Please verify your email.',
      });

      // Navigate to login screen
      navigation.navigate('LoginScreen');
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'The email address is already in use by another account.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'The email address is not valid.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Email/password accounts are not enabled. Please contact support.';
          break;
        case 'auth/weak-password':
          errorMessage = 'The password is too weak.';
          break;
        default:
          errorMessage = 'An unknown error occurred. Please try again later.';
      }

      // Show error alert
      Alert.alert('Error', errorMessage);

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
          <TouchableOpacity onPress={handleSignUp} style={{ backgroundColor: 'transparent', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, borderWidth: 1, borderColor: 'white' }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ backgroundColor: 'transparent', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, borderWidth: 1, borderColor: 'white' }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ImageBackground>
  );
};

export default RegisterScreen;
