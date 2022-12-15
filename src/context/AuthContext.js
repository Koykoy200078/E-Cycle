import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect } from "react";
import { CONFIG } from "../constants";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(false);

  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${CONFIG.BASE_URL}/api/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        console.log(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    axios
      .post(
        `${CONFIG.BASE_URL}/api/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.api_token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Logout Error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoginIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(`is logged in error ${error}`);
    }
  };

  useEffect(() => {
    isLoginIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        loadingScreen,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
