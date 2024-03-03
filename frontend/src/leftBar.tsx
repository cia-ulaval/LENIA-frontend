/**
 * \brief : React module that encapsulates the left side of the UI 
 *          containing the canvas and some button functionnalities
 */

import React from "react";
import { Component } from "react";
import { View, Text } from "react-native";
import { leftBarStyle } from "../styles/leftBarStyle";

interface LeftBarProps{}
interface LeftBarState{}

export default class LeftBar extends Component<LeftBarProps, LeftBarState>{
    constructor(public props:LeftBarProps){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View style={leftBarStyle.container}>
                <Text>
                    LEFT BAR WOOOOO HOOOO
                </Text>
            </View>
        );
    }
}