import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

export default function ({
  control,
  name,
  rules = {},
  source = {},
  placeholder,
  secureTextEntry,
  type = "",
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              styles[`container_${type}`],
              { borderColor: error ? "red" : "white" },
            ]}
          >
            <Image source={source} style={styles.icons} />
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[styles.input, styles[`input_${type}`]]}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={styles.textError}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    fontSize: 10,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  input: {
    width: "100%",
  },
  textError: {
    color: "red",
    alignSelf: "stretch",
  },

  // Customized
  container_CUSTOM1: {
    // backgroundColor: "white",
    fontSize: 10,
    // borderColor: "#e8e8e8",
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  input_CUSTOM1: {
    // borderWidth: 2,
    borderColor: "black",
  },
});
