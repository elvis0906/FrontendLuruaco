import React from "react";
import { User } from "../../../../../Domain/entities/User";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../../constants/colors";
 

interface Props {
    user: User;
    remove: (id: string) => void;
    }


export const AdminDeliveryListItem = ({ user , remove}: Props) => {
   
    
    return (
        <TouchableOpacity
            onPress={() => ('')}
        >

        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: user.image }} />

            <View style={styles.info}>
                <Text style={styles.title}>{user.firstName} {user.lastName}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.description}>{user.phone}</Text>
            </View>

            <View style={styles.actionContainer}>
               
                <TouchableOpacity 
                    onPress={()=> remove(user.id!)}
                >
                    <Image
                        style={styles.actionImage}
                        source={require("../../../../../../assets/trash.png")}
                    />
                </TouchableOpacity> 
            </View>
            </View>
            <View style={styles.divider} />
            </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        height: 70,
        marginHorizontal: 20,
        marginTop: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    info: {
        marginLeft: 15,
        flex: 1
    },
    title: {
        color: "black",
        fontSize: 15
    },
    email: {
        color: "black",
        fontSize: 12,
        marginTop: 3
        
    },
    description: {
        color: "gray",
        fontSize: 12,
        
    },
    actionContainer: {
        marginRight: 40
    },
    actionImage: {
        width: 25,
        height: 25,
        marginVertical: 15
    },

    divider: {
        height: 1,
        backgroundColor: COLORS.orange_gold,
        marginHorizontal: 30,
        flex: 1
    }
});