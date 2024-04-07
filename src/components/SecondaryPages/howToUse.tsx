import RotatingImage from "@components/Utilities/RotatingImage";
import React from "react";
import { Image, Text, View } from "react-native";
import { pagesStyle } from "@components/Utilities/styleList";


interface HowtoUseProps {
    isWindowWidthSmall: boolean;
}


export default function HowToUse(props: HowtoUseProps) {
    return (
        <View style={props.isWindowWidthSmall ? pagesStyle.small_container : pagesStyle.container}>
            <Text style={pagesStyle.title}>How to use</Text>
            <View style={pagesStyle.info_container}>
                <View style={pagesStyle.infoBox_red}>
                    <Text style={pagesStyle.infobox_title_red}>What is LENIA?</Text>
                    <Text style={pagesStyle.paragraph}>
                        <Image style={pagesStyle.image_red_small}
                            resizeMode="contain" source={require("@assets/leniaMovement.gif")} />
                        LENIA is a generalisation of Conway's Game of Life within a
                        continuous environmment.
                        <br></br><br></br>
                        It was orignally created by Bert Wang-Chak Chan, a researcher at Google Deepmind.
                        <br></br><br></br>
                        The goal of LENIA's simulation is to explore emergent "lifeforms" from simple rules.</Text>
                </View>
                <View style={pagesStyle.infoBox_green}>
                    <Text style={pagesStyle.infobox_title_green}>What is this website?</Text>
                    <Text style={pagesStyle.paragraph}>
                        <RotatingImage style={pagesStyle.image_empty} source={require("@assets/lenia-icon.svg")} />
                        This website is an attempt to create a tool to experiment on LENIA's emergent lifeforms.
                        <br></br><br></br>
                        The user can modify all the parameters relevant to the LENIA simulation and observe the resulting
                        interactions.
                        <br></br><br></br>
                        The simulation has 3 different "dimensions" (channels) with their own filter that
                        regulates the interactions of the world!
                    </Text>
                </View>
                <View style={pagesStyle.infoBox_blue}>
                    <Text style={pagesStyle.infobox_title_blue}>How to change filters?</Text>
                    <Text style={pagesStyle.paragraph}>
                        <Image style={pagesStyle.image_blue} source={require("@assets/gifChangeFilter.gif")} resizeMode="contain" />
                        Filters dictate how the channels interact
                    </Text>
                </View>
                <View style={pagesStyle.infoBox_green}>
                    <Text style={pagesStyle.infobox_title_green}>How to control timestep?</Text>

                    <Text style={pagesStyle.paragraph}>
                        <Image style={pagesStyle.image_green} source={require("@assets/gifControlTimeStep.gif")} resizeMode="contain" />
                        The timestep is amount of "passed" time between each iteration
                    </Text>
                </View>
                <View style={pagesStyle.infoBox_red}>
                    <Text style={pagesStyle.infobox_title_red}>How to play/stop/pause</Text>
                    <Text style={pagesStyle.paragraph}>
                        <Image style={pagesStyle.image_red} source={require("@assets/gifStopPlay.gif")} resizeMode="contain" />
                        You can play, pause and even stop the simulation!
                    </Text>
                </View>
            </View>
        </View>
    );
}


