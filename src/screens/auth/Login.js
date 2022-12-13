import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Asset } from "expo-asset";
import IMGS from "../../constants/imgs";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/CustomButton";

const onLogin = (data) => {
  // login(data.email, data.password)
  console.log(data);
};

export default function () {
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
    <View style={styles.container}>
      <Image source={IMGS.logo} style={styles.logo} />

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>
        By signing in you are agreeing our Term and privacy policy
      </Text>

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

      <CustomButton
        text="LOGIN"
        type="CUSTOM1"
        onPress={handleSubmit(onLogin)}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20%",
        }}
      >
        <Text style={{ marginBottom: -10 }}>Need an account?</Text>
        <CustomButton text="Register" type="TERTIARY" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "80%",
    height: 180,
    marginTop: 80,
    marginBottom: -40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    alignContent: "center",
  },
  content: {
    // fontWeight: 'bold',
    // fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
