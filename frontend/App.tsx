import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { appStyle } from "./src/styles/appStyle";
import TopBar from "./src/topBar";
import RightPanel from "./src/rightPanel";
import LeftPanel from "./src/leftPanel";
import EStyleSheet from "react-native-extended-stylesheet";

//Build le Extended StyleSheet
EStyleSheet.build({
  $bg_color1: '#A4A9BF',
  $bg_color2: '#646E98',
  $bg_color3: '#C5CDF0',
  $bg_color4: '#374273',
  $bg_color5: '#161E46',
  $bg_color6: '#030C33',
  $bg_white: '#F7F7F7',
  $border_color: "#FFFFFF",
});

export default function App() {
  return (
    <View style={appStyle.container}>
      
      <TopBar></TopBar>

      <LeftPanel></LeftPanel>
      <RightPanel></RightPanel>
    </View>
  );
}
