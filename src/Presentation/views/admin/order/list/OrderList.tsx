import React, { useEffect } from 'react'
import {View, Text, useWindowDimensions, FlatList} from 'react-native'
import useViewModel from './ViewModel'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { OrderListItem } from './Item';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator';

interface Props{
  status: string
}

const OrderListView = ({status}: Props) => {

  const {ordersPayed, ordersDispatched, ordersDelivery, ordersOnTheWay, getOrders} = useViewModel()
  const navigation = useNavigation<StackNavigationProp<AdminOrderStackParamList, 'AdminOrderListScreen'>>()

  useEffect(() =>{
    getOrders(status)
  }, [])
  return (
     

    <View>
         <FlatList
          data={ 
            status === 'PAGADO' 
            ? ordersPayed 
            : status === 'DESPACHADO'
            ? ordersDispatched
            : status === 'EN CAMINO'
            ? ordersOnTheWay
            : status === 'ENTREGADO'
            ? ordersDelivery
            : []
          }
          keyExtractor={ (item) => item.id!}
          renderItem={ ({item}) => <OrderListItem order={item} navigation={navigation}/> }
        />

    </View>
  )
}

 
const renderScene = ({ route }: any) => {
  switch (route.key) {
    case 'first':
      return <OrderListView status='PAGADO' />;
    case 'second':
      return <OrderListView status='DESPACHADO' />;
      case 'third':
      return <OrderListView status='EN CAMINO' />;
      case 'fourth':
      return <OrderListView status='ENTREGADO' />;

      default:
      return <OrderListView status='PAGADO' />
  }
};


export const AdminOrderListScreen = () =>{
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'PAGADO' },
    { key: 'second', title: 'DESPACHADO' },
    { key: 'third', title: 'EN CAMINO' },
    { key: 'fourth', title: 'ENTREGADO' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#c2c2c2',  }}
          activeColor='black'
          inactiveColor='gray'
          scrollEnabled={true}
          style={{ paddingTop: 10, backgroundColor: 'white', height: 60, alignItems: 'center', justifyContent: 'center'}}
        />

        )}
    />
  );
}
