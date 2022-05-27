import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import{ Colors} from "../../componentes/generel/contants/index"
import APP_URL from '../../services/URL'
import axios from 'axios';
import {PrimaryButton} from '../../componentes/generel/button/button';

const CartScreen = ({navigation}) => {
    const [ Data, setData ] = useState([])
    useEffect(() => {
        axios.get(`${APP_URL}/Admin/Product`)
        .then(res => {
            console.log(res.data);
            setData(res.data);
        }).catch (err => {
            console.log(err);
            console.log('no data');
        }) 
    },[])
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={{uri: `http://localhost:4000/Admin/Product/${item.id}/image`}} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16 ,color:'#fff'}}>{item.name}</Text>
          <Text style={{fontSize: 10, color: Colors.grey}}>
            {item.decsription}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.white}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18 ,color: Colors.white}}>3</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color={Colors.white} />
            <Icon name="add" size={25} color={Colors.white} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={Data}
        renderItem={({item}) => <CartCard item={item} />}         
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,

  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#000',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
    // color:'#fff'
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;