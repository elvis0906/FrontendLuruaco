import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity } from 'react-native';
import { AdminProductListScreen } from '../views/admin/product/list/ProductList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { AdminProductNavigator } from './AdminProductNavigator';
import { AdminOrderStackNavigator } from './AdminOrderStackNavigator';
import { AdminDeliveryNavigator } from './AdminDeliveryNavigator';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  
 

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="AdminProductNavigator" 
        component={AdminProductNavigator} 
        options={ ({route, navigation}) => (
          {
            title: 'Productos',
            tabBarLabel: 'Productos',
            tabBarIcon: () => (
              <Image
                source={ require('../../../assets/list.png') }
                style={{ width: 25, height: 25 }}
                />
            ),
          }
        )}
      />
      <Tab.Screen 
        name="AdminOrderStackNavigator" 
        component={AdminOrderStackNavigator} 
        options={{
          title: 'Pedidos',
          tabBarLabel: 'Pedidos',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={ require('../../../assets/orders.png') }
              style={{ width: 25, height: 25 }}
              />
          )
        }}
      />

      <Tab.Screen 
        name="AdminDeliveryNavigator" 
        component={AdminDeliveryNavigator} 
        options={ ({route, navigation}) => (
          {
            title: 'Repartidores',
            tabBarLabel: 'Repartidores',
            tabBarIcon: () => (
              <Image
              source={ require('../../../assets/deliveryA.png') }
                style={{ width: 25, height: 25 }}
                />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('AdminDeliveryCreateScreen')}>
                <Image 
                  source={ require('../../../assets/add.png') }
                  style={{ width:35, height: 35, marginRight: 15 }}
                />
              </TouchableOpacity>
            )
          }
        )}
      />
      
      <Tab.Screen 
        name="ProfileInfoScreen" 
        component={ProfileInfoScreen} 
        options={{
          title: 'Perfil',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Image
              source={ require('../../../assets/user_menu.png') }
              style={{ width: 25, height: 25 }}
              />
          )
        }}
      />

    </Tab.Navigator>
  );
}