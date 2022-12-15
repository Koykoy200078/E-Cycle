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
    marginVertical: 2,
    backgroundColor: "#74CF7F",
  },
  container_CUSTOM2: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "40%",
    height: 10,
    // marginVertical: 10,
  },
  container_CUSTOM3: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 20,
    borderRadius: 10,
    marginTop: 5,
    marginVertical: 10,
    borderWidth: 1,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_TERTIARY: {
    fontWeight: "bold",
    color: "gray",
  },

  text_CUSTOM2: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 15,
    height: 30,
    // marginBottom: -10,
    borderWidth: 2,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text_CUSTOM3: {
    fontWeight: "bold",
    color: "gray",
    width: "60%",
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
