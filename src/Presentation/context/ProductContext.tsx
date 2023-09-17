import { createContext, useState, useEffect } from 'react';
import { ImagePickerAsset } from "expo-image-picker";
import { Product } from "../../Domain/entities/Product";
import * as ImagePicker from 'expo-image-picker';
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
 
import { CreateProductUseCase } from "../../Domain/useCases/product/CreateProduct";
import { UpdateProductUseCase } from "../../Domain/useCases/product/UpdateProduct";
import { UpdateWithImageProductUseCase } from "../../Domain/useCases/product/UpdateWithImageProduct";
import { GetAllProductUseCase } from "../../Domain/useCases/product/GetAllProduct";


export interface ProductContextProps{
   product: Product[],
    getProduct(): Promise<void>,
    create(product: Product, files: ImagePickerAsset[]): Promise<ResponseApiDelivery>
    update(product: Product): Promise<ResponseApiDelivery>,
    updateWithImage(product: Product, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery>,
}


export const ProductContext  = createContext({} as ProductContextProps)

export const ProductProvider = ({children}: any) =>{

    
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        if (product.length === 0) {
            getProduct();
        }
      }, []);

    const getProduct = async(): Promise<void> => {
        const result = await GetAllProductUseCase();        
        setProduct(result);
    }

    const create = async (product: Product, files: ImagePickerAsset[]) : Promise<ResponseApiDelivery> =>{
        const response = await CreateProductUseCase(product, files)
        getProduct();
        return response
    }

    const update = async (product: Product): Promise<ResponseApiDelivery> => {
        const response = await UpdateProductUseCase(product);
        getProduct();
        return response;
    }
    
    const updateWithImage = async (product: Product, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery> => {
        const response = await UpdateWithImageProductUseCase(product, file);
        getProduct();
        return response;
    }

    return(
        <ProductContext.Provider value={{
                product,
                getProduct,
              create,
              update,             
              updateWithImage,
        }}>
            {children}
        </ProductContext.Provider>
    )
}