import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ComponentsScreen from './screens/ComponentsScreens';
import ButtonScreen from './screens/NativeComponentScreens/ButtonScreen';
import InputScreen from './screens/NativeComponentScreens/InputScreen';
import RadioScreen from './screens/NativeComponentScreens/RadioScreen';

const{Navigator, Screen} = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="ComponentsScreen" component={ComponentsScreen} />
        <Screen name="ButtonScreen" component={ButtonScreen} />
        <Screen name="InputScreen" component={InputScreen} />
        <Screen name="RadioScreen" component={RadioScreen} />
      </Navigator>
    </NavigationContainer>
  )
}