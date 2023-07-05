import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const{Navigator, Screen} = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="HomeScreen" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  )
}