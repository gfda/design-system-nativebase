import React from 'react';
import {Center, VStack, Button} from 'native-base';
import NativeBaseIcon from '../components/NativeBaseIcon';
import ToggleTheme from '../components/ToggleTheme';
import nativeBaseComponents from '../mocks/nativeBaseComponents';

export interface HomeScreenprops {
  navigation: any;
}

export default function HomeScreen(props: HomeScreenprops) {
  const goToComponentsScreen = () =>
    props.navigation.navigate('ComponentsScreen', nativeBaseComponents);

  return (
    <Center px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <ToggleTheme />
        <Button variant={'solid'} onPress={goToComponentsScreen}>
          Components
        </Button>
      </VStack>
    </Center>
  );
}
