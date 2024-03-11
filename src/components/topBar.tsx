/**
 * \brief : React module that encapsulates the top bar containing the 
 *          general tools of the UI
 */
import React, {Component} from "react";
import { Button, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


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


const topBarStyle = EStyleSheet.create({
    container: {
        width:"100%",
        position: "absolute",
        height: 60,
        backgroundColor: '$bg_color6',
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        color: "white",
        gap: 10,
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: "2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
    },
});
