import React, { Component } from "react";
import { View, Text } from "react-native";
import { canvasStyle } from "@styles/canvasStyle";

interface CanvasProps {}
interface CanvasState {}

export default class Canvas extends Component<CanvasProps, CanvasState> {
  constructor(public props: CanvasProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={canvasStyle.container}>
        <Text>Mettre Les trucs jolies ici</Text>
      </View>
    );
  }
}
