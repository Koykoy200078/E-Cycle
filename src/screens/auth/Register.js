import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, IMGS } from "../../constants";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useForm } from "react-hook-form";

const onRegister = (data) => {
  // register(data.email, data.password)
  console.log(data);
};

export default function ({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <>
      <ImageBackground source={IMGS.bg} style={styles.rootBg}>
        <View style={styles.container}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: COLORS.transparent,
              marginTop: 10,
            }}
          >
            <CustomInput
              name="email"
              placeholder="Email Address"
              source={{ uri: IMGS.iconUname }}
              control={control}
              rules={{ required: "Email Address is required" }}
            />

            <CustomInput
              name="password"
              placeholder="Password"
              control={control}
              source={{ uri: IMGS.iconPwd }}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should minimum 8 characters long",
                },
              }}
              secureTextEntry={true}
            />
          </View>

          <View
            style={{ borderRadius: 10, backgroundColor: COLORS.transparent }}
          >
            <CustomInput
              name="email"
              placeholder="Full Name"
              source={{ uri: IMGS.iconUname }}
              control={control}
              rules={{ required: "Full Name is required" }}
            />

            <CustomInput
              name="email"
              placeholder="Address"
              source={{ uri: IMGS.iconLocation }}
              control={control}
              rules={{ required: "Address is required" }}
            />
            <CustomInput
              name="email"
              placeholder="Contact Number"
              source={{ uri: IMGS.iconContact }}
              control={control}
              rules={{ required: "Contact Number is required" }}
            />
          </View>

          <CustomButton
            text="REGISTER"
            type="CUSTOM1"
            onPress={handleSubmit(onRegister)}
          />
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
    padding: 20,
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
