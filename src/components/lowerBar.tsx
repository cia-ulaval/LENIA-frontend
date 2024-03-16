/**
 * \brief : React module that encapsulates the lower bar, situated in the left panel. 
 *          Contains the display controls plus some info concerning the simulation.
 */
import React from "react";
import { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


interface LowerBarProps {}
interface LowerBarState {}


export default class LowerBar extends Component<LowerBarProps, LowerBarState>{
    constructor(public props: LowerBarProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={lowerBarStyle.container}>
                <View style={lowerBarStyle.button_container}>
                    <Button  title="Play" color="#34FF34"></Button>
                    <Button title="Stop" color="#FF3434"></Button>
                </View>
                <View style={lowerBarStyle.text_input_container}>
                    <Text style={{color:"white", fontSize: 15}}>dt: </Text>
                    <TextInput style={{backgroundColor:"white"}}></TextInput>
                </View>
            </View>
        );
    }
}


const lowerBarStyle = EStyleSheet.create({
    container: {
        position: "absolute",
        bottom: -80,
        width: "100%",
        height: 80,
        backgroundColor: "$bg_color6",
        display: "flex", 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    button_container: {
        display : "flex",
        flexGrow: 1,
        flexDirection : "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    text_input_container: {
        display : "flex",
        flexDirection : "row",
        justifyContent: "right",
        alignItems: "right",
        gap: 10,
    },
});
