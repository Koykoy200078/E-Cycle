import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, ROUTES } from "../constants";
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";
import Feedbacks from "../screens/Feedbacks";
import AddItems from "../screens/AddItems";

const AuthStack = createStackNavigator();
const Auth = () => {
  return (
    <>
      <StatusBar style="auto" />
      <AuthStack.Navigator
        screenOptions={{ headerShown: false, headerBackTitleVisible: false }}
        initialRouteName={ROUTES.LOGIN}
      >
        <AuthStack.Screen name={ROUTES.LOGIN} component={Login} />
        <AuthStack.Screen
          name={ROUTES.REGISTER}
          component={Register}
          options={{ headerShown: true, headerTransparent: true }}
        />

        <AuthStack.Screen name="MainTabs" component={MainTabs} />
      </AuthStack.Navigator>
    </>
  );
};

const MainStack = createStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={ROUTES.HOME}
    >
      {/* <MainStack.Screen name="MainTabs" component={MainTabs} /> */}
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        // tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === ROUTES.HOME) {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === ROUTES.CATEGORIES) {
            iconName = focused ? "pricetags-sharp" : "pricetags-outline";
          } else if (route.name === ROUTES.ADD_ITEMS) {
            iconName = focused ? "add-sharp" : "add-outline";
          } else if (route.name === ROUTES.FEEDBACK) {
            iconName = focused
              ? "chatbox-ellipses-sharp"
              : "chatbox-ellipses-outline";
          } else if (route.name === ROUTES.PROFILE) {
            iconName = focused
              ? "person-circle-sharp"
              : "person-circle-outline";
          }

          return <Ionicons name={iconName} size={23} color={color} />;
        },
      })}
    >
      <Tabs.Screen name={ROUTES.HOME} component={Home} />
      <Tabs.Screen name={ROUTES.CATEGORIES} component={Categories} />
      <Tabs.Screen name={ROUTES.ADD_ITEMS} component={AddItems} />
      <Tabs.Screen name={ROUTES.FEEDBACK} component={Feedbacks} />
      <Tabs.Screen name={ROUTES.PROFILE} component={Profile} />
    </Tabs.Navigator>
  );
};

export default function () {
  const { userInfo, loadingScreen } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}
