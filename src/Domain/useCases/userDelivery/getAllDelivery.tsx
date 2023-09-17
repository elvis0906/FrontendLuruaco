import { UseDeliveryReposityImpl } from "../../../Data/repositories/UserDeliveryRepository";

 
 
const { getAll } = new UseDeliveryReposityImpl();

export const GetAllDeliveryLocalUseCase = async () => {
    return await getAll();
}