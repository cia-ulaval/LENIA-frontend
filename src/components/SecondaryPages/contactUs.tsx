import RotatingImage from "@components/Utilities/RotatingImage";
import React from "react";
import { Image, Text, View } from "react-native";
import { pagesStyle } from "@components/Utilities/styleList";
import { Icon } from '@rneui/themed'


interface ContactUsProps {
    isWindowWidthSmall: boolean;
}


export default function AboutUs(props: ContactUsProps) {
    return (
        <View style={props.isWindowWidthSmall ? pagesStyle.small_container : pagesStyle.container}>
            <Text style={pagesStyle.title}>Contact us</Text>
            <View style={pagesStyle.info_container}>
                <View style={pagesStyle.infoBox_red}>
                    <Text style={pagesStyle.infobox_title_red}>Email ?</Text>
                    <Text style={pagesStyle.paragraph}>
                        <br />
                        <br />
                        You have any questions?
                        <br />
                        You can reach us via our group's email :
                        <br />
                        <a href="cia@ift.ulaval.ca">cia@ift.ulaval.ca</a>
                        <br/>
                        <br/>
                        <Icon name="email-newsletter" type="material-community" color="red"
                            size={55}/>
                    </Text>
                </View>
                <View style={pagesStyle.infoBox_green}>
                    <Text style={pagesStyle.infobox_title_green}>Official website ?</Text>
                    <Text style={pagesStyle.paragraph}>
                        <br />
                        <br />
                        You want more info?
                        <br />
                        You can check out our group's official website :
                        <br />
                        <a href="cia@ift.ulaval.ca">cia@ift.ulaval.ca</a>
                        <br/>
                        <br/>
                        <Icon name="monitor-screenshot" type="material-community" color="green"
                            size={55}/>
                    </Text>
                </View>
            </View>
        </View>
    );
}
