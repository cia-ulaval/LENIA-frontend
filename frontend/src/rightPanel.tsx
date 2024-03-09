/**
 * \brief : React module that encapsulates the right toolbar of the UI
 *          Contains the image import buttons and the filter view
 */


import React, {Component} from "react";
import {View, Text, Button, Image} from "react-native";
import { rightPanelStyle } from "@styles/rightPanelStyle";


interface RightPanelProps{}
interface RightPanelState{}

export default class RightPanel extends Component<RightPanelProps, RightPanelState>{
    constructor(public props: RightPanelProps){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View style={rightPanelStyle.container}>
                <View style={rightPanelStyle.upper_button_layout}>
                    <select style={rightPanelStyle.select}>
                        <option>Channel 1</option>
                        <option>Channel 2</option>
                        <option>Channel 3</option>
                        <option>Start Seed</option>
                    </select>
                    <Button title="Import image..."></Button>
                </View>


                <View style={rightPanelStyle.image_view}>

                    {/* c'est une image test */}
                    <Image source={require("../assets/adaptive-icon.png")}
                          style={rightPanelStyle.image}></Image>

                </View>
            </View>
        );
    }
}