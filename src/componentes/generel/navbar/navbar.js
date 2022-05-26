import React from 'react';
import { ImageBackground, StyleSheet, Text,View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const Navbar = () => {
return (
    <ImageBackground source={require('../../../../assets/style-4.png')} style={styeles.container}>
    <View style={styeles.header}>
        <Text style={styeles.texteHeder}>Marhaba</Text>
        <SimpleLineIcons name="logout" size={24} color="#bc8c4c" style={{  marginRight:20 }} />
    </View>
    </ImageBackground>
    
);
 }

 const styeles = StyleSheet.create({
      container:{
        height: 80,
        paddingTop: 38,
        backgroundColor: "#000"
    },

    
    texteHeder:{
        textAlign: 'center',
        color: '#bc8c4c',
        fontSize: 20,
        fontFamily: 'poppins-bold',
        marginLeft:20,
        
      },
      header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
      },
 })
 export default  Navbar;
 