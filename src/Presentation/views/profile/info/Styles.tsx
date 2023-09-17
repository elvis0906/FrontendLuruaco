import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

const ProfileInfoStyles = StyleSheet.create({
    container:{        
        padding:65 ,
        //backgroundColor: COLORS.clear_white,
        alignItems: "center",
       
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
      
      logoImage:{
      
        width: 100,
        height: 100
      },
    
      formText:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
      },

      fieldContainer:{
        margin: 13,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 15
      },

      logout:{      
        position: 'absolute',
        right: 0
      },

      logoutImage:{
        width: 40,
        height: 40,
      },
      change:{
        position: 'absolute',
        alignSelf:'center',
        top:80,
        right:15
    }

});

export default ProfileInfoStyles;