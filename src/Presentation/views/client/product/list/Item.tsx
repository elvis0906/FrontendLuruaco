import React from 'react'
import { Product } from '../../../../../Domain/entities/Product'
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import { COLORS } from '../../../../constants/colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'
 

interface Props{
    product: Product
    navigation: StackNavigationProp<ClientStackParamList, 'ClientProductListScreen', undefined>

}

export const ClientProductItem = ({product, navigation}:Props) => {
   
  return (
 
    <TouchableOpacity
       onPress={() => navigation.navigate('ClientProductDetailScreen', { product: product})}
    >

<View style={styles.container}>        
        <Image
           style={styles.image}
           source={{uri: product.image1}}
        />
       
      
        <View style={styles.info}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.descripcion}>{product.descripcion}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    </View>


    </TouchableOpacity>
    
  )
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },

    image:{
        width: 200,
        height:200,
        resizeMode: 'center',
        marginVertical: 60,
        borderRadius: 15,
       
    },  

    info: {
        width:100,
        height: 100,
        
    },

    name:{
        color: COLORS.black,
        fontSize: 15,
        alignSelf: 'center'
    },

    descripcion:{
        color: COLORS.dark_gray,
        fontSize: 12,
        marginTop: 3,
        alignSelf: 'center'
    },
    price:{
        color: COLORS.orange_gold,
        fontSize: 12,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})