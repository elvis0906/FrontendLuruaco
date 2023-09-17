import React from 'react'
import { UseDeliveryReposityImpl } from '../../../Data/repositories/UserDeliveryRepository'
import { User } from '../../entities/User'

const {remove} = new UseDeliveryReposityImpl()


export const DeleteDeliveryUseCase = async(id: string) =>{
    return await remove(id)
}