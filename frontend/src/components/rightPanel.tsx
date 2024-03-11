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
                {/* <View style={rightPanelStyle.upper_button_layout}>
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
                </View> */}
            </View>
        );
    }
}


const rightPanelStyle = EStyleSheet.create({
    container: {
        marginTop: 80,
        margin: 40,
        height: "40%",
        maxWidth: 350,
        display: "flex",
        flexDirection: "row",
        borderRadius: 30,
        flexGrow: 1,
        backgroundColor: "$bg_color2",
        boxShadow: "-10px 10px 10px  ",
        borderWidth: 1,
        borderColor: "$bg_color3",
    },
    upper_button_layout: {
     
    },
    image_view: {
       
    },
    image: {
      

    },
    select: {
        
    }
});
