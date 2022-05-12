import React, { useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
// import { userAuthStateListener } from '../../redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Route(){
    const currentUserObj =useSelector(state=>state.auth)
    // const dispatch =useDispatch();

    // useEffect(() => {
    //     dispatch(userAuthStateListener());
    // }, [])
    if(currentUserObj.loaded){
        return(
            < View></View>
        )
    }
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {!currentUserObj.currentUser ==null ?
            <Stack.Screen name="auth" component={AuthScreen} options={{headerShow :false}}/>
            :
                <>
                <Stack.Screen name="home" component={HomeScreen} options={{headerShow :false}}/>
                <Stack.Screen name="home" component={HomeScreen} options={{headerShow :false}}/>
                </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}