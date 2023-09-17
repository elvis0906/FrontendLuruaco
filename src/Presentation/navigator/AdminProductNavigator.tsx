import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Product } from '../../Domain/entities/Product';
import { ProductProvider } from '../context/ProductContext';
import { AdminProductUpdateScreen } from '../views/admin/product/update/ProductUpdate';
import { AdminProductListScreen } from '../views/admin/product/list/ProductList';
import { Image, TouchableOpacity } from 'react-native';

export type ProductStackParamList = {
  AdminProductListScreen: undefined,    
  AdminProductUpdateScreen: { product: Product },

}

const Stack = createNativeStackNavigator<ProductStackParamList>();

export const AdminProductNavigator = () => {
  return (
    <ProductState>

        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>

            <Stack.Screen
              name="AdminProductListScreen"
              component={AdminProductListScreen}
              options={{
                headerShown: true,
                title: 'Productos'
              }}
              // options={ ({route, navigation}) => (
              //   {
              //     headerShown: true,
              //     title: 'Productos',
              //     headerRight: () => (
              //       <TouchableOpacity onPress={() => navigation.navigate('AdminProductUpdateScreen')}>
              //         <Image 
              //           source={ require('../../../assets/add.png') }
              //           style={{ width:35, height: 35 }}
              //         />
              //       </TouchableOpacity>
              //     )
              //   }
              // )}
            />
            
     
            <Stack.Screen
              name="AdminProductUpdateScreen"
              component={AdminProductUpdateScreen}
              options={{
                headerShown: true,
                title: 'Editar Producto'
              }}
            />
            
       

        </Stack.Navigator>
        
    </ProductState>
  )
}

const ProductState = ({children}: any) => {
  return (
    <ProductProvider>
      { children }
    </ProductProvider>
  )
}

