/**
 * \file : CustomButton.tsx
 * \brief : Helper module that creates a custom button with hover animation and can contain 
 *              icons
 */


import { useState,useEffect } from "react";
import { Pressable,Text } from "react-native";
import { Icon } from '@rneui/themed'
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";


export type ButtonProps = { title?: string, icon?: { name: string, type: string, }, onPress:Function, 
                    isSelected?: boolean}
const CustomButton = (props: ButtonProps) => {

    const [stylePressable, setStylePressable] = useState(buttonStyle.button);

    useEffect(()=>{
        if(props.isSelected)
            setStylePressable(buttonStyle.button_hover);
        else{
            setStylePressable(buttonStyle.button);
        }
    }, [props.isSelected]);

    useEffect(()=>{
        if(props.isSelected)
            setStylePressable(buttonStyle.button_hover);
    }, [stylePressable]);

    return (
        <Pressable style={stylePressable} 
        onHoverIn={() => { setStylePressable(buttonStyle.button_hover) }} 
        onHoverOut={() => { setStylePressable(buttonStyle.button) }}
        onPress={()=>{props.onPress()}}>
            {props.title && <Text style={buttonStyle.button_text}>{props.title}</Text>}
            {props.icon && <Icon style={buttonStyle.button_icon} 
                name={props.icon.name} type={props.icon.type}
                solid={true} color={"white"} />}

        </Pressable>
    );
}


const buttonStyle = EStyleSheet.create({
    button: {
        backgroundColor: "$fg_color2",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        userSelect: "none",
    },

    button_hover: {
        backgroundColor: "$fg_color2_hover",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
    },

    button_icon: {
        cursor:"pointer",
    },

    button_text: {
        fontWeight: "bold",
        color: "$fg_color1",
        userSelect: "none",
    }

});

export default CustomButton;
