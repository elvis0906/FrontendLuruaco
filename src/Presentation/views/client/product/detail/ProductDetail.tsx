import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'
import styles from './Styles'
import useViewModel from './ViewModel';
import MyButton from '../../../../components/MyButton'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientProductDetailScreen'>{};

export const ClientProductDetailScreen = ({navigation, route}: Props) => {
 
  const {product} = route.params
  //const width = Dimensions.get('window').width;
  //const height = Dimensions.get('window').height;
  const {shoppingBag, quantity, price, addToBag, addItem, removeItem} = useViewModel(product)
  
  return (
    <View style={styles.container}>
       
          
<Image
           style={styles.image}
           source={{uri: product.image1}}
        />
       

          <View style={styles.productDetail}>
            <View style={styles.productInfo}>

        

                {/* NOMBRE */  }
                <Text style={styles.name}>{product.name}</Text>
                <View style={styles.divider}></View>

                 {/* DESCRIPCION */  }
                 <Text style={styles.descriptionTitle}>Descripcion</Text>
                 <Text style={styles.descriptionContent}>{product.descripcion}</Text>
                <View style={styles.divider}></View>

                {/* PRECIO */  }
                <Text style={styles.descriptionTitle}>Precio</Text>
                 <Text style={styles.descriptionContent}>${product.price}</Text>
                <View style={styles.divider}></View>

                  {/* ORDEN */  }
                  <Text style={styles.descriptionTitle}>Tu orden</Text>
                 <Text style={styles.descriptionContent}>Cantidad: {quantity} </Text>
                 <Text style={styles.descriptionContent}>Precio Total: {price} </Text>
                <View style={styles.divider}></View>
                
            </View>

            <View style={styles.productActions}>

                <TouchableOpacity
                  onPress={()=> removeItem()}
                  style={styles.actionLess}
                >
                  <Text style={styles.actionText}>-</Text>
                </TouchableOpacity> 

                <View style={styles.quantity}>
                  <Text  style={styles.actionText}>{quantity}</Text>
                </View>

                <TouchableOpacity 
                  onPress={()=> addItem()}
                  style={styles.actionAdd}
                >
                  <Text style={styles.actionText}>+</Text>
                </TouchableOpacity> 

                <View style={styles.buttonAdd}>
                    <MyButton text='AGREGAR' onPress={() => addToBag()} />
                </View>
            </View>
          </View>

          <TouchableOpacity
              onPress={() => navigation.pop()}
              style={styles.back}
          >
            <Image 
              style={styles.backImage}
              source={require('../../../../../../assets/back.png')}
            
            />
          </TouchableOpacity>
    </View>
  )
}

 
