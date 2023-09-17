import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository";

const {getAll} = new ProductRepositoryImpl()

export const GetAllProductUseCase = async () =>{
    return await getAll()
}