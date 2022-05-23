import { View, Text ,StyleSheet,TextInput,ImageBackground} from 'react-native';
import React from 'react';
import { Colors } from '../../../componentes/generel/contants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import style from "./style";

export default function Register() {
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
                <Text style={[style.text_footer,{marginTop: 30}]}>Email</Text>
                  <View style={style.action}>
                  <FontAwesome name="envelope" size={20} />
                        <TextInput 
                            placeholder="Email"
                            placeholderTextColor="#666666"
                            style={[style.textInput, {
                                color:Colors.text
                            }]}
                            />
                </View>
                <Text  style={[style.text_footer,{marginTop: 30}]}>Password</Text>
                <View style={style.action}>
                  <FontAwesome name="lock" size={20} />
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="#666666"
                            style={[style.textInput, {
                                color:Colors.text
                            }]}
                            />
                  <FontAwesome name='eye-slash' color="grey" size={20}/>
                </View>
                <Text style={[style.text_footer,{marginTop: 30}]}> Repeated Password</Text>
                <View style={style.action}>
                  <FontAwesome name="lock" size={20} />
                        <TextInput 
                            placeholder="Repeated Password"
                            placeholderTextColor="#666666"
                            style={[style.textInput, {
                                color:Colors.text
                            }]}
                            />
                  <FontAwesome name='eye-slash' color="grey" size={20}/>
                </View>
                <Text  style={[style.text_footer,{marginTop: 30}]}> Chose Role</Text>
                <View style={style.action}>
                  <FontAwesome name="user-o" size={20} />
                        <TextInput 
                            placeholder="Chose Role"
                            placeholderTextColor="#666666"
                            style={[style.textInput, {
                                color:Colors.text
                            }]}
                            />
                </View> 
                <LinearGradient
                    colors={['#E2BB73' ,'#AC9261']}
                    style={style.signIn}
                >
                    <Text style={[style.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
            </View>
            
    </View>
  )
}
