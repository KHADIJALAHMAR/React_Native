import React from "react"
import { useNavigation} from '@react-navigation/native'
import { withTheme } from "react-native-paper";
import { View, Text, TouchableOpacity,Button } from "react-native";
import styles from "./style";
import MyButton from "../actionButton/MyButton";
// import { createStackNavigator   } from "@react-navigation/stack";

// import
// import {Feather} from '@expo/vector-icons'

const NavbarGeneral = ( props )  => {
    const navigation = useNavigation(); 
    // console.log(navigation, "nav")
  const { colors } = props.theme;

  const HandelPress = (path) => {
    navigation.navigate(path);
  };
  return (
    <View style={styles.container}>

        <Button
        onPress={() => HandelPress('register')} 
        title='register '
    />
     <Button
        onPress={() => navigation.navigate('login')}
        title='login'
    />


      {/* <TouchableOpacity style={styles.button}>
     
      {/* <Feather name ='arrow-left' size ={26}/> */}
      {/* </TouchableOpacity>  */}
      {/* <Text title={props.title} name ='arrow-left' ></Text> */}
      {/* <TouchableOpacity style={styles.button}> */}
      {/* <Feather name ='arrow-left' size ={26} color={leftButton.display ?'black':'white'}/> */}
      {/* <Mybutton name="" /> */}

      {/* </TouchableOpacity> */}

      {/* <Btn/> */}
    </View>
  );
};

export default withTheme (NavbarGeneral);
