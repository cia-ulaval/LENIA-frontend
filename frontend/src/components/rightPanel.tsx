/**
 * \file : rightPanel.tsx
 * \brief : React module that encapsulates the right toolbar of the UI
 *          Contains the image import buttons and the filter view, 
 */


import React, { Component, FormEvent } from "react";
import { View, Image} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomButton from "./Utilities/CustomButton";
import * as DocumentPicker from 'expo-document-picker';
import {Asset} from 'expo-asset';
import {fetchData} from './reseau';
import axios from 'axios';


interface RightPanelProps { isWindowWidthSmall: boolean }
interface RightPanelState { imageProp: any, channel: number}


export default class RightPanel extends Component<RightPanelProps, RightPanelState>  {
    
    constructor(public props: RightPanelProps) {
        
        super(props);
        this.state = {imageProp:[,,,], channel: 0};
}

    async componentDidMount(){
        
        let asset = await Asset.fromModule('../../assets/icon.png');
        const uri = asset.uri;
        this.setState({imageProp:[uri, uri, uri, uri]});
    }   

    async pickCurrentChannelNewImage() {

        const result = await DocumentPicker.getDocumentAsync(
            { type: 'image/*' }
        );
        if(!result.canceled){
            let oldImage = this.state.imageProp;
            oldImage[this.state.channel] = result.assets[0].uri;
            this.setState({imageProp: oldImage});
        }
    }



    OnChangeChannelState(e:FormEvent<HTMLSelectElement>){
        this.setState({channel: e.currentTarget.selectedIndex});
    }

    render() {
        return (
            <View style={this.props.isWindowWidthSmall ? rightPanelStyle.container_small_width
                                                                    : rightPanelStyle.container}>
                <View style={this.props.isWindowWidthSmall ? rightPanelStyle.upper_button_layout_small_width :
                                                        rightPanelStyle.upper_button_layout}>
                    <select onChange={(e:FormEvent<HTMLSelectElement>)=>{this.OnChangeChannelState(e)}} style={rightPanelStyle.select} >
                        <option >Channel 1</option>
                        <option>Channel 2</option>
                        <option>Channel 3</option>
                        <option>Initial state</option>
                    </select>
                    <CustomButton title="Import image..." onPress={() => { this.pickCurrentChannelNewImage() }}></CustomButton>
                </View>

                <View style={rightPanelStyle.image_view}>
                    <Image resizeMode="contain" source={{uri: this.state.imageProp[this.state.channel]}} style={rightPanelStyle.image} />
                </View>
            </View>
        );
    }
}


const rightPanelStyle = EStyleSheet.create({
    container: {
        marginTop: 80,
        margin: 40,
        padding: 25,
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        borderRadius: 30,
        flexGrow: 1,
        boxShadow: "-10px 10px 10px  ",
        borderWidth: 1,
        borderColor: "$bg_color3",

        backgroundColor: "$bg_color2",
    },

    container_small_width: {
        margin: 10,
        padding: 25,
        maxHeight : 200,
        display: "flex",
        flexDirection: "row",
        borderRadius: 30,
        flexGrow: 1,
        backgroundColor: "$bg_color2",
        boxShadow: "-10px 10px 10px  ",
        borderWidth: 1,
        borderColor: "$bg_color3",

        gap : 20,
        justifyContent : "center",
        alignItems : "center",
    },

    upper_button_layout: {

        display: "flex",
        flexDirection : "row",
        justifyContent: "space-between",

        borderColor: "$bg_color3",
    },

    upper_button_layout_small_width:{
        display: "flex",
        flexDirection : "column",
        justifyContent: "center",
        gap: 50,
    },
    
    image_view: {
        height : 150,
        minWidth : 200,
        display : "flex",
        flexGrow: 1,
        flexDirection : "row",
        alignItems: "flex-start",
    },

    image: {
        width: "100%",
        height : "100%",
    },
    
    select: {
        backgroundColor: "$fg_color1",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        userSelect: "none",
    }
});
