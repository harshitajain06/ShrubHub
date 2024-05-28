import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';

const backImage = require('../assets/Img2.png');

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    // Handle sending reset password link
    console.log('Sending reset password link to:', email);
    // Optionally, navigate to another screen after sending reset link
    navigation.navigate('SignUpScreen');
  };

  return (
    <ImageBackground source={backImage} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20, marginBottom: 20 }}>Reset Password</Text>
        <TextInput
          style={{ borderColor: 'white', borderWidth: 1, borderRadius: 20, width: 300, height: 50, padding: 10, color: 'white', marginBottom: 20 }}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity onPress={handleSend} style={{ backgroundColor: 'transparent', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, borderWidth: 1, borderColor: 'white', borderRadius: 20 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Send</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;
