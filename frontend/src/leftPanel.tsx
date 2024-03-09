/**
 * \brief : React module that encapsulates the left side of the UI 
 *          containing the canvas and some button functionnalities
 */

import React from "react";
import { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { leftPanelStyle } from "@styles/leftPanelStyle";
import Canvas from "./canvas";

interface LeftPanelProps { }
interface LeftPanelState { }

export default class LeftPanel extends Component<LeftPanelProps, LeftPanelState>{
    constructor(public props: LeftPanelProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={leftPanelStyle.container}>
                <Canvas></Canvas>
                <View style={leftPanelStyle.lower_bar}>
                    
                    <View></View>

                    <View style={leftPanelStyle.button_container}>
                        <Button  title="Play" color="#34FF34"></Button>
                        <Button title="Stop" color="#FF3434"></Button>
                    </View>

                    <View style={leftPanelStyle.button_container}>
                        <Text style={{color:"white", fontSize: 15}}>dt: </Text>
                        <TextInput style={{backgroundColor:"white"}}></TextInput>
                    </View>

                </View>
            </View>
        );
    }
}