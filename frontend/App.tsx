import React from "react";
import { View } from "react-native";
import TopBar from "./src/components/topBar";
import RightPanel from "./src/components/rightPanel";
import LeftPanel from "./src/components/leftPanel";
import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native-web";

EStyleSheet.build({ 
    $bg_white: '#F7F7F7',
    $bg_black : '#000000',
    $bg_color1: '#0F0F0F',
    $bg_color2: '#222222',
    $bg_color3: "#3F3F3F",

    $fg_color1:  "#F1F1F1",
    $fg_color1_hover:  "#F7F7F7",

    $fg_color2: "#393939",
    $fg_color2_hover: "#737373",

    $fg_color3 : "#ECECEC",

    
});


export default function App() {
    return (
        <View style={appStyle.global}>
            <View style={appStyle.container}>
                <TopBar></TopBar>
                <LeftPanel></LeftPanel>
                <RightPanel></RightPanel>
            </View>
        </View>

    );
}

const appStyle = EStyleSheet.create({

    global: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "$bg_black",

    },
    container: {
        display: "flex",
        flexDirection : "row",
        
        flexGrow: 1,
        maxWidth: 1600,
        backgroundColor: "$bg_color1",
    },
    
});
