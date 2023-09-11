import React from 'react';
import {View} from 'react-native';
import {Text} from './Text';
export default function FilteredTab({index}) {
  return (
    <View
      style={{
        backgroundColor: 'red',
        width: 100,
        height: 200,
      }}>
      <Text>FilteredTab</Text>
    </View>
  );
}
