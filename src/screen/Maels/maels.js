import React from 'react'
import Navbar from "../../componentes/generel/navbar/navbar"
import { ScrollView, StyleSheet, TextInput, Text,View } from 'react-native';
// import Header from '../component/header';
import Cards from '../../componentes/Cards/cards';
import Feather from 'react-native-vector-icons/Feather';

export default function maels() {
  return (
    <ScrollView style={styles.container} >
    <Navbar/>
    <View >
        <Text style={{ fontSize: 20, marginLeft: 18, fontFamily: 'poppins-bold', marginTop: 5, color: "#bc8c4c" }}>Meals List</Text>
    </View>
    <View
        style={{
          flexDirection: 'row',
          borderColor: '#C6C6C6',
          borderWidth: 1,
          marginHorizontal:20,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}>
        <Feather
          name="search"
          size={20}
          color="#C6C6C6"
          style={{marginRight: 5}}
        />
        <TextInput placeholder="Search" />
      </View>
        <Cards  />
      
    
   
  </ScrollView>
)

}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#FFF",
    },
  
    TextInput: {
      height: 40,
      width:"80%",
      padding: 10,
      marginLeft: 10,
      backgroundColor: "#ffff",
      borderRadius: 5,
      fontFamily:'poppins-regular'
  
    }
  });
