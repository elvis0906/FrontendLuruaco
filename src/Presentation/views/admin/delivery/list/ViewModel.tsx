import React, { useContext, useState } from "react";
import { User } from "../../../../../Domain/entities/User";
import { GetAllDeliveryLocalUseCase } from "../../../../../Domain/useCases/userDelivery/getAllDelivery";
import { DeleteDeliveryUseCase } from "../../../../../Domain/useCases/userDelivery/DeleteDelivery";
import { DeliveryContext } from "../../../../context/DeliveryContext";

const AdminDeliveryListViewModel = () =>{

    //const [delivery, setDelivery] = useState<User[]>([])
    const [responseMessage, setResponseMessage] = useState('')
    const {user, remove, getDelivery} = useContext(DeliveryContext)

    // const getDelivery = async() =>{
    //     const result =await GetAllDeliveryLocalUseCase()
    //     setDelivery(result)
    // }

    const deleteDelivery = async(idDelivery: string)=>{
        const result = await remove(idDelivery)
        setResponseMessage(result.message)

    }
    return{
        user,
        responseMessage,
        getDelivery,
        deleteDelivery
    }
}


export default AdminDeliveryListViewModel