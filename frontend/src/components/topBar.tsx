/**
 * \brief : React module that encapsulates the top bar containing the 
 *          general tools of the UI
 */
import React, { Component, PropsWithChildren, useEffect, useRef, useState } from "react";
import { View, Image, ImageStyle, Animated, ImageSourcePropType, Easing, Text, Pressable } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


interface TopBarProps { }
interface TopBarState { }


export default class TopBar extends Component<TopBarProps, TopBarState>{
    constructor(public props: TopBarProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={topBarStyle.container}>
                <View style={topBarStyle.button_group}>
                    <RotatingImage style={topBarStyle.logo} source={require("@assets/lenia-icon.svg")}></RotatingImage>
                    <Image source={require("@assets/lenia-title.svg")} style={topBarStyle.title}></Image>
                </View>


                <View style={topBarStyle.button_group}>
                    <ButtonModule title="How to use"></ButtonModule>
                    <ButtonModule title="About us"></ButtonModule>
                    <ButtonModule title="Contact us"></ButtonModule>
                </View>
            </View>
        )
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
type ButtonProps = {title: string}
const ButtonModule = (props  : ButtonProps)=>{
    const title = props.title;
    const  [stylePressable, setStylePressable] =  useState(topBarStyle.button);
    return(
        <Pressable style={stylePressable} onHoverIn={()=>{setStylePressable(topBarStyle.button_hover)}} onHoverOut={()=>{setStylePressable(topBarStyle.button)}}>
            <Text style={topBarStyle.button_text}>{title}</Text>
        </Pressable>
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

    button_group:{
        display: "flex",
        flexDirection : "row",
        alignItems: "center",
        gap: 15,
    },

    logo: {

        width: '2.5rem',
        height: '2.5rem',
    },

    title: {
        marginLeft: -20,
        transform: "scale(0.8)"
    },

    button:{
        backgroundColor: "$fg_color2",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
    },

    button_hover:{
        backgroundColor: "$fg_color2_hover",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
    },

    button_text:{
        fontWeight: "bold",
        color: "$fg_color1",
    }

});
