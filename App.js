import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./src/navigation/main/index";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/main/index";
 
export default function App() {
  return (
    <View >
      <Routes /> 
    </View>
  );
}