import React, { useState, useContext } from 'react'
import { ApiDelivery } from '../../../../Data/sources/remote/api/ApiDelivery';
import { UpdateUserUseCase } from '../../../../Domain/useCases/user/UpdateUser';
import { UpdateWithImageUserUseCase } from '../../../../Domain/useCases/user/UpdateWithImageUser';
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import * as ImagePicker from 'expo-image-picker'
import { User } from '../../../../Domain/entities/User';
import { ResponseApiDelivery } from '../../../../Data/sources/remote/models/ResponseApiDelivery';
import { UserContext } from '../../../context/UserContext';

const ProfileUpdateViewModel = (user: User) => {

    const [values, setValues] = useState(user);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const [loading, setLoading] = useState(false);
    const [file, setFile] =  useState<ImagePicker.ImagePickerAsset>()
    const { getUserSession } = useUserLocal();
    const {saveUserSession} = useContext(UserContext)
     

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


  
    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const onChangeInfoUpdate = (firstName: string, lastName: string, phone: string) => {
        setValues({ ...values, firstName, lastName, phone})
    }
    
    const update = async () => {
        if (isValidForm()) {
            setLoading(true);

            let response = {} as ResponseApiDelivery 

            if(values.image?.includes('https://')){
                response = await UpdateUserUseCase(values)
            }  else {
                response = await UpdateWithImageUserUseCase(values, file!);
            }

            setLoading(false);
            console.log('Result: ' + JSON.stringify(response))

            if (response.success) {
                saveUserSession(response.data)
                setSuccessMessage(response.message)
            }
            else {                
                setErrorMessage(response.message);
            }
        }
    }
 

    const isValidForm = (): boolean => {
        if (values.firstName === '') {
            setErrorMessage('Ingresa tu nombre');
            return false;
        }
        if (values.lastName === '') {
            setErrorMessage('Ingresa tu apellido');
            return false;
        }
  
        if (values.phone === '') {
            setErrorMessage('Ingresa tu telefono');
            return false;
        }
       
        return true;
    }

    return {
        ...values,
        onChange,
        update,
        pickImage,
        takePhoto,
        isValidForm,
        onChangeInfoUpdate,
        errorMessage,
        successMessage,
        loading,
        user,
        
    }
}

export default ProfileUpdateViewModel;
