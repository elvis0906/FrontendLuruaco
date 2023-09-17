 import React, {useEffect} from 'react'
import {View, Text, FlatList, StatusBar} from 'react-native'
import useViewModel from './ViewModel'
import { AdminProductListItem } from './Item'
import { COLORS } from '../../../../constants/colors'

export const AdminProductListScreen = () => {
  const{products, getProducts} = useViewModel()

  useEffect(() =>{
    getProducts()
  }, [])
  return (  
     <View style={{marginTop:30}}>
        <StatusBar backgroundColor={COLORS.orange_gold} />
        <FlatList
          data = {products}
          keyExtractor={(item)=> item.id!}  
          renderItem={({item}) =><AdminProductListItem product={item} />}

        />
     </View>
  )
}
