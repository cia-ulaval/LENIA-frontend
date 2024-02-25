import React, { Component } from "react";
import { View, Text } from "react-native";
import { topBarStyle } from "../styles/topBarStyle";

interface TopBarProps {}
interface TopBarState {}

export default class TopBar extends Component<TopBarProps, TopBarState> {
  constructor(public props: TopBarProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={topBarStyle.container}>
        <Text>
          La top bar ou y a les menus et bouton pour ajouter enlever des trucs
          ou controler la simulation ici !!
        </Text>
      </View>
    );
  }
}
