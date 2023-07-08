import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AppNavigator from './src/app.navigator';
import customTheme from './src/lib/design-system/src';

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <AppNavigator />
    </NativeBaseProvider>
  )
};
