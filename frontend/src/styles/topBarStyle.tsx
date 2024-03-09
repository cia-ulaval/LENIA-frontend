import EStyleSheet from "react-native-extended-stylesheet";

export const topBarStyle = EStyleSheet.create({
    container:{
        width:"100%",
        position: "absolute",
        height: 60,
        backgroundColor: '$bg_color6',
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        color: "white",
        gap: 10,
        alignItems: "center",
    },

    title:{
        color: "white",
        fontSize: "2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
    },
});