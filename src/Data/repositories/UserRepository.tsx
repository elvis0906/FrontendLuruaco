import { AxiosError } from "axios";
import { ImagePickerAsset } from "expo-image-picker";
import mime from "mime";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ApiDelivery, ApiDeliveryForImage } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";

export class UserRepositoryImpl implements UserRepository {

    async getDeliveryMen(): Promise<User[]> {
        try {
            const response = await ApiDelivery.get<User[]>('/users/findDeliveryMen');
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async update(user: User): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.put<ResponseApiDelivery>('/users/updateWithoutImage', user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }

    async updateNotificationToken(id: string, token: string): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.put<ResponseApiDelivery>('/users/updateNotificationToken', {
                id: id,
                token: token
            });
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }
    

    async updateWithImage(user: User, file: ImagePickerAsset): Promise<ResponseApiDelivery> {
        try {
            let data = new FormData();
            data.append('user', JSON.stringify(user));

            data.append('image', {
                // @ts-ignore
                uri: file.uri,
                type: mime.getType(file.uri)!,
                name: file.uri.split('/').pop()}as any);
           
            const response = await ApiDeliveryForImage.put<ResponseApiDelivery>('/users/update', data);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }

}