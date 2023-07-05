import React from 'react';
import {Center, VStack, Heading, Select, CheckIcon} from 'native-base';
import ToggleTheme from '../../components/ToggleTheme';

export default function SelectScreen() {
  const [service, setService] = React.useState('');
  return (
    <Center px={4} flex={1}>
      <Heading padding={2}>Select</Heading>
      <VStack space={5} alignItems="center">
        <ToggleTheme />
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </VStack>
    </Center>
  );
}
