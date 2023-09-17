import React,{useContext, useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
import { CreateDeliveryUseCase } from '../../../../../Domain/useCases/userDelivery/CreateDelivery'
import { DeliveryContext } from '../../../../context/DeliveryContext'

const AdminDeliveryCreateViewModel = () =>{
    const[values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        image: '',
        phone: '', 
        password: '',
        confirmPassword: '',
       
    })
    const [file, setFile] =  useState<ImagePicker.ImagePickerAsset>()
    const [responseMessage, setResponseMessage] = useState('')
    const [loading, setLoading] = useState(false);
    const {create} = useContext(DeliveryContext)

    const onChange = (property: string, value: any) =>{
        setValues({...values, [property]:value})
    }

    const createUserDelivery = async () =>{
        setLoading(true)
        const response = await create(values, file!)
        setLoading(false)
        setResponseMessage(response.message)
        resetForm()
    }

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        })

        if(!result.canceled){
            onChange('image', result.assets[0].uri)
            setFile(result.assets[0]) 
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

    const resetForm = async () =>{
        setValues({
            firstName: '',
            lastName: '',
            email: '',
            image: '',
            phone: '', 
            password: '',
            confirmPassword: ''
        })
    }



    return{
        ...values,
        onChange,
        createUserDelivery,
       responseMessage,
        pickImage,
        takePhoto,
        loading
    }
}

export default AdminDeliveryCreateViewModel;