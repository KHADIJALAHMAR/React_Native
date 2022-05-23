import { View, Text ,StyleSheet,TextInput,ImageBackground} from 'react-native';
import React from 'react';
import { Colors } from '../../../componentes/generel/contants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import style from "./style";

import {PrimaryButton } from "../../../componentes/generel/button/button";

export default function Login ({navigation})  {
    return (
      <View style={style.container}>
           <View style={style.header}>
              <ImageBackground style={{height: "100%",width:"100%" , position: 'absolute'}}  source={require('../../../../assets/style-4.png')}/>
                <Text  style={style.text_header}>Welcome!</Text>
            </View>
                <View style={style.footer}>
                <Text style={style.text_footer }>Username</Text>
                  <View style={style.action}>
                  <FontAwesome name="user-o" size={20} />
                        <TextInput 
                            placeholder="Your Username"
                            placeholderTextColor="#666666"
                            style={[style.textInput, {
                                color:Colors.text
                            }]}
                            />
                </View>
                </View>
      </View>
    );
  };
  
{/* const style = StyleSheet.create({
    textContainer: {
      flex: 1,
      paddingHorizontal: 50,
      justifyContent: 'space-between',
      paddingBottom: 40,
      marginBottom:70,
    },
    textInput:{
      flexDirection:"row",
      alignItems:"center",
    },
    image:{
      top: -20,
      width: '100%',
      height:' 100%',
      borderRadius: 40,
      // left: 150,
    },
    input:{
    borderColor: Colors.grey,
    height: 30,
    borderRadius: 30,
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    }
    
  }); */}



// export default Login;