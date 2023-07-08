import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AppNavigator from './src/app.navigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  )
};
