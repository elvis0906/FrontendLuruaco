import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Button , Image, ScrollView, Pressable, StatusBar} from 'react-native'
 
import useViewModel from './ViewModel';
import styles from './Styles'
import {  useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constants/colors';
import MyButton from '../../../components/MyButton';
import { RootStackParamList } from '../../../navigator/MainStackNavigator';
 


interface Props extends StackScreenProps<RootStackParamList>{};



export const ProfileInfoScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const { removeUserSession, user } = useViewModel();

  useEffect(() =>{
    if(user.id === ''){
      navigation.replace('Home');
    }
  }, [user])
  return (

<ScrollView style={{ flex: 1, backgroundColor: COLORS.clear_white }}>
       <StatusBar backgroundColor={COLORS.orange_gold} />
         <View style={styles.container}>

         { 
              user?.image !== '' 
                &&
              <Image 
                source={{ uri: user?.image }}
                style={ styles.logoImage }
              />
            } 


          <Text style={styles.formText}>
            {user?.firstName} {user?.lastName}
          </Text>
       

        </View>
        <View >
              <Text style={{margin: 13,fontWeight: "600", color:COLORS.blue + "40"}}>
                INFORMATION
              </Text>
          </View>

          <View style={styles.fieldContainer}>           
            <Text 
              style={{
                fontWeight: "500", 
                color: COLORS.Light_orange,
                paddingRight: 10
              }}>Nombre Usuario</Text>
            <Text> {user?.firstName} {user?.lastName}</Text>
          </View>

          <View style={styles.fieldContainer}>           
            <Text 
              style={{
                fontWeight: "500", 
                color: COLORS.Light_orange,
                paddingRight: 10
              }}>Correo Electrónico</Text>
            <Text> {user?.email}</Text>
          </View>

          <View style={{...styles.fieldContainer}}>           
            <Text 
              style={{
                fontWeight: "500", 
                color: COLORS.Light_orange,
                paddingRight: 10
              }}>Celular</Text>
            <Text> {user?.phone}</Text>
            
          </View>
          <View style={{...styles.fieldContainer}}>           
            <Text 
              style={{
                fontWeight: "500", 
                color: COLORS.Light_orange,
                paddingRight: 10
              }}>Cerrar Sesión</Text>
            <Pressable
              style={styles.logout}
              onPress={() => {
                removeUserSession();
               
              }}>
                <Image 
              source={require('../../../../../assets/logout.png')}
              style={styles.logoutImage}
                />
              
            </Pressable> 
           

       </View>                  
             
            <Pressable
              style={styles.change}
              onPress={() => navigation.replace('RolesScreen')}>
                <Image 
              source={require('../../../../../assets/change.png')}
              style={styles.logoutImage}
                />
              
            </Pressable> 
           

    
       
          <View style={{width: '70%', margin: 50}}>
          <MyButton
            
              onPress={() => {

                navigation.navigate('ProfileUpdateScreen', {user: user!})
              }}
              text='Actualizar Información'
          />
          </View>
         
    </ScrollView>
    
   
    
   
  )
}
