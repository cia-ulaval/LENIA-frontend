

import EStyleSheet from "react-native-extended-stylesheet";

export const leftPanelStyle = EStyleSheet.create({
    container:{
        position: "relative",
        marginTop: 60,
        marginBottom: 80,
        flexGrow: 1,
        backgroundColor: "$bg_white",
        justifyContent: "center",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",

    
    },

    lower_bar:{
        position: "absolute",
        bottom: -80,
        width: "100%",
        height: 80,
        backgroundColor: "$bg_color6",
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        
    },

    button_container:{
        display : "flex",
        flexDirection : "row",
        alignItems: "center",
        gap: 10,
    }


});