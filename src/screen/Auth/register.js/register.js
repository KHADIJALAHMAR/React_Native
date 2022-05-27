import { View, Text ,StyleSheet,TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import {React,useState} from 'react';
import { Colors } from '../../../componentes/generel/contants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import style from "./style";
import { Createuser } from '../../../services/Auth';

export default function Register({navigation}) {

  const [user , setUser] = useState({username: "" , email: "", password: "" , repeated_password: "", role: ""})
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = async () => {
    if (
      user.username &&
      user.email &&
      user.password &&
      user.repeated_password &&
      user.role
    ) {
      await Createuser(
        user
      );
      await console.log(user)
    }
    await navigation.navigate('Login')

    setSubmitted(true);
  };





  return (
    <View style={style.container}>
          <View style={style.header}>
              <ImageBackground style={{height: "100%",width:"100%" , position: 'absolute'}}  source={require('../../../../assets/style-4.png')}/>
                <Text  style={[style.text_header,{marginBottom: 80}]}>Welcome!</Text>
            </View>
                <View style={style.footer}>
                <Text style={style.text_footer }>Username</Text>
                  <View style={style.action}>
                  <FontAwesome name="user-o" size={20} />
                        <TextInput 
                            placeholder="Your Username"
                            placeholderTextColor="#666666"
                            onChangeText={username => setUser({...user, username: username})}
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
                            onChangeText={email => setUser({...user, email: email})}
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
                            onChangeText={password => setUser({...user, password: password})}
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
                            onChangeText={repeatedpassword => setUser({...user, repeated_password: repeatedpassword})}
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
                            onChangeText={role => setUser({...user, role: role})}
                            style={[style.textInput, {
                                color:Colors.text
                            }]}
                            />
                </View> 
                <TouchableOpacity
                    style={style.button}
                    onPress={handleSubmit}
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
  )
}
