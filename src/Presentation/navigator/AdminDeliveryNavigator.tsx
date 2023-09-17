import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import { Image, TouchableOpacity } from 'react-native';
import { AdminDeliveryListScreen } from '../views/admin/delivery/list/DeliveryList';
import { AdminDeliveryCreateScreen } from '../views/admin/delivery/create/DeliveryCreate';
import { DeliveryProvider } from '../context/DeliveryContext';


export type DeliveryStackParamList = {
    AdminDeliveryListScreen:  undefined,
    AdminDeliveryCreateScreen: undefined,
     
}

const Stack = createNativeStackNavigator<DeliveryStackParamList>();

export const AdminDeliveryNavigator = () => {
  return (
  
    <ContextState>
          <Stack.Navigator screenOptions={{
          headerShown: false
        }}>

            <Stack.Screen
              name="AdminDeliveryListScreen"
              component={AdminDeliveryListScreen}
              options={ ({route, navigation}) => (
                {
                  headerShown: true,
                  title: 'Repartidores',
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('AdminDeliveryCreateScreen')}>
                      <Image 
                        source={ require('../../../assets/add.png') }
                        style={{ width:35, height: 35 }}
                      />
                    </TouchableOpacity>
                  )
                }
              )}
            />
            
            <Stack.Screen
              name="AdminDeliveryCreateScreen"
              component={AdminDeliveryCreateScreen}
              options={{
                headerShown: true,
                title: 'Nuevo Repartidor'
              }}
            />

           

        </Stack.Navigator>
    </ContextState>
       
        
   
  )
}

const ContextState= ({children}: any) =>{
  return (
    <DeliveryProvider>
      {children}
    </DeliveryProvider>
  )
}

