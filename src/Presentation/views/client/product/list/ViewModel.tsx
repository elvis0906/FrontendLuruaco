import React,{useState} from 'react'
import { Product } from '../../../../../Domain/entities/Product'
import { GetAllProductUseCase } from '../../../../../Domain/useCases/product/GetAllProduct'
 
 


const ClientProductListViewModel = () =>{
    const[products, setProducts] = useState<Product[]>([])
    
    const getProducts = async() =>{
        const result = await GetAllProductUseCase()
        setProducts(result)
    }
    return{
        products,
        getProducts
    }
}

export default  ClientProductListViewModel