import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { UserDeliveryRepository } from "../../Domain/repositories/UserDeliveryRepository";
import { ApiDelivery, ApiDeliveryForImage } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import mime from 'mime';
import * as ImagePicker from 'expo-image-picker';


export class UseDeliveryReposityImpl implements UserDeliveryRepository{
   
    async getAll(): Promise<User[]> {
        try {
            const response = await ApiDelivery.get<User[]>('/users/getAll')
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
             
            return Promise.resolve([])
        }
    }
    async create(user: User,  file: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery> {
       
        try {
            let data = new FormData();
        

            data.append('image', {
                // @ts-ignore
                uri: file.uri,
                type: mime.getType(file.uri)!,
                name: file.uri.split('/').pop()}as any);

                data.append('user', JSON.stringify(user));
            const response = await ApiDeliveryForImage.post<ResponseApiDelivery>('/users/createDeliveryWithImage', data);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }

    async remove(id: string): Promise<ResponseApiDelivery>{
        try {
            const response = await ApiDelivery.delete<ResponseApiDelivery>(`/users/delete/${id}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError) 
        }
    }
} 
