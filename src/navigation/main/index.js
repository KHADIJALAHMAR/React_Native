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
            <Stack.Navigator initialRouteName="login" >
            <Stack.Screen name="SplashScreen" component={SplashScreen}   options={{headerShown: false}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: false}}/>
            <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}} />
            <Stack.Screen name="login" component={LoginScreen}options={{headerShown: false}} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;