import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StatusBar,
    Image
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import styles from './style'

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#FF6347' barStyle="light-content"/>
        <View style={styles.header}>
            <Image 
                // animation="bounceIn"
                // duraton="1500"
            source={require('../../assests/images/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Find best food in your locality!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('register')}>
                {/* <LinearGradient
                    colors={['#FFA07A', '#FF6347']}
                    style={styles.signIn}
                > */}
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                {/* </LinearGradient> */}
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
};

export default SplashScreen;