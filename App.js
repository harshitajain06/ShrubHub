import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ForumPageWithTabs from './screens/ForumPageWithTabs';
import MyProfile from './screens/MyProfile';
import Header from './screens/Header';
import ForumPage from './screens/ForumPage';
import Marketplace from './screens/MarketplacePage'; 
import CreatePost from './screens/CreatePost';
import Shop from './screens/Shop';
import PostPage from './screens/PostPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
    <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#7C9D45', // Set header background color
          },
          headerTintColor: 'white', // Set text color on header
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="ForumPageWithTabs" component={ForumPageWithTabs} options={{ headerShown: false }}/>
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#7C9D45', // Set header background color
          },
          headerTintColor: 'white', // Set text color on header
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="ForumPage" component={ForumPage} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Marketplace" component={Marketplace} />
      <Stack.Screen name="PostPage" component={PostPage} options={{ headerShown: false }}/>
      <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          title: 'Create Post',
          headerStyle: {
            backgroundColor: '#7C9D45', // Set header background color
          },
          headerTintColor: 'white', // Set text color on header
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;