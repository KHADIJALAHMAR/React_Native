
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { 
    StyleSheet,
    View, 
    Text, 
    TouchableOpacity, 
    Image
} from 'react-native';
import { Display } from '../../componentes/generel/utils';
import {Colors ,Images} from "../../componentes/generel/contants";
import {PrimaryButton } from "../../componentes/generel/button/button";
import style from './style';

const  SplashScreen= ({navigation}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 400 }}>
          <Image
            style={{
              width: '100%',
              height:'100%',}}
            source={require('../../../assets/onboardImage.png')}
          />
        </View>
        <View style={style.textContainer }>
          <View>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
              Delicious Food
            </Text>
            <Text
            style={{
                marginTop: 20,
                fontSize: 18,
                textAlign: 'center',
                color: Colors.grey,
              }}>
              We help you to find best and delicious food
            </Text>
          </View>
          <View style={style.indicatorContainer}>
            <View style={style.currentIndicator} />
            <View style={style.indicator} />
            <View style={style.indicator} />
        </View>

        <PrimaryButton
            onPress={() => navigation.navigate('register')}
            title="Get Started"
        />
        </View>
      </SafeAreaView>
    );
  };
  


export default SplashScreen;