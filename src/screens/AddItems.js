import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IMGS } from "../constants";

export default function () {
  return (
    <>
      <ImageBackground source={IMGS.bg} style={styles.rootBg}>
        <View style={styles.container}>
          <Text>Add Items</Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  rootBg: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
