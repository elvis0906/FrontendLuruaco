import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';

const ProfileUpdateStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
      },
      fallback: {
        backgroundColor: COLORS.Light_orange,        
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom:6,
      },

      initialLetter:{
        
          fontSize: 60,
          lineHeight: 80,
          textAlign: 'center',
          color: COLORS.white
      },    
     
      form:{
        width:'100%',
        height: '50%',
        backgroundColor: COLORS.soft_green,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding:30
      },
    
      formText:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
      },
    
      formIcon: {
         width: 25,
         height: 25,
         marginTop: 5
      },
    
      formInput:{
        flexDirection:'row',
        marginTop: 30,
      },
    
      formTextInput:{
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    
      },
    
      formRegister:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
      },
    
      formRegisterText:{
        fontStyle: 'italic',
        color: COLORS.blue,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.blue,
        fontWeight: 'bold',
        marginLeft: 10
      },
    
      logoContainer:{
       
        padding: 15,
        //backgroundColor: COLORS.clear_white,
        alignItems: "center",
      },
    
      logoImage:{
       
        width: 100,
        height: 100
      },
    
      logoText:{
        color: COLORS.black,
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
      },
      loading: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left:0, 
    },  image: {
      width: 110,
      height: 110,
      resizeMode: 'contain'
  },
});

export default ProfileUpdateStyles;