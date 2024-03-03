/**
 * \brief : React module that encapsulates the right toolbar of the UI
 *          Contains the image import buttons and the filter view
 */


import React, {Component} from "react";
import {View, Text, Button, Image} from "react-native";
import { rightBarStyle } from "../styles/rightBarStyle";


interface RightBarProps{}
interface RightBarState{}

export default class RightBar extends Component<RightBarProps, RightBarState>{
    constructor(public props: RightBarProps){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View style={rightBarStyle.container}>
                <View style={rightBarStyle.upper_button_layout}>
                    <Button title="Channel 1"></Button>
                    <Button title="Import image..."></Button>
                </View>


                <View style={rightBarStyle.image_view}>

                    {/* c'est une image test */}
                    <Image source={require("../assets/adaptive-icon.png")}
                          style={rightBarStyle.image}></Image>

                </View>
            </View>
        );
    }
}