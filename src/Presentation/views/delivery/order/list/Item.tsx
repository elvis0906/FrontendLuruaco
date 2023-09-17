import React from 'react'
import { Order } from '../../../../../Domain/entities/Order';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DateFormatter } from '../../../../utils/DateFormatter';
import { StackNavigationProp } from '@react-navigation/stack';
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator';
import { DeliveryOrderStackParamList } from '../../../../navigator/DeliveryOrderStackNavigator';
import { COLORS } from '../../../../constants/colors';


interface Props {
    order: Order,
    navigation: StackNavigationProp<DeliveryOrderStackParamList, 'DeliveryOrderListScreen', undefined>
}
export const OrderListItem = ({ order, navigation }: Props) => {
  return (
    <TouchableOpacity
        onPress={() => navigation.navigate('DeliveryOrderDetailScreen', {order: order})}
    >
        <View style={ styles.container }>
            <Text style={ styles.order }>Orden #{order.id}</Text>
            <Text style={ {...styles.info, marginTop: 10} }>Fecha del pedido: { DateFormatter(order.timestamp!)}</Text>
            <Text style={ styles.info }>Cliente: {order.client?.firstName} {order.client?.lastName}</Text>
            <Text style={ styles.info }>Direccion: {order.address?.address}</Text>
            <Text style={ styles.info }>Barrio: {order.address?.neighborhood}</Text>
            
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height:140,    
        elevation: 15,
        borderRadius:8,
        backgroundColor:COLORS.soft_green,
        marginVertical:10,
        marginHorizontal: 35,
        padding: 10,
    },
    order: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        textAlign:"center",
        backgroundColor: COLORS.orange_gold,
        borderRadius: 8
    },
    // divider: {
    //     height: 1,
    //     width: '100%',
    //     backgroundColor: '#e2e2e2',
    //     marginTop: 10
    // },
    info: {
        fontSize: 13
    }
});