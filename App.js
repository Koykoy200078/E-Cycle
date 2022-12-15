import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import IMGS from "./src/constants/imgs";
import Login from "./src/screens/auth/Login";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import AppNavigation from "./src/navigations/AppNavigation";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <AppNavigation />
    </AuthProvider>
  );
}
