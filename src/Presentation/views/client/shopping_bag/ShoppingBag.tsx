import React from 'react'
import { FlatList, Text, View } from 'react-native'
import useViewModel from './ViewModel'
import { ShoppingBagItem } from './Item'
import MyButton from '../../../components/MyButton'
import styles from './Styles'
import { StackScreenProps } from '@react-navigation/stack'
import { ClientStackParamList } from '../../../navigator/ClientStackNavigator'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientShoppingBagScreen'>{}

export const ClientShoppingBagScreen = ({navigation, route}: Props) => {
  const {shoppingBag, total, addItem, subtractItem, deleteItem} = useViewModel()

  return (
    <View style={styles.container}>
      <FlatList
      
        data={shoppingBag}
        keyExtractor={(item) => item.id!}
        renderItem={({item})=>        
          <ShoppingBagItem 
            product={item} 
            addItem={addItem}
            subtractItem={subtractItem}
            deleteItem={deleteItem}
            
          />
        }
      />
     <View style={styles.totalToPay}>
          <View style={styles.totalInfo}>
            <Text style={styles.totalText}>Total</Text>
            <Text>${total}</Text>
          </View>

          <View style={styles.buttonAdd}>
            <MyButton text='CONFIRMAR ORDEN' onPress={() => navigation.navigate('ClientAddressListScreen')} />
          </View>
        </View>
    </View>
  )
}
 