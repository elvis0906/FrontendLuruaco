import { Product } from '../entities/Product';
import * as ImagePicker from 'expo-image-picker';
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";

export interface ProductRepository {

    getAll(): Promise<Product[]>
    create(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseApiDelivery>;
    
    update(product: Product): Promise<ResponseApiDelivery>;
    //updateWithImage(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseApiDelivery>;
    //remove(product: Product): Promise<ResponseApiDelivery>;
}