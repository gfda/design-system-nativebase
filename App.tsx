import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AppNavigator from './src/app.navigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
};
export default App;
