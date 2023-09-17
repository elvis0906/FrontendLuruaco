import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, Image, ToastAndroid } from 'react-native';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
 
import { OrderDetailItem } from './Item';
import { DateFormatter } from '../../../../utils/DateFormatter';
import useViewModel from './ViewModel';
import MyButton from '../../../../components/MyButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { ClientOrderStackParamList } from '../../../../navigator/ClientOrderStackNavigator';

interface Props extends StackScreenProps<ClientOrderStackParamList, 'ClientOrderDetailScreen'>{};
export const ClientOrderDetailScreen = ({navigation, route}: Props) => {

  const { order } = route.params;
  const { total, deliveryMen, responseMessage,open, value, items, getTotal, getDeliveryMen, setOpen, setValue, setItems, dispatchOrder, updateToOnTheWayOrder} = useViewModel(order);

  useEffect(() => {
    if (responseMessage !== '') {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage])
    
  useEffect(() => {
    if(total === 0.0){
        getTotal()
    }

    getDeliveryMen()
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
      {
        order.status === 'PAGADO' 
        ? 
        <View>
          <Text style={styles.deliveries}>REPARTIDORES DISPONIBLES</Text>
          <View style={ styles.dropDown }>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
        </View>
        : <Text style={styles.deliveries}>REPARTIDOR ASIGNADO: {order.delivery?.firstName} {order.delivery?.lastName}</Text>
      }      

      

      <View style={ styles.totalInfo }>
        <Text style={styles.total}>TOTAL: ${ total }</Text>
        <View style={styles.button}>
         
              {
                order.status === 'EN CAMINO' &&
                <MyButton text='RASTREAR PEDIDO' onPress={() => navigation.navigate('ClientOrderMapScreen', {order: order})} />
              } 
              
        </View>
      </View>
    </View>
</View>
  
  )
}

 
