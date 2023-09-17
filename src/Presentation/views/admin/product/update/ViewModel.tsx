import React, { useState, useContext } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { UpdateProductUseCase } from '../../../../../Domain/useCases/product/UpdateProduct';
import { UpdateWithImageProductUseCase } from '../../../../../Domain/useCases/product/UpdateWithImageProduct';
import { Product } from '../../../../../Domain/entities/Product';
import { ResponseApiDelivery } from '../../../../../Data/sources/remote/models/ResponseApiDelivery';
import { ProductContext } from '../../../../context/ProductContext';

const AdminProductUpdateViewModel = (product: Product) => {

    const [values, setValues] = useState(product);
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const { update, updateWithImage } = useContext(ProductContext);

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const UpdateProduct = async () => {
        setLoading(true);
        let response = {} as ResponseApiDelivery;
        if (values.image1?.includes('https://')) { // ACTUALIZAR SIN IMAGEN
            response = await update(values);
        }
        else { // ACTUALIZAR CON IMAGEN
            response = await updateWithImage(values, file!);
        }
        setLoading(false);
        setResponseMessage(response.message);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri); 
            setFile(result.assets[0]);
        }
    }
    
    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);  
            setFile(result.assets[0]);
        }
    }

    
    return {
        ...values,
        onChange,
        takePhoto,
        pickImage,
        UpdateProduct,
        loading,
        responseMessage
    }
}

export default AdminProductUpdateViewModel;