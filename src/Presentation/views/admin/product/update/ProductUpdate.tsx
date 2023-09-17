import React, {useEffect, useState} from 'react'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Pressable, StatusBar } from 'react-native';
 
import useViewModel from './ViewModel';
import styles from './Styles';
 
import { StackScreenProps } from '@react-navigation/stack';
 
 
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';
import { COLORS } from '../../../../constants/colors';
import { CustomTextInput } from '../../../../components/CustomTextInput';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import MyButton from '../../../../components/MyButton';

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductUpdateScreen'>{};

export const AdminProductUpdateScreen = ({navigation, route}: Props) => {


  const {product} = route.params
  const { name, descripcion, responseMessage, loading, image1, onChange, takePhoto, pickImage, UpdateProduct } = useViewModel(product);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (responseMessage !== '') {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage])
  
  return (
    // COLUMN
    <View style={styles.container}>
        
        <StatusBar backgroundColor={COLORS.orange_gold} />
        <TouchableOpacity 
            style={styles.imageContainer}
            onPress={() => setModalVisible(true)}
        >
            {
              image1 == ''
              ? <Image
                style={ styles.image }
                source={ require('../../../../../../assets/image_new.png') }
                />
              : <Image 
                  source={{ uri: image1 }}
                  style={ styles.image }
                />
            }
        </TouchableOpacity>

        <View style={ styles.form }>

          <ScrollView>

          {/* <Text style={ styles.formText }>ACTUALIZAR</Text> */}

          <View style={ styles.form }>
            <CustomTextInput 
                placeholder='Nombre de la categoria'
                image={ require('../../../../../../assets/categories.png')}
                keyboardType='default'
                property='name'
                value={name}
                onChangeText={ onChange }
            />
            <CustomTextInput 
                placeholder='Descripcion'
                image={ require('../../../../../../assets/description.png')}
                keyboardType='default'
                property='description'
                value={descripcion}
                onChangeText={ onChange }
            />
        </View>

        <View style={styles.buttonContainer}>
            <MyButton 
                text='ACTUALIZAR PRODUCTO'
                onPress={() => UpdateProduct()}
            />
        </View>
       <ModalPickImage 
       
            openGallery={pickImage}
            openCamera={takePhoto}
            modalUseState={modalVisible}
            setModalUseState={setModalVisible}
       />
        {
          loading && 
          <ActivityIndicator 
            style={styles.loading} 
            size="large" 
            color={ COLORS.orange_gold }  
          />
        }       
      </ScrollView>
        </View>

    </View>
    );
}
    
// HOT RELOAD


    
