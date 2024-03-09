/**
 * \brief : React module that encapsulates the top bar containing the 
 *          general tools of the UI
 */

import React, {Component} from "react";
import { Button, Text, View } from "react-native";

import { topBarStyle } from "@styles/topBarStyle";

interface TopBarProps{}
interface TopBarState{}

export default class TopBar extends Component<TopBarProps, TopBarState>{
    constructor(public props: TopBarProps){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View style={topBarStyle.container}>
                <Text style={topBarStyle.title}>LENIA</Text>
                <Button title="Fonction 1"></Button>
                <Button title="Fonction 2"></Button>
                <Button title="Fonction 3"></Button>
            </View>
        )
            
    }
}