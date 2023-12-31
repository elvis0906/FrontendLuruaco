import React, {useState, useEffect, useContext} from 'react'
import { Order } from '../../../../../Domain/entities/Order'
import { GetDeliveryMenUserUseCase } from '../../../../../Domain/useCases/user/GetDeliveryMenUser';
import { User } from '../../../../../Domain/entities/User';
import { UpdateToDispatchedOrderUseCase } from '../../../../../Domain/useCases/order/UpdateToDispatchedOrder';
import { OrderContext } from '../../../../context/OrderContext';

interface DropDownProps {
    label: string, 
    value: string
}
const ClientOrderDetailViewModel = (order: Order) => {
    const [total, setTotal] = useState(0.0);
    const [deliveryMen, setDeliveryMen] = useState<User[]>([]);
    const [responseMessage, setResponseMessage] = useState('');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);
    const {updateToDispatched, updateToOnTheWay} = useContext(OrderContext)

    useEffect(() => {
        setDropDownItems();
    }, [deliveryMen])

    const dispatchOrder = async () => {
              if (value !== null) {
                order.id_delivery = value!;
                const result = await updateToDispatched(order);
                setResponseMessage(result.message);
              }
            //     if (result.success) {
            //         const index = deliveryMen.findIndex((delivery) => delivery.id === value!);
            //         console.log('TOKEN DE NOTIFICATION: ' + deliveryMen[index].notification_token);
                    
            //         await sendPushNotification(deliveryMen[index].notification_token!, 'PEDIDO ASIGNADO', 'Te han asignado un pedido');
            //     }
            // }
             else {
              setResponseMessage('Selecciona el repartidor');
            }
        console.log('REPARTIDOR SELECCIONADO: ' + value);
    }

    const updateToOnTheWayOrder = async () => {
        const result = await updateToOnTheWay(order);
        setResponseMessage(result.message);
    }

    const setDropDownItems = () => {
        let itemsDeliveryMen: DropDownProps[] = [];
        deliveryMen.forEach(delivery => {
            itemsDeliveryMen.push({
                label: delivery.firstName + ' ' + delivery.lastName,
                value: delivery.id!
            })
        });
        setItems(itemsDeliveryMen);
    }

    const getDeliveryMen = async () => {
        const result = await GetDeliveryMenUserUseCase();
        console.log('REPARTIDORES: ' + JSON.stringify(result, null, 3));
        setDeliveryMen(result);
    } 

   

    const getTotal = () => {
        order.products.forEach(p => {
            setTotal(total + (p.price * p.quantity!));
        });
    }
  

  return {
    total,
    deliveryMen,
    open,
    value,
    items,
    responseMessage,
    getTotal,
    getDeliveryMen,     
    setOpen,
    setValue,
    setItems,
    updateToOnTheWayOrder,
    dispatchOrder
  }
}

export default ClientOrderDetailViewModel;
