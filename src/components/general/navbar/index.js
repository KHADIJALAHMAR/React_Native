import React from "react";
import { View ,Text ,TouchableOpacity} from "react-native"
import styles from "./style";
import {Feather} from '@expo/vector-icons'

export default function NavbarGeneral({title ='LivraisonMarhba' ,leftButton ={display:false}}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Feather name ='arrow-left' size ={26}/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button}>
                <Feather name ='arrow-left' size ={26} color={leftButton.display ?'black':'white'}/>
            </TouchableOpacity>
        </View>
    )
}
