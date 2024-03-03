import { StyleSheet } from "react-native";

export const rightBarStyle = StyleSheet.create({
    container: {
        width: "25%",
        height: "100%",
        backgroundColor: "brown",
        alignItems: "center",

        display: "flex",
        flexDirection: "column",
        justifyContent:"flex-start",
        alignContent: "flex-start",
    },

    upper_button_layout: {
        width: "100%",
        backgroundColor: "red",
        padding: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    image_view: {
        width: "100%",
        backgroundColor: "blue",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },

    image:{
        flex: 1,
        resizeMode: "contain",
        backgroundColor: "purple",
        maxHeight: 300,

    }

   

});