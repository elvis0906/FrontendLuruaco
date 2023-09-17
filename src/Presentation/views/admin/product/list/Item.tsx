import React from 'react'
import { Product } from '../../../../../Domain/entities/Product'
import { View, StyleSheet, Image, Text} from 'react-native'
import { COLORS } from '../../../../constants/colors'

interface Props{
    product: Product
}

export const AdminProductListItem = ({product}:Props) => {
  return (
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
        fontSize: 30,
        alignSelf: 'center'
    },

    descripcion:{
        color: COLORS.dark_gray,
        fontSize: 15,
        marginTop: 8,
        alignSelf: 'center'
    },
    price:{
        color: COLORS.orange_gold,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})