import { AxiosError } from "axios";
import { ProductRepository } from "../../Domain/repositories/ProductRepository";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { Product } from "../../Domain/entities/Product";
import * as ImagePicker from 'expo-image-picker';
import mime from "mime";
import { ApiDeliveryForImage , ApiDelivery } from "../sources/remote/api/ApiDelivery";


 export class ProductRepositoryImpl implements ProductRepository {

    async getAll(): Promise<Product[]> {
        try {

            const response = await ApiDelivery.get<Product[]>('/products/getAll')
            console.log('PRODUCTOS: ' + JSON.stringify(response.data))
            return Promise.resolve(response.data)
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));           
            return Promise.resolve([])
        }
    }
    async create(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseApiDelivery> {
        try {
            // let data = new FormData();
            

            

            // files.forEach(file => {
 
            //     data.append('image', {
            //         // @ts-ignore
            //         uri: file.uri,                    
            //         file: file.uri.split('/').pop(),
            //         type: mime.getType(file.uri)!
            //     });
            // });
            
            // data.append('product', JSON.stringify(product));
            const response = await ApiDeliveryForImage.post<ResponseApiDelivery>('/products/create');
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }       

    async update(product: Product): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.put<ResponseApiDelivery>('/products/update', product);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }

    async updateWithImage(product: Product, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery> {
        try {
            let data = new FormData();
           

            data.append('image', {
                // @ts-ignore
                uri: file.uri,
                type: mime.getType(file.uri)!,
                name: file.uri.split('/').pop()}as any);

               // data.append('user', JSON.stringify(user));
            const response = await ApiDeliveryForImage.post<ResponseApiDelivery>('/users/createWithImage', data);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }

}