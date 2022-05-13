import { View, Text } from "react-native";
import React from "react";
// import MyButton from '/src/components/general/actionButton/MyButton'
import Navbargeneral from "../../components/general/navbar/index";
import { withTheme } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  
  // console.log(navigation, "home")
  return (
    <View>
      <Navbargeneral navigate={ navigation} />
      {/* <Text> helloooo</Text> */}
      {/* <MyButton/> */}
    </View>
  );
};

export default withTheme(HomeScreen);
