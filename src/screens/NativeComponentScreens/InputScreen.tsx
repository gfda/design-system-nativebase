import React from 'react';
import {Center, VStack, Input, ScrollView, Heading} from 'native-base';
import ToggleTheme from '../../components/ToggleTheme';
import CustomSelect from '../../components/CustomSelect';

const variants = ['outline', 'filled', 'underlined', 'unstyled', 'rounded'];

export default function InputScreen() {
  const [inputVariant, setInputVariant] = React.useState('');
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Center px={4} flex={1}>
        <Heading padding={2}>Input</Heading>
        <VStack space={5} alignItems="center">
          <ToggleTheme />
          <CustomSelect
            arrayValues={variants}
            selectedValue={inputVariant}
            placeholder="Choose color scheme"
            onValueChange={selectedVariant => setInputVariant(selectedVariant)}
          />
          <Input variant={inputVariant} placeholder={inputVariant} />
          <Input
            variant={inputVariant}
            placeholder="Password"
            type="password"
          />
          <Input variant={inputVariant} placeholder="Invalid" isInvalid />
        </VStack>
      </Center>
    </ScrollView>
  );
}
