/**
 * \brief : React module that shows the simulation. 
 */
import React from "react";
import { Component } from "react";
import { View, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


interface ViewportProps {}
interface ViewportState {}


export default class Viewport extends Component<ViewportProps, ViewportState>{
    constructor(public props: ViewportProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={viewportStyle.container}>
                <Image src=""/>
            </View>
        );
    }
}


const viewportStyle = EStyleSheet.create({
    container: {
        aspectRatio: 4/3,
        width: "100%",
        height: "100%",
        backgroundColor: "$bg_color2",
        alignItems: "center",
        justifyContent: "center",
      }
});
