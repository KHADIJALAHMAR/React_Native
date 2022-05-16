import { View, Text , Image,TouchableOpacity} from "react-native";
import React from "react";

import styles from "./styles";
// import RegisterImage from './'
const Register = () => {
  return (
    <View  >
      <TouchableOpacity>
      <Image   style={styles.imageRegister} source = {require ('../../../assests/images/delivry.png')} 
/>
      </TouchableOpacity>
      {/* https://img.freepik.com/vecteurs-libre/illustration-vectorielle-service-ramassage-epicerie-concept-abstrait-commande-epicerie-ligne-achats-proteges-contre-virus-produits-frais-surs-livraison-express-nourriture-metaphore-abstraite-du-commerce-electronique_335657-2932.jpg?t=st=1652671382~exp=1652671982~hmac=2c6f7b492f68445239c0f68ae62e7b84adcb22965dc92779b965c4d9bc2a594b&w=740 */}
      {/* <Image  source={{uri: '../../../assests/images/register.jpg'}}/> */}
      
      {/* // source= {require( '../../../../src/assests/images/register.jpg')} */}

      {/* <Text  style={styles.container} >hello </Text> */}
    </View>
  );
};
export default Register;
