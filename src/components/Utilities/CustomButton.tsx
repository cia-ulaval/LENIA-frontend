/**
 * \file : CustomButton.tsx
 * \brief : Helper module that creates a custom button with hover animation and can contain 
 *              icons
 */


import { useState, useEffect } from "react";
import { Pressable, Text } from "react-native";
import { Icon } from '@rneui/themed'
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";


export type ButtonProps = {
    title?: { text: string, style?: EStyleSheet.AnyObject }, icon?: { name: string, type: string, color?: string }, onPress: Function, isDisabled?: boolean,
    isSelected?: boolean, styles?: { idle: EStyleSheet.AnyObject, hover: EStyleSheet.AnyObject, disabled: EStyleSheet.AnyObject }
}
const CustomButton = (props: ButtonProps) => {

    const [stylePressable, setStylePressable] = useState(buttonStyle.button);

    enum style {
        idle,
        hover,
        disabled,
    }

    useEffect(() => {
        if (props.isSelected)
            setStyle(style.hover);
        else {
            setStyle(style.idle);
        }
    }, [props.isSelected]);

    useEffect(() => {
        
        if (props.isDisabled) {
            setStyle(style.disabled);
        }
        else{
            setStyle(style.idle);
        }
    }, [props.isDisabled])

    useEffect(() => {
        
        if (props.isSelected)
            setStyle(style.hover);

        if (props.isDisabled){
            setStyle(style.disabled);
        }
    }, [stylePressable]);


    function setStyle(newStyle: style) {
        
        if (!props.isDisabled) {
            if (props.styles) {
                if (newStyle == style.idle) { setStylePressable(props.styles.idle) }
                else if (newStyle == style.hover) { setStylePressable(props.styles.hover) }
            }
            else {
                if (newStyle == style.idle) { setStylePressable(buttonStyle.button) }
                else if (newStyle == style.hover) { setStylePressable(buttonStyle.button_hover) }
            }
        }
        else {
            if (props.styles) {
                setStylePressable(props.styles.disabled)
            }
            else {
                setStylePressable(buttonStyle.button_disabled);
            }
        }
        

    }
    
    return (
        <Pressable style={stylePressable} disabled={props.isDisabled}
            onHoverIn={()=>{setStyle(style.hover)}}
            onHoverOut={()=>{setStyle(style.idle)}}
            onPress={() => { props.onPress() }}>

            {props.title && <Text style={props.title.style ? props.title.style : buttonStyle.button_text}>{props.title.text}</Text>}

            {props.icon && <Icon style={props.isDisabled ? buttonStyle.button_icon_disabled : buttonStyle.button_icon}
                name={props.icon.name} type={props.icon.type}
                solid={true} color={props.icon.color ? props.icon.color : "white"} />}

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

    button_disabled: {
        backgroundColor: "$bg_color2",
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
    },

    button_icon: {
        cursor: "pointer",
    },

    button_icon_disabled: {
        cursor: "default",
    },

    button_text: {
        fontWeight: "bold",
        color: "$fg_color1",
        userSelect: "none",
    }

});

export default CustomButton;
