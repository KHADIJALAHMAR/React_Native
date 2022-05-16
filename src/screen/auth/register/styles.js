import { StyleSheet } from "react-native"


const styles =StyleSheet.create({
    container:{
        flex:'row',
        background:'space-betwen',
        alignItems:'center',
        color:'red',
    },
    button:{
        paddingVertical:1,
        paddingHorizontal:20
    },
    imageRegister:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:200,
        width:300,
        resizeMode: 'stretch'
    }
})

export default styles;