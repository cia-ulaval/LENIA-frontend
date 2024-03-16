/**
 * \brief : React module that encapsulates the top bar containing the 
 *          general tools of the UI
 */
import React, {Component} from "react";
import { Button, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import SettingsModal from "@components/settingsModal"
import { spacer } from "@styles/spacer"


interface TopBarProps {}
interface TopBarState {
    modalVisible: boolean;
}


export default class TopBar extends Component<TopBarProps, TopBarState> {
    constructor(public props: TopBarProps){
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    toggleModal() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    render(){
        return(
            <View style={ topBarStyle.container }>
                <Text style={ topBarStyle.title }>LENIA</Text>
                <View style={ spacer.flexRowSpacer }/>
                <View style={ topBarStyle.settingsButtonStyle }>
                    <Button title="Settings" onPress={ () => this.toggleModal() }/>
                </View>
                <SettingsModal isVisible={ this.state.modalVisible } onClose={ () => this.toggleModal() } />
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
    settingsButtonStyle: {
        padding: 10
    }
});
