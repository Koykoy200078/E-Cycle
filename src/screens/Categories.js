import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IMGS } from "../constants";
import TopNavigation from "../navigations/TopNavigation";
import { Layout } from "react-native-rapi-ui";

export default function ({ navigation }) {
  return (
    <Layout>
      <TopNavigation navigation={navigation} source={null} title="Categories" />
      <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.card_template}>
            <Image
              style={styles.card_image}
              source={{
                uri: "https://www.iconfinder.com/icons/1572648/download/png/512",
              }}
            />
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Plastics</Text>
            </View>
          </View>
          <View style={styles.card_template}>
            <Image
              style={styles.card_image}
              source={{
                uri: "https://www.iconfinder.com/icons/1572647/download/png/512",
              }}
            />
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Box's</Text>
            </View>
          </View>
          <View style={styles.card_template}>
            <Image
              style={styles.card_image}
              source={{
                uri: "https://www.iconfinder.com/icons/1572645/download/png/512",
              }}
            />
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Bear Bottles</Text>
            </View>
          </View>
          <View style={styles.card_template}>
            <Image
              style={styles.card_image}
              source={{
                uri: "https://www.iconfinder.com/icons/1572651/download/png/512",
              }}
            />
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Old Papers</Text>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  rootBg: {
    width: "100%",
    height: "100%",
  },
  container: {
    padding: 10,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  card_template: {
    marginTop: 10,
    width: 105,
    height: 105,
    margin: 3,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
  },
  card_image: {
    width: 105,
    height: 105,
    borderRadius: 10,
  },
  text_container: {
    position: "absolute",
    width: 105,
    height: 30,
    bottom: 0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: "white",
  },
});
