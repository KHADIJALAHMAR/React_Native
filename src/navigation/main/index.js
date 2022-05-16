import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { userAuthStateListener } from '../../redux/actions';
import HomeScreen from "../../screen/Home/HomeScreen";
import RegisterScreen from "../../screen/auth/register/register";
import SplashScreen from "../../screen/SplashScreen/SplashScreen "
import { createStackNavigator } from "@react-navigation/stack";


const Route = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="splashScreen">
      <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false } } />
      <Stack.Screen name="splashScreen" component={SplashScreen} options={{ headerShown: false } }/>
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
export default Route;
