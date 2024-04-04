/**
 * \file : viewport.tsx
 * \brief : React module that shows the simulation. 
 */


import React, { useState } from "react";
import { View, Image, TextInput } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomButton from "./Utilities/CustomButton";
import { Icon } from "@rneui/base";


interface ViewportProps { }


export default function Viewport(props: ViewportProps) {

    enum viewportStates {
        stopped,
        playing,
        paused,
    }

    const [playState, setPlayState] = useState(viewportStates.stopped);

    function togglePlay() {
        if (playState == viewportStates.paused) {
            setPlayState(viewportStates.playing);
        }
        else {
            setPlayState(viewportStates.paused);
        }
    }

    function pressStop() {
        setPlayState(viewportStates.stopped);
    }

    return (
        <View style={viewportStyle.container}>
            <View></View>
            <View style={viewportStyle.button_bar}>

                <View></View>

                <View style={viewportStyle.flex_row}>
                    <CustomButton onPress={() => { togglePlay() }} icon={{ type: "font-awesome", name: (playState == viewportStates.paused ? "pause" : "play") }}
                        styles={{
                            idle: viewportStyle.play_button_idle, hover: viewportStyle.play_button_hover,
                            disabled: viewportStyle.button_disabled
                        }}></CustomButton>

                    <CustomButton onPress={() => { pressStop() }} icon={{ type: "font-awesome", name: "stop" }} isDisabled={playState == viewportStates.stopped}
                        styles={{
                            idle: viewportStyle.stop_button_idle, hover: viewportStyle.stop_button_hover,
                            disabled: viewportStyle.button_disabled
                        }}></CustomButton>
                </View>

                <View style={viewportStyle.flex_row}>
                    <Icon type="antdesign" name="hourglass" style={viewportStyle.hourglass_icon} color={"white"} size={30}></Icon>
                    <TextInput style={viewportStyle.text_input}  defaultValue="0.1" maxLength={4}></TextInput>
                    
                </View>

            </View>
        </View>
    );

}


const viewportStyle = EStyleSheet.create({

    container: {
        userSelect: "none",
    },

    text_input:{
        color: "$bg_black",
        fontWeigth : "45",
        backgroundColor: "$bg_white",
        height: "100%",
        borderRadius: 30,
        padding: 10,
        paddingLeft: 25,
        width: 70,
        outline: "none",
        borderWidth: 0,

    },

    hourglass_icon:{
        
    },

    button_bar: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        margin: 25,
        padding: 10,
        borderRadius: 30,
        backgroundColor: "$bg_color3",
    },

    flex_row:{
        display:"flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },

    play_button_idle: {
        backgroundColor: "$special_green",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        width: 70,
        userSelect: "none",
    },

    play_button_hover: {
        backgroundColor: "$special_green_hover",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        width: 70,
        userSelect: "none",
    },

    stop_button_idle: {
        backgroundColor: "$special_red",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        userSelect: "none",
    },

    stop_button_hover: {
        backgroundColor: "$special_red_hover",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        userSelect: "none",
    },

    button_disabled: {
        backgroundColor: "$bg_color2",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        cursor: "default",
    }


});
