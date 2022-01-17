import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainContent:{
        width: '95%',
        height: 'auto',
        backgroundColor: '#000000',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    contextLeft:{
        width: '36%',
        alignItems: 'flex-start', 
    },
    boxLogo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    logBitcoin:{
        width: 40,
        height: 40,
        marginLeft: 2,
    },
    dayCotation:{
        paddingLeft: 5,
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    contextRight:{
        width: '60%',
        alignItems: 'flex-end',
    },
    price:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
export default styles