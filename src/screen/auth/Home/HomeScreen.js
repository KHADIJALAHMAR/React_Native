import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View>
        <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
    </View>
  )
}