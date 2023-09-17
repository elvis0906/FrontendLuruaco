 import React, {useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import useViewModel from './ViewModel'
 
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'
import { ClientProductItem } from './Item'
import { RootStackParamList } from '../../../../../../App'
import { useNavigation } from '@react-navigation/native'


interface Props extends StackScreenProps<ClientStackParamList, 'ClientProductListScreen'>{}
export const ClientProductListScreen = ({navigation, route}: Props) => {

  
  const{products, getProducts} = useViewModel()

  useEffect(() =>{
    getProducts()
  }, [])
  
  return (  
     <View style={{marginTop:50}}>
        <FlatList
          data = {products}
          keyExtractor={(item)=> item.id!}  
          renderItem={({item}) =><ClientProductItem product={item} navigation={navigation} />}

        />
     </View>
  )
}
