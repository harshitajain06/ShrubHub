import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const backImage = require("../assets/Img2.png");

const MyProfile = ({ navigation }) => {
  return (
    <ImageBackground source={backImage} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>My Profile</Text>
        <TouchableOpacity style={styles.avatar}>
          <Icon name="person" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalPosts', { savedPosts: currentUser.myPost, isSavedPost: false })} style={styles.button}>
            <Text style={styles.buttonText}>My Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalPosts', { savedPosts: currentUser.savedPost, isSavedPost: true })} style={styles.button}>
            <Text style={styles.buttonText}>Saved Posts</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={[styles.button, styles.settingsButton]}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  settingsButton: {
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MyProfile;
