import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import IMGS from "./src/constants/imgs";
import Login from "./src/screens/auth/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={IMGS.bg} style={styles.rootBg}>
        <Login />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rootBg: {
    width: "100%",
    height: "100%",
  },
});
