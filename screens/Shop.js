import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config';

const Shop = ({ route }) => {
  const { shop } = route.params; // Get the shop details from route params
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const plantsQuery = query(collection(db, 'plants'), where('shopId', '==', shop.id));
        const querySnapshot = await getDocs(plantsQuery);
        const plantList = [];
        querySnapshot.forEach((doc) => {
          const { imageUrl, name } = doc.data(); // Assuming the field name for plant name is 'name'
          plantList.push({ imageUrl, name });
        });
        setPlants(plantList);
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchPlants();
  }, [shop.id]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.shopContainer}>
        <Image source={{ uri: shop.imageUrl }} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.shopName}>{shop.ownerName}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.detailsContainer}>
            <Text style={styles.details}>{shop.phoneNo}</Text>
            <Text style={styles.details}>{shop.city}</Text>
          </View>
        </View>
      </View>

      <View style={styles.plantsContainer}>
        {plants.map((plant, index) => (
          <View key={index} style={styles.plantContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: plant.imageUrl }} style={styles.plantImage} />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.plantName}>{plant.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 20,
  },
  shopContainer: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#7C9D45',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
    width: '90%',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7C9D45',
    textAlign: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: '#7C9D45',
    marginVertical: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    fontSize: 14,
    color: '#7C9D45',
    fontWeight: 'bold',
  },
  plantsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    marginTop: 20,
  },
  plantContainer: {
    width: '48%',
    margin: '1%',
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#7C9D45',
    borderRadius: 10,
    overflow: 'hidden',
  },
  plantImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  nameContainer: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantName: {
    color: '#7C9D45',
    fontWeight: 'bold',
  },
});

export default Shop;
