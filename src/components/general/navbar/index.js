import React from "react";
import { withTheme } from "react-native-paper";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import MyButton from "../actionButton/MyButton";

// import
// import {Feather} from '@expo/vector-icons'

const NavbarGeneral = ({ theme, navigation }) => {
    console.log(navigation, "nav")
  const { colors } = theme;

  const HandelPress = (path) => {
    // navigation.navigate(path);
  };
  return (
    <View style={styles.container}>
      {/* <MyButton
        title="Register"
        onPress={() => console.log("clicked from register")}
      /> */}
      <MyButton title="Home" onPress={() => HandelPress("register")} />

      {/* <TouchableOpacity style={styles.button}> */}
      {/* <Feather name ='arrow-left' size ={26}/> */}
      {/* </TouchableOpacity> */}
      {/* <Text title={props.title} name ='arrow-left' ></Text> */}
      {/* <TouchableOpacity style={styles.button}> */}
      {/* <Feather name ='arrow-left' size ={26} color={leftButton.display ?'black':'white'}/> */}
      {/* <Mybutton name="" /> */}

      {/* </TouchableOpacity> */}

      {/* <Btn/> */}
    </View>
  );
};

export default withTheme(NavbarGeneral);
