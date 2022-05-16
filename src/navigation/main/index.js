import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { userAuthStateListener } from '../../redux/actions';
import HomeScreen from "../../screen/Home/HomeScreen";
import RegisterScreen from "../../screen/auth/register/register";
import { createStackNavigator } from "@react-navigation/stack";



const Route = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} />
      {/* <Stack.Screen name="login" component={LoginScreen} /> */}
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
export default Route;
