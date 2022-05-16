
import {  Dimensions, StyleSheet } from "react-native"

const {height} = Dimensions.get("screen");
const height_logo = height * 0.50;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
},
footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
},
logo: {
    flex:1,
      width:height ,
      height:height_logo,
      resizeMode: 'stretch',

      
  },
  title: {
     color: 'grey',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
export default styles;