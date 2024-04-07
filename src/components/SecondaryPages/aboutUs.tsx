import RotatingImage from "@components/Utilities/RotatingImage";
import React from "react";
import { Image, Text, View } from "react-native";
import { pagesStyle } from "@components/Utilities/styleList";


interface AboutUsProps {
    isWindowWidthSmall: boolean;
}


export default function AboutUs(props: AboutUsProps) {
    return (
        <View style={props.isWindowWidthSmall ? pagesStyle.small_container : pagesStyle.container}>
            <Text style={pagesStyle.title}>About us</Text>
            <View style={pagesStyle.info_container}>
                <View style={pagesStyle.infoBox_orangeCIA}>
                    <Text style={pagesStyle.infobox_title_orangeCIA}>What organisation?</Text>
                    <Text style={pagesStyle.paragraph}>
                        <Image style={pagesStyle.image_empty_total} 
                            resizeMode="center" source={require("@assets/BadgeCIA-1024x1024.png")}/>
                        The CIA
                    </Text>
                </View>
                <View style={pagesStyle.infoBox_blueCIA}>
                    <Text style={pagesStyle.infobox_title_blueCIA}>And what is CIA?</Text>
                    <Text style={pagesStyle.paragraph}>
                        The CIA, or in french "Le Club d'Intelligence Artificielle de l'Université Laval", is a 
                        small organisation of passionnate students of IA in Laval University.
                        <br/><br/>
                        We often dedicate our personnal to cool little projects like this one! Pretty cool :)
                        <br/><br/>
                        For more informations, you can go check our official <a href="https://cia.ift.ulaval.ca/">website</a>
                    </Text>
                </View>
                <View style={pagesStyle.infoBox_orangeCIA}>
                    <Text style={pagesStyle.infobox_title_orangeCIA}>And who?</Text>
                    <Text style={pagesStyle.paragraph}>
                        Here are the members of the CIA responsible for this projet! :
                        <br/> <br/>
                        <Text style={pagesStyle.list_item_orangeCIA}>Theophile Berteloot</Text>
                        <br/>
                        <Text style={pagesStyle.list_item_blueCIA}>Jordan Mathieu</Text>
                        <br/>
                        <Text style={pagesStyle.list_item_orangeCIA}>John-William Lebel</Text>
                        <br/>
                        <Text style={pagesStyle.list_item_blueCIA}>Louis-Etienne Messier</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

