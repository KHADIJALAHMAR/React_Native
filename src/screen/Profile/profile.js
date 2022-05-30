import {LinearGradient} from 'expo-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { PrimaryButton } from '../../componentes/generel/button/button';

 function  Profile ({navigation}) {

    const Username= useSelector((state)=>state.username);
    const email=useSelector((state)=>state.email);
    // console.log(Username);
  
    return (
      <View style={styles.container}>
      
          <ImageBackground style={styles.header} source={require('../../../assets/style-4.png')}>
            <LinearGradient  
                colors={['#00000000', '#000000']} 
                start={[0.1,0.1]}
                style={{height : '100%', width : '100%'}}>
            </LinearGradient>
          </ImageBackground>
          
          <Image style={styles.avatar} source={require('../../../assets/onboardImage.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{Username}</Text>
            </View>
            <View style={{
              alignSelf:'center',
              flexDirection:'row',
              backgroundColor:"#fff",
              width:"90%",
              padding:20,
              paddingBottom:22,
              borderBottomEndRadius:10,
              shadowOpacity:80,
              elevation:15,
              marginTop:20,
              marginBottom:40
          }}>
            <FontAwesome name="envelope"  size={20} />
            <Text style={styles.name}>{email}</Text>
            </View>
            <PrimaryButton
            onPress={() => navigation.navigate('Maels')}
            title="Maels"
        />
    
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  header:{
    height:200,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 40,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
  paddingLeft: 10,
  color: '#05375a',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#bc8c4c",
  },
});


export default Profile;