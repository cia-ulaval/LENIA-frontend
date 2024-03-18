/**
 * \file : leftPanel.tsx
 * \brief : React module that encapsulates the left side of the UI 
 *          containing the canvas and some button functionnalities
 */
import React from "react";
import { Component } from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


interface LeftPanelProps{isWindowWidthSmall:boolean}
interface LeftPanelState{}


export default class LeftPanel extends Component<LeftPanelProps, LeftPanelState>{
    constructor(public props: LeftPanelProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={this.props.isWindowWidthSmall ?
                                    leftPanelStyle.container_small_width
                                    : leftPanelStyle.container}>
                
            </View>
        );
    }
}


const leftPanelStyle = EStyleSheet.create({
    container: {

        marginTop: 80,
        margin: 40,
        
        borderRadius: 30,
        flexGrow: 1,
        backgroundColor: "$bg_color2",
        boxShadow: "-10px 10px 10px  ",
        borderWidth: 1,
        borderColor: "$bg_color3",
 
    },

    container_small_width:{
        marginTop: 80,
        margin: 10,
        borderRadius: 30,
        flexGrow: 1,
        backgroundColor: "$bg_color2",
        boxShadow: "-10px 10px 10px  ",
        borderWidth: 1,
        borderColor: "$bg_color3",
    }
});
