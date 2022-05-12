import React, { useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
// import { userAuthStateListener } from '../../redux/actions';
// import {HomeScreen} from ''

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Route(){
    const currentUserObj =useSelector(state=>state.authenticated)
    const dispatch =useDispatch();

    // useEffect(() => {
    //     dispatch(userAuthStateListener());
    // }, [])
    if(currentUserObj == false){
        return(
            < View></View>
        )
    }
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="register" component={RegisterScreen} />
                </>
            </Stack.Navigator>
        </NavigationContainer>
    )
}