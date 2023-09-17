import React, { useEffect, useState } from "react";
import {ActivityIndicator, Image, ScrollView, Text, ToastAndroid, TouchableOpacity, StatusBar, View} from 'react-native'
import MyButton from "../../../../components/MyButton";
import { ModalPickImage } from "../../../../components/ModalPickImage";
import { COLORS } from "../../../../constants/colors";
import styles from './Styles';
import { CustomTextInput } from "../../../../components/CustomTextInput";
import useViewModel from './ViewModel';

export const AdminDeliveryCreateScreen = () =>{

    const {email, firstName, lastName, phone, image, password, confirmPassword, responseMessage, onChange, takePhoto, pickImage, createUserDelivery, loading} = useViewModel()
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
      if(responseMessage !== ''){
        ToastAndroid.show(responseMessage, ToastAndroid.LONG)
      }
      
    }, [responseMessage])

    return (
        // COLUMN
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.orange_gold} />
    
            <View style={ styles.logoContainer }>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                {
                  image == ''
                  ? <Image 
                  source={ require('../../../../../../assets/user_image.png') }
                  style={ styles.logoImage }
              />
              : <Image 
              source={{uri: image} }
              style={ styles.logoImage }
                 />
                }
                
              </TouchableOpacity>
              
    
              <Text style={ styles.logoText }>SELECCIONA UNA IMAGEN</Text>
            </View>
    
            <View style={ styles.form }>
    
              <ScrollView>
    
              <Text style={ styles.formText }>NUEVO REPARTIDOR</Text>
    
              <CustomTextInput 
                placeholder='Nombres'
                keyboardType='default'
                image={ require('../../../../../../assets/user.png') }
                property='firstName'
                onChangeText={ onChange }
                value={ firstName }
                />
    
    
              <CustomTextInput 
                placeholder='Apellidos'
                keyboardType='default'
                image={ require('../../../../../../assets/my_user.png') }
                property='lastName'
                onChangeText={ onChange }
                value={ lastName }
                />
              
              <CustomTextInput 
                placeholder='Correo electronico'
                keyboardType='email-address'
                image={ require('../../../../../../assets/email.png') }
                property='email'
                onChangeText={ onChange }
                value={ email }
                />
    
              <CustomTextInput 
                placeholder='Telefono'
                keyboardType='numeric'
                image={ require('../../../../../../assets/phone.png') }
                property='phone'
                onChangeText={ onChange }
                value={ phone }
                />
                     <CustomTextInput 
            placeholder='Contraseña'
            keyboardType='default'
            image={ require('../../../../../../assets/password.png') }
            property='password'
            onChangeText={ onChange }
            value={ password }
            secureTextEntry={ true }
            />
          
          <CustomTextInput 
            placeholder='Confirmar Contraseña'
            keyboardType='default'
            image={ require('../../../../../../assets/confirm_password.png') }
            property='confirmPassword'
            onChangeText={ onChange }
            value={ confirmPassword }
            secureTextEntry={ true }
            />
         
    
              <View style={{ marginTop: 30 }}>
                  
                  <MyButton text='CONFIRMAR' onPress={ ()=>createUserDelivery() } />
    
              </View>
            
              <ModalPickImage
          openGallery={ pickImage }
          openCamera={ takePhoto }
          modalUseState={ modalVisible }
          setModalUseState={ setModalVisible }
          />

        {
          loading && 
          <ActivityIndicator 
              style={styles.loading} 
              size="large"
              color = {COLORS.Light_orange}

          />
          
        }
        </ScrollView>
        </View>
        
    </View>
    );
}