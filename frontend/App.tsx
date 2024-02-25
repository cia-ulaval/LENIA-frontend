import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { appStyle } from "./styles/appStyle";
import Canvas from "./src/canvas";
import TopBar from "./src/topBar";

export default function App() {
  return (
    <View style={appStyle.container}>
      <TopBar></TopBar>
      <Canvas></Canvas>
    </View>
  );
}
