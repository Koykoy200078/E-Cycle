import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function ({ onPress, text, type = "PRIMARY" }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 15,
  },
  container_PRIMARY: {
    backgroundColor: "#3b71f3",
  },
  container_TERTIARY: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginVertical: 2,
    // borderWidth: 2
  },
  container_CUSTOM1: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
    backgroundColor: "#74CF7F",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_TERTIARY: {
    fontWeight: "bold",
    color: "gray",
  },
});
