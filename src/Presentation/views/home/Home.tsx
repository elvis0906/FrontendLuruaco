import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View , Image, TouchableOpacity, ToastAndroid, Alert} from "react-native";
import MyButton from "../../../Presentation/components/MyButton";
import { COLORS } from "../../../Presentation/constants/colors";
import {StackNavigationProp, StackScreenProps}from '@react-navigation/stack'
 
import useViewModel from './ViewModel'
import { CustomTextInput } from "../../components/CustomTextInput";
import * as Notifications from 'expo-notifications';
import { NotificationPush } from "../../utils/NotificationPush";
import { UpdateNotificationTokenUserUseCase } from "../../../Domain/useCases/user/UpdateNotificationTokenUser";
import { RootStackParamList } from "../../navigator/MainStackNavigator";
import RolesViewModel from "../roles/ViewModel";
import { Rol } from "../../../Domain/entities/Rol";



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



interface Props extends StackScreenProps<RootStackParamList, 'Home'>{};

export const HomeScreen = ({  navigation}: Props)=>{

  const { email, password, errorMessage, onChange, login, user, updateNotificationToken } = useViewModel();
  const {notification, notificationListener, responseListener, setNotification, registerForPushNotificationsAsync} = NotificationPush()

    useEffect(() => {
        if (errorMessage !== '') {
           ToastAndroid.show(errorMessage, ToastAndroid.LONG);
          
          //  Alert.alert("Login incorrecto", errorMessage, [{
          //   text:'OK',

          // }])
        }
    }, [errorMessage])

    useEffect(() => {   

        if (user?.id !== null && user?.id !== undefined && user?.id !== '') {

   
            registerForPushNotificationsAsync().then(token => {

              let user = 'ADMIN'
              
            if (user === 'ADMIN') {
              navigation.replace('RolesScreen');
            }else if(user === 'CLIENTE' ){
              navigation.replace('ClientTabsNavigator');
            }else{
              navigation.replace('DeliveryTabsNavigator');
            }
             
           
          })
               
     
            notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
              setNotification(notification);
            });
        
            responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
              console.log(response);
            });
        
            return () => {
              Notifications.removeNotificationSubscription(notificationListener.current);
              Notifications.removeNotificationSubscription(responseListener.current);
            };
          }
      }, [user])
  


    
    return(
        <View style={styles.container}>
           
         <View style={styles.logoContainer}>

        <View style={{padding: 0}}>
          <Text style={styles.logoText}>LURUAREPA APP</Text>
        </View>
        
         
         <Image 
            source={require('../../../../assets/logoLuruaco.png')}
            style={styles.logoImage}
          />
    
          
         </View>
    
          <View style={styles.form}>

            <Text style={styles.formText} >INGRESAR</Text>

            <CustomTextInput
                image={require('../../../../assets/email.png')}
                placeholder = 'Correo electronico'
                keyboardType='email-address'
                property='email'
                onChangeText={onChange}
                value={email}

            />

              <CustomTextInput
                image={require('../../../../assets/password.png')}
                placeholder = 'Contraseña'
                keyboardType='default'
                property='password'
                onChangeText={onChange}
                value={ password }
                secureTextEntry={true}

             />
         
    
           
            <View style={{marginTop: 30}}>
            <MyButton text='LOGIN' onPress={ () => login()} />
            </View>
    
            <View style={styles.formRegister}>
              <Text>No tiene cuenta?</Text>
              <TouchableOpacity onPress={()=> navigation.navigate('Register')}>

              <Text style={styles.formRegisterText}>Registrarse</Text>
              </TouchableOpacity>
              
            </View>
           
           
          </View>
    
        </View>
    
      )
}

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'white'
    },
  
   
    form:{
      width:'100%',
      height: '40%',
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
      position: 'absolute',
      alignSelf: 'center',
      top: '15%'
    },
  
    logoImage:{
      width: 200,
      height: 200,
      top: '10%'
    },
  
    logoText:{
      color: COLORS.black,
      textAlign: 'center',
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold'
    }
  })