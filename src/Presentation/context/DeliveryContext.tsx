import { createContext, useEffect, useState } from "react";
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../../Domain/entities/User";
import * as ImagePicker from 'expo-image-picker'
import { GetAllDeliveryLocalUseCase } from "../../Domain/useCases/userDelivery/getAllDelivery";
import { CreateDeliveryUseCase } from "../../Domain/useCases/userDelivery/CreateDelivery";
import { DeleteDeliveryUseCase } from "../../Domain/useCases/userDelivery/DeleteDelivery";


export interface DeliveryContextProps{
    user: User[]
    getDelivery(): Promise<void>,
    create(user: User, file: ImagePicker.ImagePickerAsset):Promise<ResponseApiDelivery>
    remove(id: string): Promise<ResponseApiDelivery>
}

export const DeliveryContext = createContext({} as DeliveryContextProps)

export const DeliveryProvider = ({children}: any) =>{
    const [user, setDelivery] = useState<User[]>([])

    useEffect(()=>{
        if(user.length === 0){
            getDelivery()
        }
        
    }, [])


    const getDelivery = async() : Promise<void> => {
        const result =await GetAllDeliveryLocalUseCase()
        setDelivery(result)
    }

    const create = async (user: User, file: ImagePicker.ImagePickerAsset):Promise<ResponseApiDelivery> =>{
        const response = await CreateDeliveryUseCase(user, file!)
        getDelivery()
        return response
        
    }

    const remove = async (id: string): Promise<ResponseApiDelivery> =>{
        const response = await DeleteDeliveryUseCase(id)
        getDelivery()
        return response
    }

    return (
        <DeliveryContext.Provider value={{
            user,
            getDelivery,
            create,
            remove

        }}>
            {children}
        </DeliveryContext.Provider>

    
    )
}