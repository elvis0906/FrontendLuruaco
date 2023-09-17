import { StyleSheet } from "react-native"
import { COLORS } from "../../../constants/colors";

const ClientShoppingBagStyles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    totalToPay: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: COLORS.soft_green,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    totalInfo: {
        alignItems: 'center'
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 17
    },
    buttonAdd: {
        width: '50%'
    }
});

export default ClientShoppingBagStyles;