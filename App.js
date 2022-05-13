import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import NavbarGeneral from "./src/components/general/navbar";
import Theme from "./src/components/general/theme/colors";
import Main from "./src/navigation/main/index";
import Home from "./src/screen/Home/HomeScreen";
import Route from "./src/navigation/main/index";

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={Theme}>
        <Route />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });
