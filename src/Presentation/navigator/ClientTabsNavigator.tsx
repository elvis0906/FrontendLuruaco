import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { Image } from 'react-native';
//import { ClientProductListScreen } from '../views/client/product/list/ProductList';
import { ClientStackNavigator } from './ClientStackNavigator';
import { ClientOrderStackNavigator } from './ClientOrderStackNavigator';


const Tab = createBottomTabNavigator();

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="ClientStackNavigator" 
      component={ClientStackNavigator} 
      options={{
        title: 'Productos',
        headerShown: false,
        tabBarLabel: 'Productos',
        tabBarIcon: ({ color }) => (
          <Image
            source={ require('../../../assets/list.png') }
            style={{ width: 25, height: 25 }}
            />
        )
      }}
    /> 
    
    <Tab.Screen 
      name="ClientOrderStackNavigator" 
      component={ClientOrderStackNavigator} 
      options={{
        headerShown: false,
        title: 'Pedidos',
        tabBarLabel: 'Pedidos',
        
        tabBarIcon: ({ color }) => (
          <Image
            source={ require('../../../assets/orders.png') }
            style={{ width: 25, height: 25 }}
            />
        )
      }}
    />
    
    <Tab.Screen 
      name="ProfileInfoScreen" 
      component={ProfileInfoScreen} 
      options={{
        title: 'Perfil',
        tabBarLabel: 'Perfil',
        headerShown: false,
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