import React, { useEffect, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import TopBar from "./src/components/topBar";
import RightPanel from "./src/components/rightPanel";
import LeftPanel from "./src/components/leftPanel";
import EStyleSheet from "react-native-extended-stylesheet";


EStyleSheet.build({ 
    $bg_white: '#F7F7F7',
    $bg_black: '#000000',
    $bg_color1: '#0F0F0F',
    $bg_color2: '#222222',
    $bg_color3: "#3F3F3F",

    $fg_color1: "#F1F1F1",
    $fg_color1_hover: "#F7F7F7",

    $fg_color2: "#393939",
    $fg_color2_hover: "#737373",

    $fg_color3: "#ECECEC",

    $special_red: "#CC0000",
    $special_red_hover: "#FF3333",
    $special_green: "#00CC00",
    $special_green_hover: "#33FF33",

    $MIN_SIZE: 400,
});


export default function App() {

    const windowInfo = useWindowDimensions();
    const [isWindowWidthSmall, setIsWindowWidthSmall] = useState(false);
    const WINDOWSMALLSIZE = 780;
    
    useEffect(()=>{
        if(windowInfo.width <= WINDOWSMALLSIZE)
            setIsWindowWidthSmall(true);
        else
            setIsWindowWidthSmall(false);
    }, [windowInfo])

    return (
        <View style={appStyle.global}>
            <View style={isWindowWidthSmall ? appStyle.container_small_width : appStyle.container}>
                <TopBar windowInfo={windowInfo} isWindowWidthSmall={isWindowWidthSmall}></TopBar>
                <LeftPanel isWindowWidthSmall={isWindowWidthSmall}></LeftPanel>
                <RightPanel isWindowWidthSmall={isWindowWidthSmall}></RightPanel>
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
        minHeight : "$MIN_SIZE",
        maxWidth: 1600,
  
        backgroundColor: "$bg_color1",
    },

    container_small_width:{
        display: "flex",
        flexDirection : "column",
        backgroundColor: "$bg_color1",
        minWidth: "$MIN_SIZE",
        minHeight : "$MIN_SIZE",
        width: "100%",
    }
    
});
