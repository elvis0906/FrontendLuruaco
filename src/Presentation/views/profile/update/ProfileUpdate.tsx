import React, {useEffect, useState} from 'react'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Pressable, StatusBar } from 'react-native';
import { CustomTextInput } from '../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './Styles';
import MyButton from '../../../components/MyButton';
import { StackScreenProps } from '@react-navigation/stack';
 
import { COLORS } from '../../../constants/colors';
import { ModalPickImage } from '../../../components/ModalPickImage';
import { RootStackParamList } from '../../../navigator/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'>{};


export const ProfileUpdateScreen = ({navigation, route}: Props) => {

  const {user} = route.params
  const { firstName, lastName, phone, loading,image, errorMessage, successMessage, pickImage,takePhoto, onChange, update, onChangeInfoUpdate, isValidForm } = useViewModel(user);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

 
  useEffect(() => {
    if (successMessage != '') {
      ToastAndroid.show(successMessage, ToastAndroid.LONG);
    }
  }, [successMessage])
  
  return (
    // COLUMN
    <View style={styles.container}>
        
        <StatusBar backgroundColor={COLORS.orange_gold} />
        <View style={ styles.logoContainer }>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          
        {
                image == ''
                ? <Image 
                source={{ uri: user?.image }}
                style={ styles.logoImage }
            />
                : <Image 
                    source={{ uri: image }}
                    style={ styles.image }
                  />
              }
             
       </TouchableOpacity>
        </View>

        <View style={ styles.form }>

          <ScrollView>

          <Text style={ styles.formText }>ACTUALIZAR</Text>

          <CustomTextInput 
            placeholder='Nombres'
            keyboardType='default'
            image={ require('../../../../../assets/user.png') }
            property='firstName'
            onChangeText={ onChange }
            value={ firstName }
            />


          <CustomTextInput 
            placeholder='Apellidos'
            keyboardType='default'
            image={ require('../../../../../assets/my_user.png') }
            property='lastName'
            onChangeText={ onChange }
            value={ lastName }
            />
          
        

          <CustomTextInput 
            placeholder='Telefono'
            keyboardType='numeric'
            image={ require('../../../../../assets/phone.png') }
            property='phone'
            onChangeText={ onChange }
            value={ phone }
            />
          
         

          <View style={{ marginTop: 30 }}>
              
              <MyButton text='CONFIRMAR' onPress={ () => update() } />

          </View>
          
       <ModalPickImage 
       
            openGallery={pickImage}
            openCamera={takePhoto}
            modalUseState={modalVisible}
            setModalUseState={setModalVisible}
       />
        {
          loading && 
          <ActivityIndicator 
            style={styles.loading} 
            size="large" 
            color={ COLORS.orange_gold }  
          />
        }       
      </ScrollView>
        </View>

    </View>
    );
}
    
// HOT RELOAD


    
