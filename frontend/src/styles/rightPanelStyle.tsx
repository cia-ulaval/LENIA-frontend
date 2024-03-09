import EStyleSheet from "react-native-extended-stylesheet";

export const rightPanelStyle = EStyleSheet.create({
    container: {
        marginTop: 60,
        width: 350,
        backgroundColor:'$bg_color5',
        alignItems: "center",


        display: "flex",
        flexDirection: "column",
        justifyContent:"flex-start",
        alignContent: "flex-start",
    },

    upper_button_layout: {
        width: "100%",
        backgroundColor: "bg_color1",
        padding: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    image_view: {
        

        width: "100%",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },

    image:{
        
        borderRadius:30,
        flex: 1,
        resizeMode: "contain",
        backgroundColor: "black",
        maxHeight: 300,

    },

    select:{
        padding:10,
        borderRadius : 3,
        backgroundColor:"$bg_color1",
        color:"white",
        fontWeight: "bold",
    }

   

});