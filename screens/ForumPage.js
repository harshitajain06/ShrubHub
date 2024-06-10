import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, RefreshControl } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config';

const ForumPage = () => {
  const [plants, setPlants] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPlants = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const plantList = [];
      querySnapshot.forEach((doc) => {
        const { imageUrl, caption } = doc.data();
        plantList.push({ imageUrl, caption });
      });
      setPlants(plantList);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPlants();
    setRefreshing(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {plants.map((plant, index) => (
        <View key={index} style={styles.plantContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: plant.imageUrl }} style={styles.image} />
          </View>
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{plant.caption}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  plantContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: '#7C9D45',
    borderRadius: 10,
    overflow: 'hidden', // Ensure the image is clipped by the border
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  captionContainer: {
    backgroundColor: '#7C9D45',
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
    alignSelf: 'center', // Center the caption container horizontally
    width: '90%', // Set the width of the caption container
  },
  captionText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ForumPage;
