/**
 * \brief : React module that encapsulates the top bar containing the 
 *          general tools of the UI
 */
import React, { Component, PropsWithChildren, useEffect, useRef, useState } from "react";
import { View, Image, ImageStyle, Animated, ImageSourcePropType, Easing, Text, Pressable, ScaledSize, TouchableHighlightBase, NativeSyntheticEvent, TargetedEvent, TouchableWithoutFeedback } from "react-native";
import EStyleSheet, { flatten } from "react-native-extended-stylesheet";
import { Icon } from '@rneui/themed'
import CustomButton from "./Utilities/CustomButton";



interface TopBarProps { windowInfo: ScaledSize, isWindowWidthSmall: boolean }
interface TopBarState { isBarsToggle: boolean }


export default class TopBar extends Component<TopBarProps, TopBarState>{



    constructor(public props: TopBarProps) {
        super(props);
        this.state = {
            isBarsToggle: false,
        };
        
    }
    

    componentDidUpdate(prevProps: Readonly<TopBarProps>, prevState: Readonly<TopBarState>, snapshot?: any): void {
        //Reset the toggle when switching to Big Mode
        if(!this.props.isWindowWidthSmall && this.state.isBarsToggle == true){
            this.setState({isBarsToggle: false});
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


                <Pressable style={topBarStyle.button_group_container}>

                    {RenderFunctionnalButtons(this.props.isWindowWidthSmall, this.state.isBarsToggle)}
                    {this.props.isWindowWidthSmall &&
                        <CustomButton isSelected={this.state.isBarsToggle}
                        icon={{ type: 'font-awesome', name: 'bars' }} 
                        onPress={()=>{this.setState({isBarsToggle:!this.state.isBarsToggle})}} />
                    }

                </Pressable>
            </View>
        )
    }
}
const RenderTopBarButtons = (style:EStyleSheet.AnyObject)=>{
    return(
        <View style={style}>
                <CustomButton  onPress={()=>{}} title="How to use"></CustomButton>
                <CustomButton onPress={()=>{}} title="About us"></CustomButton>
                <CustomButton onPress={()=>{}} title="Contact us"></CustomButton>
            </View>
    );
}
const RenderFunctionnalButtons = (isWindowWidthSmall: boolean, isBarsToggle: boolean) => {
    if (!isWindowWidthSmall) {
        return (
            RenderTopBarButtons(topBarStyle.button_group)
        );
    }
    else if(isBarsToggle){
        return (
            RenderTopBarButtons(topBarStyle.button_group_small)
        );
    }
}


type RotatingImageProps = PropsWithChildren<{ style: ImageStyle, source: ImageSourcePropType }>;
const RotatingImage = (props: RotatingImageProps) => {

    const [spinValue, setSpinValue] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 30000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(
            () => { setSpinValue(new Animated.Value(0)) }
        );

    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });


    return (
        <Animated.Image
            style={{
                ...props.style,
                transform: [{ rotate: spin }],
            }} source={props.source}>
        </Animated.Image>
    );

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


    button_group_container:{
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

    logo: {

        width: '2.5rem',
        height: '2.5rem',
    },

    title: {
        marginLeft: -20,
        transform: "scale(0.8)"
    },

});
