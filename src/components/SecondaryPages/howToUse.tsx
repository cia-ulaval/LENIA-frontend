import RotatingImage from "@components/Utilities/RotatingImage";
import React from "react";
import { Image, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


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


const pagesStyle = EStyleSheet.create({
    container: {
        marginTop: "$TOPBAR_HEIGHT",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: 0,
        overflowY: "auto",
    },

    small_container: {
        marginTop: "$TOPBAR_HEIGHT",
        height:0,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflowY: "auto",
    },

    info_container: {
        margin: 20,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
    },

    infoBox_red: {
        padding: 25,
        width: 300,
        minHeight: 300,
        flexGrow: 1,
        maxWidth: 500,
        backgroundColor: "$bg_color2",
        borderRadius: 30,
        boxShadow: "-10px 10px 10px  ",
        borderWidth: 1,
        borderColor: "$special_red_hover",
    },

    infoBox_green: {
        padding: 25,
        width: 300,
        minHeight: 300,
        flexGrow: 1,
        maxWidth: 500,
        backgroundColor: "$bg_color2",
        borderRadius: 30,
        boxShadow: "-10px 10px 10px  ",
        borderWidth: 1,
        borderColor: "$special_green_hover",
    },

    infoBox_blue: {
        padding: 25,
        width: 300,
        minHeight: 300,
        flexGrow: 1,
        maxWidth: 500,
        backgroundColor: "$bg_color2",
        borderRadius: 30,
        boxShadow: "-10px 10px 10px  ",
        borderWidth: 1,
        borderColor: "$special_blue_hover",
    },

    title: {
        margin: 20,
        color: "$bg_white",
        fontSize: "3rem",
        borderBottomColor: "$bg_color3",
        borderBottomWidth: 1,
        fontWeight: "bold",
        marginBottom: 40,
    },

    infobox_title_red: {
        color: "$special_red_hover",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center"
    },

    infobox_title_green: {
        color: "$special_green_hover",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center"
    },

    infobox_title_blue: {
        color: "$special_blue_hover",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
    },

    paragraph: {
        marginTop: 5,
        color: "$bg_white",
        fontSize: "1rem",
        textAlign: "center"

    },

    image_empty: {
        margin: 10,
        borderRadius: 30,
        width: 100,
        height: 100,
        float: "left",
    },

    image_red_small: {
        margin: 10,
        borderRadius: 30,
        borderColor: "$special_red",
        backgroundColor: "$special_red",
        borderWidth: 1,
        float: "left",
    },

    image_red: {
        margin: 10,
        borderRadius: 30,
        borderColor: "$special_red",
        backgroundColor: "$special_red",
        borderWidth: 1,
        float: "left",
        width: "100%",
    },

    image_green: {
        margin: 10,
        borderRadius: 30,
        borderColor: "$special_green",
        backgroundColor: "$special_green",
        borderWidth: 1,
        float: "left",
        width: "100%",
    },

    image_blue: {
        margin: 10,
        borderRadius: 30,
        borderColor: "$special_blue",
        backgroundColor: "$special_blue",
        borderWidth: 1,
        float: "left",
        width: "100%",
    }
});