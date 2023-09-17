import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, Image, ToastAndroid } from 'react-native';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator';
import { OrderDetailItem } from './Item';
import { DateFormatter } from '../../../../utils/DateFormatter';
import useViewModel from './ViewModel';

import DropDownPicker from 'react-native-dropdown-picker';
import { DeliveryOrderStackParamList } from '../../../../navigator/DeliveryOrderStackNavigator';
import MyButton from '../../../../components/MyButton';


interface Props extends StackScreenProps<DeliveryOrderStackParamList, 'DeliveryOrderDetailScreen'>{};
export const DeliveryOrderDetailScreen = ({navigation, route}: Props) => {

  const { order } = route.params;
  const { total, deliveryMen, responseMessage, open, value, items, getTotal, setOpen, setValue, setItems, updateToOnTheWayOrder } = useViewModel(order);

  useEffect(() => {
    if (responseMessage !== '') {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage])
  

  useEffect(() => {
    if (total === 0.0) {
        getTotal();
    }
  }, [])

  return (
    <View style={styles.container}>
        <View style={ styles.products }>

          <FlatList 
            data={ order.products }
            keyExtractor={ (item) => item.id! }
            renderItem={ ({item}) => <OrderDetailItem product={item}/> }
          />

        </View>
        <View style={ styles.info }>
          <View style={ {...styles.infoRow, marginTop: 25} }>
            
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Fecha del pedido</Text>
              <Text style={styles.infoDescription}>{DateFormatter(order.timestamp!)}</Text>
            </View>

            <Image 
              style={ styles.infoImage }
              source={require('../../../../../../assets/reloj.png')}
            />

          </View>

          <View style={ styles.infoRow }>
            
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Cliente y telefono</Text>
              <Text style={styles.infoDescription}>{order.client?.firstName} {order.client?.lastName} - {order.client?.phone}</Text>
            </View>

            <Image 
              style={ styles.infoImage }
              source={require('../../../../../../assets/user.png')}
            />

          </View>
         
          <View style={ styles.infoRow }>
            
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Direccion de entrega</Text>
              <Text style={styles.infoDescription}>{order.address?.address} - {order.address?.neighborhood}</Text>
            </View>

            <Image 
              style={ styles.infoImage }
              source={require('../../../../../../assets/location.png')}
            />

          </View>
         
          <View style={ styles.infoRow }>
          
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>REPARTIDOR ASIGNADO</Text>
              <Text style={styles.infoDescription}>{order.delivery?.firstName} {order.delivery?.lastName}</Text>
            </View>

            <Image 
              style={ styles.infoImage }
              source={require('../../../../../../assets/my_user.png')}
            />

          </View>
          
          <View style={ styles.totalInfo }>
            <Text style={styles.total}>TOTAL: ${ total }</Text>
            <View style={styles.button}>
              {
                order.status === 'DESPACHADO' &&
                <MyButton text='INICIAR ENTREGA' onPress={() => updateToOnTheWayOrder()} />
              }
              {
                order.status === 'EN CAMINO' &&
                <MyButton text='IR AL RUTA' onPress={() => navigation.navigate('DeliveryOrderMapScreen', {order: order})} />
              }
            </View>
          </View>
        </View>
    </View>
  )
}
