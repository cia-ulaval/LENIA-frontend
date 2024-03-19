/**
 * \file : RotatingImage.tsx
 * \brief : Helper Module that renders a custom rotating image
 */


import React from "react";
import { useEffect, useState, PropsWithChildren } from "react";
import { Animated, Image, ImageStyle, ImageSourcePropType, Easing } from "react-native";


type RotatingImageProps = PropsWithChildren<{ style: ImageStyle, source: ImageSourcePropType }>;
const RotatingImage = (props: RotatingImageProps) => {

    const [spinValue, setSpinValue] = useState(new Animated.Value(0));
    const DELTA = 30000;

    {/*starts the animation*/}
    useEffect(() => {
        Animated.timing(spinValue, {
            toValue: 1,
            duration: DELTA,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(
            () => { setSpinValue(new Animated.Value(0)) }
        );

    }, [spinValue]);

    {/*interpolation of the value for the spin*/}
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

export default RotatingImage;
