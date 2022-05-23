
import {  Dimensions, StyleSheet } from "react-native"
import { Colors } from "../../componentes/generel/contants";
const style = StyleSheet.create({
    textContainer: {
      flex: 1,
      paddingHorizontal: 50,
      justifyContent: 'space-between',
      paddingBottom: 40,
    },
    indicatorContainer: {
      height: 50,
      flex: 1,
      marginTop:20,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    currentIndicator: {
      height: 12,
      width: 30,
      borderRadius: 10,
      backgroundColor: Colors.primary,
      marginHorizontal: 5,
    },
    indicator: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: Colors.grey,
      marginHorizontal: 5,
    },
  });
export default style;