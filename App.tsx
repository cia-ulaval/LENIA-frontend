import React from "react";
import { View } from "react-native";
import TopBar from "./src/components/topBar";
import RightPanel from "./src/components/rightPanel";
import LeftPanel from "./src/components/leftPanel";
import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";


EStyleSheet.build({
    $bg_color1: '#A4A9BF',
    $bg_color2: '#646E98',
    $bg_color3: '#C5CDF0',
    $bg_color4: '#374273',
    $bg_color5: '#161E46',
    $bg_color6: '#030C33',
    $bg_white: '#F7F7F7',
    $border_color: "#FFFFFF",
});


export default function App() {
    return (
        <View style={appStyle.container}>
            <TopBar></TopBar>
            <LeftPanel></LeftPanel>
            <RightPanel></RightPanel>
        </View>
    );
}


const appStyle = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
    },
});
