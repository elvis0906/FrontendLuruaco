import React, {useEffect, useState} from 'react'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { CustomTextInput } from '../../components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './Styles';
import MyButton from '../../components/MyButton';
import { StackScreenProps } from '@react-navigation/stack';
import { COLORS } from '../../constants/colors';
import { ModalPickImage } from '../../components/ModalPickImage';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
 

interface Props extends StackScreenProps<RootStackParamList, 'Register'>{};


export const RegisterScreen = ({navigation, route}: Props) => {

  const { firstName, lastName, email, phone, password, image, confirmPassword, loading, errorMessage, user, onChange, register, pickImage, takePhoto, isValidForm } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);

      // Alert.alert("Registro incorrecto", errorMessage, [{
      //   text:'OK',
      //   onPress: removeError
      // }])
    }
  }, [errorMessage])
  
  useEffect(() => {      
    if (user?.id !== null && user?.id !== undefined) {
        navigation.replace('ClientTabsNavigator');
    }
  }, [user])

  return (
    // COLUMN
    <View style={styles.container}>
        

        <View style={ styles.logoContainer }>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {
              image == ''
              ? <Image 
              source={ require('../../../../assets/user_image.png') }
              style={ styles.logoImage }
          />
          : <Image 
          source={{uri: image} }
          style={ styles.logoImage }
             />
            }
            
          </TouchableOpacity>
          

          <Text style={ styles.logoText }>SELECIONA UNA IMAGEN</Text>
        </View>

        <View style={ styles.form }>

          <ScrollView>

          <Text style={ styles.formText }>REGISTRARSE</Text>

          <CustomTextInput 
            placeholder='Nombres'
            keyboardType='default'
            image={ require('../../../../assets/user.png') }
            property='firstName'
            onChangeText={ onChange }
            value={ firstName }
            />


          <CustomTextInput 
            placeholder='Apellidos'
            keyboardType='default'
            image={ require('../../../../assets/my_user.png') }
            property='lastName'
            onChangeText={ onChange }
            value={ lastName }
            />
          
          <CustomTextInput 
            placeholder='Correo electronico'
            keyboardType='email-address'
            image={ require('../../../../assets/email.png') }
            property='email'
            onChangeText={ onChange }
            value={ email }
            />

          <CustomTextInput 
            placeholder='Telefono'
            keyboardType='numeric'
            image={ require('../../../../assets/phone.png') }
            property='phone'
            onChangeText={ onChange }
            value={ phone }
            />
          
          <CustomTextInput 
            placeholder='Contraseña'
            keyboardType='default'
            image={ require('../../../../assets/password.png') }
            property='password'
            onChangeText={ onChange }
            value={ password }
            secureTextEntry={ true }
            />
          
          <CustomTextInput 
            placeholder='Confirmar Contraseña'
            keyboardType='default'
            image={ require('../../../../assets/confirm_password.png') }
            property='confirmPassword'
            onChangeText={ onChange }
            value={ confirmPassword }
            secureTextEntry={ true }
            />

          <View style={{ marginTop: 30 }}>
              
              <MyButton text='CONFIRMAR' onPress={ () => register() } />

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
    
// HOT RELOAD


    
