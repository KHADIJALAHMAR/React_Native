
import { StyleSheet ,Dimensions,Platform} from 'react-native';
import { Colors } from "../../../componentes/generel/contants";
const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    width,
    height, 
    backgroundColor:'#000',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center',
},
footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
},
text_header: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 30
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5
},
textInput:{
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},
text_footer: {
  color: '#05375a',
  fontSize: 16
},
signIn: {
  width: '100%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10
},
textSign: {
  fontSize: 18,
  fontWeight: 'bold'
}
})
export default style;