import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { appStyle } from "./styles/appStyle";
import Canvas from "./src/canvas";
import RightBar from "./src/rightBar";
import LeftBar from "./src/leftBar";

export default function App() {
  return (
    <View style={appStyle.container}>
      
      <LeftBar></LeftBar>
      <RightBar></RightBar>

    </View>
  );
}
