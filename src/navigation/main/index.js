import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../../screen/Auth/register.js/register";
import LoginScreen from  "../../screen/Auth/login/login";
import HomeScreen from "../../screen/Home/home";
import SplashScreen from "../../screen/SplashScreen/splashScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="register">
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="login" component={LoginScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;