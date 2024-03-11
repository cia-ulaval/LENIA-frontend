/**
 * \brief : React module that encapsulates the left side of the UI 
 *          containing the canvas and some button functionnalities
 */
import React from "react";
import { Component } from "react";
import { View } from "react-native";
import LowerBar from "@components/lowerBar";
import Viewport from "@components/viewport";
import EStyleSheet from "react-native-extended-stylesheet";


interface LeftPanelProps{}
interface LeftPanelState{}


export default class LeftPanel extends Component<LeftPanelProps, LeftPanelState>{
    constructor(public props: LeftPanelProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={leftPanelStyle.container}>
                {/* <Viewport></Viewport>
                <LowerBar></LowerBar> */}
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
});
