import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../../screen/Auth/register.js/register";
import LoginScreen from  "../../screen/Auth/login/login";
import HomeScreen from "../../screen/Home/home";
import SplashScreen from "../../screen/SplashScreen/splashScreen";
import Maels from "../../screen/Maels/maels"

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Maels" >
            <Stack.Screen name="SplashScreen" component={SplashScreen}   options={{headerShown: false}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={LoginScreen}options={{headerShown: false}} />
            <Stack.Screen name="Maels" component={Maels}options={{headerShown: false}} />
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;