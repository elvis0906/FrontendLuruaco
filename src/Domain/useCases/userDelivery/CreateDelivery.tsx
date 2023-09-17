import React from "react";
import { UseDeliveryReposityImpl } from "../../../Data/repositories/UserDeliveryRepository";
import { User } from "../../entities/User";
import * as ImagePicker from 'expo-image-picker'

const {create} = new UseDeliveryReposityImpl()

export const CreateDeliveryUseCase = async (user: User, file: ImagePicker.ImagePickerAsset) => {
    return await create(user, file);
}