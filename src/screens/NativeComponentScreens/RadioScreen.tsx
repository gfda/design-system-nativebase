import React from 'react';
import {Center, VStack, Heading, Radio} from 'native-base';
import ToggleTheme from '../../components/ToggleTheme';

export default function RadioScreen() {
  const [value, setValue] = React.useState('one');

  return (
    <Center px={4} flex={1}>
      <Heading padding={2}>Radio</Heading>
      <VStack space={5} alignItems="center">
        <ToggleTheme />
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={value}
          onChange={nextValue => {
            setValue(nextValue);
          }}>
          <Radio value="one" my={1}>
            One
          </Radio>
          <Radio value="two" my={1}>
            Two
          </Radio>
          <Radio value="invalid" isInvalid my={1}>
            Invalid
          </Radio>
          <Radio value="disabled" isDisabled my={1}>
            Disabled
          </Radio>
        </Radio.Group>
      </VStack>
    </Center>
  );
}
