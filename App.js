import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavbarGeneral from './src/components/general/navbar';
export default function App() {
  return (
    <View style={styles.container}>
      <NavbarGeneral/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
