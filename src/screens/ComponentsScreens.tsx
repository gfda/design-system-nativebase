import React from 'react';
import {Center, VStack, View, Button, Heading, ScrollView} from 'native-base';

export default function ComponentsScreen({route, navigation}) {
  const {list} = route.params;

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Center px={4} flex={1}>
        <Heading padding={2}>Components</Heading>
        <VStack space={10} alignItems="center">
          {list.map(({name}) => {
            return (
              <View key={name}>
                <Button
                  width={125}
                  height={50}
                  onPress={() => navigation.navigate(`${name}Screen`)}>
                  {name}
                </Button>
              </View>
            );
          })}
        </VStack>
      </Center>
    </ScrollView>
  );
}
