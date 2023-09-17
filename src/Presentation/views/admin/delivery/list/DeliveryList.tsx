import React, { useEffect } from "react";
import {StatusBar, Text, ToastAndroid, View} from 'react-native'
import useViewModel from './ViewModel'
import { FlatList } from "react-native-gesture-handler";
import { AdminDeliveryListItem } from "./Item";
import { COLORS } from "../../../../constants/colors";

export const AdminDeliveryListScreen = () =>{

    const {user, responseMessage, getDelivery, deleteDelivery} = useViewModel()

    useEffect(() => {
        console.log('CAMBIO EL ESTADO DE LA CATEGORIA');
      }, [user])
      
    useEffect(()=>{
        if(responseMessage !== ''){
            ToastAndroid.show(responseMessage, ToastAndroid.LONG)
        }
    }, [responseMessage])
    return(
        <View style={{marginTop:10}}>
            <StatusBar backgroundColor={COLORS.orange_gold} />
            <FlatList
                data={user}
                keyExtractor={(item)=> item.id!}
                renderItem={({item})=> <AdminDeliveryListItem user={item} remove={deleteDelivery} />}
            />
        </View>
    )
}