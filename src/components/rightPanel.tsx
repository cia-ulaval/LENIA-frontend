/**
 * \brief : React module that encapsulates the right toolbar of the UI
 *          Contains the image import buttons and the filter view
 */
import React, {Component} from "react";
import {View, Button, Image} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


interface RightPanelProps{}
interface RightPanelState{}


export default class RightPanel extends Component<RightPanelProps, RightPanelState> {
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
                        <option>Initial state</option>
                    </select>
                    <Button title="Import image..."></Button>
                </View>
                <View style={rightPanelStyle.image_view}>
                    <Image source={require("@assets/adaptive-icon.png")} style={rightPanelStyle.image}/>
                </View>
            </View>
        );
    }
}


const rightPanelStyle = EStyleSheet.create({
    container: {
        marginTop: 60,
        width: 350,
        backgroundColor:'$bg_color5',
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent:"flex-start",
        alignContent: "flex-start",
    },
    upper_button_layout: {
        width: "100%",
        backgroundColor: "bg_color1",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    image_view: {
        width: "100%",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    image: {
        borderRadius:30,
        flex: 1,
        resizeMode: "contain",
        backgroundColor: "black",
        maxHeight: 300,

    },
    select: {
        padding:10,
        borderRadius : 3,
        backgroundColor:"$bg_color1",
        color:"white",
        fontWeight: "bold",
    }
});
