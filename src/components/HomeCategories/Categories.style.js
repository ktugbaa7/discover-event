import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
    container:{
        position: "relative",
        top:-28
    },
    touch: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical:15,
        backgroundColor: globalStyle.itemBackground,
        borderRadius: 15,
        marginHorizontal: 5,
        elevation:2,
        marginBottom:10
    },
    icon:{
        fontSize: 20,
        color: globalStyle.primary,
        paddingRight:6
    },
    title:{
        color: globalStyle.primary,
        fontSize: 16,
        
    }
   
});
