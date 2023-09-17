import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

 const ClientProductDetailStyles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: 'white'
        },

        productImage:{
            width:'100%',
            height: '45'
        },

        image:{
            width: 140,
            height:140,
            resizeMode: 'center',
            marginLeft: 110,
            marginVertical: 100,
            borderRadius: 15,
           
        },  

        productDetail:{
            position:'absolute',
            width:'100%',
            height:'57%',
            backgroundColor:COLORS.Light_orange,
            bottom: 0, 
            borderTopLeftRadius:40,
            borderTopRightRadius: 40
        },

        productInfo:{
            padding:30,
            flex: 1
        },

        divider:{
            height:1,
            backgroundColor: '#f2f2f2',
            marginTop: 15
        }, 

        name:{
            fontWeight: 'bold',
            fontSize: 18,
           // alignSelf: 'center'
        },

        descriptionTitle:{
            marginTop: 10,
            fontWeight:'bold'
        },

        descriptionContent:{    
            fontSize: 13,
            marginTop: 5
        },

        productActions:{
            flexDirection: 'row',
            height: 70,
            backgroundColor: '#f2f2f2'
        },

        actionLess:{
            backgroundColor: '#3a3a3a',
            paddingVertical: 5,
            paddingHorizontal:10,
            alignSelf:'center',
            borderBottomLeftRadius:10,
            borderTopLeftRadius: 10
        },

        actionAdd:{
            backgroundColor: '#3a3a3a',
            paddingVertical: 5,
            paddingHorizontal:10,
            alignSelf:'center',
            borderBottomRightRadius:10,
            borderTopRightRadius: 10
        },

        actionText:{
            color: 'white',
            fontSize: 15    
        },

        quantity:{
            backgroundColor: '#3a3a3a',
            paddingVertical: 5,
            paddingHorizontal:15,
            alignSelf: 'center'
        },

        buttonAdd:{
            flex: 1,
            marginLeft: 20,
            justifyContent:'center',
            alignItems: 'center'
        },

        back:{
            position: 'absolute',
            top:30,
            left: 15
        },

        backImage:{
            height: 40,
            width:40
        }
 })


 export default ClientProductDetailStyles