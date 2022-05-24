import { View, Text ,StyleSheet,TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import React from 'react';
import { Colors } from '../../../componentes/generel/contants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import style from "./style";

// import {PrimaryButton } from "../../../componentes/generel/button/button";

export default function Login ({navigation})  {


    return (
      <View style={style.container}>
           <View style={style.header}>
              <ImageBackground style={{height: "100%",width:"100%" , position: 'absolute'}}  source={require('../../../../assets/style-4.png')}/>
                <Text  style={[style.text_header,{marginBottom: 80}]}>Welcome!</Text>
            </View>
                <View style={style.footer}>
                <Text style={style.text_footer }>Email</Text>
                  <View style={style.action}>
                  <FontAwesome name="envelope"  size={20} />
                        <TextInput 
                            placeholder="Your Email"
                            placeholderTextColor="#666666"
                            style={[style.textInput, {
                                color:Colors.text
                            }]}
                            />
                </View>
                <Text style={[style.text_footer,{marginTop: 30}]}>Password</Text>
                  <View style={style.action}>
                  <FontAwesome name="lock" size={20} />
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="#666666"
                            style={[style.textInput, {
                                color:Colors.text
                            }]}
                            />
                </View>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate('register')}
                    >
                <LinearGradient
                    colors={['#E2BB73' ,'#AC9261']}
                    style={style.signIn}
                >
                    <Text style={[style.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
              </TouchableOpacity>
                </View>
      </View>
    );
  };
