import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";
import * as ImagePicker from "expo-image-picker";

export interface UserDeliveryRepository {
    getAll(): Promise<User[]>
    create(user: User, file: ImagePicker.ImagePickerAsset):Promise<ResponseApiDelivery>
    remove(id: string): Promise<ResponseApiDelivery>  

}