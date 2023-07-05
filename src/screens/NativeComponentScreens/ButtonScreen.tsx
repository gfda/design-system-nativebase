import React from 'react';
import {Center, VStack, Heading, HStack, Button} from 'native-base';
import ToggleTheme from '../../components/ToggleTheme';
import CustomSelect from '../../components/CustomSelect';

const colorSchemes = [
  'primary',
  'secondary',
  'danger',
  'error',
  'success',
  'warning',
];

const variants = ['link', 'subtle', 'solid', 'ghost', 'outline', 'unstyled'];

export default function ButtonScreen() {
  const [buttonColorScheme, setbuttonColorScheme] = React.useState('');
  const [buttonVariant, setButtonVariant] = React.useState('');
  return (
    <Center px={4} flex={1}>
      <Heading padding={2}>Button</Heading>
      <VStack space={5} alignItems="center">
        <ToggleTheme />
        <HStack space={2}>
          <CustomSelect
            arrayValues={colorSchemes}
            selectedValue={buttonColorScheme}
            placeholder="Choose color scheme"
            onValueChange={colorScheme => setbuttonColorScheme(colorScheme)}
          />
          <CustomSelect
            arrayValues={variants}
            selectedValue={buttonVariant}
            placeholder="Choose button variant"
            onValueChange={variant => setButtonVariant(variant)}
          />
        </HStack>
        <Button
          width={125}
          height={50}
          colorScheme={buttonColorScheme}
          variant={buttonVariant}>
          Button
        </Button>
      </VStack>
    </Center>
  );
}
