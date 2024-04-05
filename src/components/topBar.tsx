/**
 * \file : topBar.tsx
 * \brief : React module that encapsulates the top bar containing the 
 *          general tools of the UI
 */


import React, { Component} from "react";
import { View, Image, Pressable, ScaledSize } from "react-native";
import CustomButton from "./Utilities/CustomButton";
import RotatingImage from "./Utilities/RotatingImage";
import SettingsModal from "./settingsModal";
import EStyleSheet from "react-native-extended-stylesheet";


interface TopBarProps {
    windowInfo: ScaledSize;
    isWindowWidthSmall: boolean;
}
interface TopBarState {
    isBarsToggle: boolean;
    isSettingsModalVisible: boolean;
}


export default class TopBar extends Component<TopBarProps, TopBarState>{
    constructor(public props: TopBarProps) {
        super(props);
        this.state = {
            isBarsToggle: false,
            isSettingsModalVisible: false,
        };
    }

    toggleSettingsModal() {
        this.setState(prevState => ({ isSettingsModalVisible: !prevState.isSettingsModalVisible }));
    }

    resetBarsToggle() {
        this.setState({ isBarsToggle: false });
    }

    componentDidUpdate(prevProps: Readonly<TopBarProps>, prevState: Readonly<TopBarState>, snapshot?: any): void {
        if (!this.props.isWindowWidthSmall && this.state.isBarsToggle == true) {
            this.resetBarsToggle();
        }
    }

    render() {
        return (
            <View style={topBarStyle.container}>
                <View style={topBarStyle.button_group}>
                    <RotatingImage style={topBarStyle.logo} source={require("@assets/lenia-icon.svg")}></RotatingImage>
                    {
                        !this.props.isWindowWidthSmall &&
                        <Image source={require("@assets/lenia-title.svg")} style={topBarStyle.title}></Image>
                    }
                </View>
                <View style={topBarStyle.button_group_container}>

                    {RenderFunctionnalButtons(this)}
                    {this.props.isWindowWidthSmall &&
                        <CustomButton isSelected={this.state.isBarsToggle}
                            icon={{ type: 'font-awesome', name: 'bars' }}
                            onPress={() => { this.setState({ isBarsToggle: !this.state.isBarsToggle }) }} />
                    }
                </View>
                <SettingsModal
                    isVisible={this.state.isSettingsModalVisible}
                    onClose={() => this.toggleSettingsModal()}
                />
            </View>
        )
    }
}


const RenderTopBarButtons = (topBar: TopBar) => {
    return (
        <React.Fragment>
            <CustomButton onPress={() => { }} title={{text:"How to use"}}></CustomButton>
            <CustomButton onPress={() => { }} title={{text:"About us"}}></CustomButton>
            <CustomButton onPress={() => { }} title={{text:"Contact us"}}></CustomButton>
            <CustomButton onPress={() => topBar.toggleSettingsModal()} title={{text:"Settings"}}></CustomButton>
        </React.Fragment>
    );
}


const RenderFunctionnalButtons = (topBar: TopBar) => {
    if (!topBar.props.isWindowWidthSmall) {
        return (
            <View style={topBarStyle.button_group}>
                {RenderTopBarButtons(topBar)}
            </View>
        );
    }
    else if (topBar.state.isBarsToggle) {
        return (
            <>
                <Pressable style={topBarStyle.button_touchable_transparent}
                        onPress={()=>{topBar.resetBarsToggle();}}>
                </Pressable>
                <View style={topBarStyle.button_group_small}>
                    {RenderTopBarButtons(topBar)}
                </View>
            </>
        );
    }
}


const topBarStyle = EStyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        height: 60,
        zIndex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "$bg_color2",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "$bg_color3",
        userSelect: "none",
    },
    button_group_container: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        cursor: "default",
        zIndex: 3,
    },
    button_group: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },
    button_group_small: {
        padding: 10,
        width: 130,
        top: 55,
        left: -75,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
        borderRadius: 30,
        backgroundColor: "$bg_color2",
        boxShadow: "-4px 4px 4px  ",
        borderWidth: 1,
        borderColor: "$bg_color3",
    },

    button_touchable_transparent:{
        position: "fixed",
        width: "100%",
        height : "100%",
        backgroundColor: "transparent",
        top:0, left :0,
        cursor:"default",
    },
    logo: {

        width: '2.5rem',
        height: '2.5rem',
    },
    title: {
        marginLeft: -20,
        transform: "scale(0.8)"
    },
});
