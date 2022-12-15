import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IMGS } from "../constants";
import Searchbar from "../components/Searchbar";
import { Layout } from "react-native-rapi-ui";
import TopNavigation from "../navigations/TopNavigation";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../components/CustomButton";
import ModalPopup from "../components/ModalPopup";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import ModalProfile from "../components/ModalProfile";

function showProduct(showME, setME) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "",
    },
  });
  return (
    <>
      <ModalPopup visible={showME}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setME(false)}>
            <Image
              source={{ uri: IMGS.iconClose }}
              style={{
                width: 30,
                height: 30,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={[
              styles.card_image,
              {
                width: "100%",
                height: 240,
                borderRadius: 5,
                marginVertical: 20,
              },
            ]}
            source={{
              uri: IMGS.pigBones,
            }}
          />
          <View
            style={{ flexDirection: "row", marginVertical: -20, padding: 5 }}
          >
            <View style={{ width: "40%" }}>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Item Number:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Item Name:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Starting Price:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Propose Price:
              </Text>
              <CustomInput
                name="amount"
                placeholder="Input value"
                control={control}
                rules={{ required: "Amount is required" }}
                type="CUSTOM1"
              />
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>Details</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ flexShrink: 1 }}>0000-7777</Text>
              <Text style={{ flexShrink: 1 }}>Pork Bones 1kg</Text>
              <Text style={{ flexShrink: 1 }}>₱1000</Text>
              <Text style={{ flexShrink: 1 }}></Text>
              <CustomButton text="GO FOR IT" type="CUSTOM3" />
            </View>
          </View>
          <View style={styles.lineStyle_CUSTOM} />
          <Text
            style={{
              textAlign: "justify",
              fontSize: 15,
              padding: 10,
            }}
          >
            Giving essential body to any braise, our heritage breed lamb bones
            are ideal for a classic lamb stock. Ideally roasted prior to
            simmering for maximum depth alongside carrot, onion, celery and
            selected aromatics. Reduce further and add to pan juices of a lamb
            steak for an instant sauce with real body. Also perfect for
            freezing.
          </Text>
        </View>
      </ModalPopup>
    </>
  );
}

function showProduct1(showME1, setME1) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "",
    },
  });
  return (
    <>
      <ModalPopup visible={showME1}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setME1(false)}>
            <Image
              source={{ uri: IMGS.iconClose }}
              style={{
                width: 30,
                height: 30,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={[
              styles.card_image,
              {
                width: "100%",
                height: 240,
                borderRadius: 5,
                marginVertical: 20,
              },
            ]}
            source={{
              uri: IMGS.plastics,
            }}
          />
          <View
            style={{ flexDirection: "row", marginVertical: -20, padding: 5 }}
          >
            <View style={{ width: "40%" }}>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Item Number:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Item Name:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Starting Price:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Propose Price:
              </Text>
              <CustomInput
                name="amount"
                placeholder="Input value"
                control={control}
                rules={{ required: "Amount is required" }}
                type="CUSTOM1"
              />
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>Details</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ flexShrink: 1 }}>0000-7890</Text>
              <Text style={{ flexShrink: 1 }}>Assorted raw plastics</Text>
              <Text style={{ flexShrink: 1 }}>₱100</Text>
              <Text style={{ flexShrink: 1 }}></Text>
              <CustomButton text="GO FOR IT" type="CUSTOM3" />
            </View>
          </View>
          <View style={styles.lineStyle_CUSTOM} />
          <Text
            style={{
              textAlign: "justify",
              fontSize: 15,
              padding: 10,
            }}
          >
            Details area
          </Text>
        </View>
      </ModalPopup>
    </>
  );
}

function showProduct2(showME2, setME2) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "",
    },
  });
  return (
    <>
      <ModalPopup visible={showME2}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setME2(false)}>
            <Image
              source={{ uri: IMGS.iconClose }}
              style={{
                width: 30,
                height: 30,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={[
              styles.card_image,
              {
                width: "100%",
                height: 240,
                borderRadius: 5,
                marginVertical: 20,
              },
            ]}
            source={{
              uri: IMGS.cans,
            }}
          />
          <View
            style={{ flexDirection: "row", marginVertical: -20, padding: 5 }}
          >
            <View style={{ width: "40%" }}>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Item Number:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Item Name:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Starting Price:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Propose Price:
              </Text>
              <CustomInput
                name="amount"
                placeholder="Input value"
                control={control}
                rules={{ required: "Amount is required" }}
                type="CUSTOM1"
              />
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>Details</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ flexShrink: 1 }}>0000-1234</Text>
              <Text style={{ flexShrink: 1 }}>Assorted Cans</Text>
              <Text style={{ flexShrink: 1 }}>₱100</Text>
              <Text style={{ flexShrink: 1 }}></Text>
              <CustomButton text="GO FOR IT" type="CUSTOM3" />
            </View>
          </View>
          <View style={styles.lineStyle_CUSTOM} />
          <Text
            style={{
              textAlign: "justify",
              fontSize: 15,
              padding: 10,
            }}
          >
            Details area
          </Text>
        </View>
      </ModalPopup>
    </>
  );
}

function showUser(showSelf, setSelf) {
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <ModalProfile visible={showSelf}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header_PROFILE}>
            <TouchableOpacity onPress={() => setSelf(false)}>
              <Image
                source={{ uri: IMGS.iconClose }}
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: IMGS.user }}
            style={{ width: 200, height: 200, borderRadius: 10 }}
          />
          <Text style={[styles.content, { fontSize: 16, marginTop: 0 }]}>
            Carvajal, Christian Franc M.
          </Text>
          <Text style={[styles.content, { marginTop: -3, fontSize: 10 }]}>
            Guihulngan City, Negros Oriental
          </Text>
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Details
          </Text>
          <View style={styles.lineStyle} />
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View style={{ width: "60%" }}>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Account Number:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Total Items :
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Ratings rate :
              </Text>
            </View>
            <View>
              <Text style={{ flexShrink: 1 }}>7777-7777</Text>
              <Text style={{ flexShrink: 1 }}>777</Text>
              <Text style={{ flexShrink: 1 }}>99%</Text>
            </View>
          </View>

          <CustomButton text="MESSAGE" />
        </View>
      </ModalProfile>
    </View>
  );
}

function showUser1(showSelf1, setSelf1) {
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <ModalProfile visible={showSelf1}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header_PROFILE}>
            <TouchableOpacity onPress={() => setSelf1(false)}>
              <Image
                source={{ uri: IMGS.iconClose }}
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: IMGS.Christian }}
            style={{ width: 200, height: 200, borderRadius: 10 }}
          />
          <Text style={[styles.content, { fontSize: 16, marginTop: 0 }]}>
            Punting, Christian
          </Text>
          <Text style={[styles.content, { marginTop: -3, fontSize: 10 }]}>
            Dumaguite City, Negros Oriental
          </Text>
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Details
          </Text>
          <View style={styles.lineStyle} />
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View style={{ width: "60%" }}>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Account Number:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Total Items :
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Ratings rate :
              </Text>
            </View>
            <View>
              <Text style={{ flexShrink: 1 }}>1234-0879</Text>
              <Text style={{ flexShrink: 1 }}>7123</Text>
              <Text style={{ flexShrink: 1 }}>99%</Text>
            </View>
          </View>

          <CustomButton text="MESSAGE" />
        </View>
      </ModalProfile>
    </View>
  );
}

function showUser2(showSelf2, setSelf2) {
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <ModalProfile visible={showSelf2}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header_PROFILE}>
            <TouchableOpacity onPress={() => setSelf2(false)}>
              <Image
                source={{ uri: IMGS.iconClose }}
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: IMGS.alex }}
            style={{ width: 200, height: 200, borderRadius: 10 }}
          />
          <Text style={[styles.content, { fontSize: 16, marginTop: 0 }]}>
            Fabillar, Alexander
          </Text>
          <Text style={[styles.content, { marginTop: -3, fontSize: 10 }]}>
            Tanjay City, Negros Oriental
          </Text>
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Details
          </Text>
          <View style={styles.lineStyle} />
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View style={{ width: "60%" }}>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Account Number:
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Total Items :
              </Text>
              <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
                Ratings rate :
              </Text>
            </View>
            <View>
              <Text style={{ flexShrink: 1 }}>0987-1234</Text>
              <Text style={{ flexShrink: 1 }}>2356</Text>
              <Text style={{ flexShrink: 1 }}>99%</Text>
            </View>
          </View>

          <CustomButton text="MESSAGE" />
        </View>
      </ModalProfile>
    </View>
  );
}

export default function ({ navigation }) {
  const [showME, setME] = useState(false);
  const [showME1, setME1] = useState(false);
  const [showME2, setME2] = useState(false);
  const [showSelf, setSelf] = useState(false);
  const [showSelf1, setSelf1] = useState(false);
  const [showSelf2, setSelf2] = useState(false);
  return (
    <Layout>
      <TopNavigation
        navigation={navigation}
        source={{ uri: IMGS.user }}
        title={<Searchbar placeholder="Search" />}
      />
      <View style={styles.container}>
        <View style={{ marginBottom: -20 }}>
          <Text style={{ fontWeight: "800", fontSize: 15, color: "#000000" }}>
            AVAILABLE
          </Text>
          <Text
            style={{
              fontWeight: "900",
              fontSize: 35,
              marginTop: -13,
              color: "#000000",
            }}
          >
            PRODUCTS
          </Text>
        </View>
        <View View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ marginLeft: 0 }}>
            <TouchableOpacity
              style={[styles.card_template, { marginLeft: 0 }]}
              onPress={() => setME(true)}
            >
              <Image
                style={styles.card_image}
                source={{
                  uri: IMGS.pigBones,
                }}
              />
              <Text
                style={[
                  styles.card_title,
                  {
                    marginTop: -110,
                    backgroundColor: "red",
                    width: 40,
                    marginLeft: 70,
                    flexDirection: "row",
                    borderRadius: 5,
                    textAlign: "center",
                  },
                ]}
              >
                2 days
              </Text>
              <View style={styles.text_container}>
                <Text style={styles.card_title}>Pork Bones 1kg</Text>
              </View>
            </TouchableOpacity>
            {showProduct(showME, setME)}
          </View>

          <View>
            <TouchableOpacity
              style={[styles.card_template]}
              onPress={() => setME1(true)}
            >
              <Image
                style={styles.card_image}
                source={{
                  uri: IMGS.plastics,
                }}
              />
              <Text
                style={[
                  styles.card_title,
                  {
                    marginTop: -110,
                    backgroundColor: "red",
                    width: 40,
                    marginLeft: 70,
                    flexDirection: "row",
                    borderRadius: 5,
                    textAlign: "center",
                  },
                ]}
              >
                2 days
              </Text>
              <View style={styles.text_container}>
                <Text style={styles.card_title}>Assorted raw plastics</Text>
              </View>
            </TouchableOpacity>
            {showProduct1(showME1, setME1)}
          </View>
          <View>
            <TouchableOpacity
              style={[styles.card_template]}
              onPress={() => setME2(true)}
            >
              <Image
                style={styles.card_image}
                source={{
                  uri: IMGS.cans,
                }}
              />
              <Text
                style={[
                  styles.card_title,
                  {
                    marginTop: -110,
                    backgroundColor: "red",
                    width: 40,
                    marginLeft: 70,
                    flexDirection: "row",
                    borderRadius: 5,
                    textAlign: "center",
                  },
                ]}
              >
                2 days
              </Text>
              <View style={styles.text_container}>
                <Text style={styles.card_title}>Assorted Cans</Text>
              </View>
            </TouchableOpacity>
            {showProduct2(showME2, setME2)}
          </View>
        </View>

        <View View style={{ flexDirection: "row" }}>
          <View style={[styles.card_template, { marginLeft: 0 }]}>
            <Image
              style={styles.card_image}
              source={{
                uri: IMGS.pigBones,
              }}
            />
            <Text
              style={[
                styles.card_title,
                {
                  marginTop: -110,
                  backgroundColor: "red",
                  width: 40,
                  marginLeft: 70,
                  flexDirection: "row",
                  borderRadius: 5,
                  textAlign: "center",
                },
              ]}
            >
              2 days
            </Text>
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Pork Bones 1kg</Text>
            </View>
          </View>

          <View style={styles.card_template}>
            <Image
              style={styles.card_image}
              source={{
                uri: IMGS.plastics,
              }}
            />
            <Text
              style={[
                styles.card_title,
                {
                  marginTop: -110,
                  backgroundColor: "red",
                  width: 40,
                  marginLeft: 70,
                  flexDirection: "row",
                  borderRadius: 5,
                  textAlign: "center",
                },
              ]}
            >
              2 days
            </Text>
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Assorted raw plastics</Text>
            </View>
          </View>
          <View style={styles.card_template}>
            <Image
              style={styles.card_image}
              source={{
                uri: IMGS.cans,
              }}
            />
            <Text
              style={[
                styles.card_title,
                {
                  marginTop: -110,
                  backgroundColor: "red",
                  width: 40,
                  marginLeft: 70,
                  flexDirection: "row",
                  borderRadius: 5,
                  textAlign: "center",
                },
              ]}
            >
              2 days
            </Text>
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Assorted Cans</Text>
            </View>
          </View>
        </View>
        <View View style={{ flexDirection: "row" }}>
          <View style={[styles.card_template, { marginLeft: 0 }]}>
            <Image
              style={styles.card_image}
              source={{
                uri: IMGS.pigBones,
              }}
            />
            <Text
              style={[
                styles.card_title,
                {
                  marginTop: -110,
                  backgroundColor: "red",
                  width: 40,
                  marginLeft: 70,
                  flexDirection: "row",
                  borderRadius: 5,
                  textAlign: "center",
                },
              ]}
            >
              2 days
            </Text>
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Pork Bones 1kg</Text>
            </View>
          </View>

          <View style={styles.card_template}>
            <Image
              style={styles.card_image}
              source={{
                uri: IMGS.plastics,
              }}
            />
            <Text
              style={[
                styles.card_title,
                {
                  marginTop: -110,
                  backgroundColor: "red",
                  width: 40,
                  marginLeft: 70,
                  flexDirection: "row",
                  borderRadius: 5,
                  textAlign: "center",
                },
              ]}
            >
              2 days
            </Text>
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Assorted raw plastics</Text>
            </View>
          </View>
          <View style={styles.card_template}>
            <Image
              style={styles.card_image}
              source={{
                uri: IMGS.cans,
              }}
            />
            <Text
              style={[
                styles.card_title,
                {
                  marginTop: -110,
                  backgroundColor: "red",
                  width: 40,
                  marginLeft: 70,
                  flexDirection: "row",
                  borderRadius: 5,
                  textAlign: "center",
                },
              ]}
            >
              2 days
            </Text>
            <View style={styles.text_container}>
              <Text style={styles.card_title}>Assorted Cans</Text>
            </View>
          </View>
        </View>

        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 10,
              color: "#000000",
            }}
          >
            RECOMMEND SELLER'S
          </Text>
          <View style={styles.lineStyle} />
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <View>
              <TouchableOpacity
                style={[styles.card_template, { marginLeft: 0 }]}
                onPress={() => setSelf1(true)}
              >
                <Image
                  style={styles.card_image}
                  source={{
                    uri: IMGS.Christian,
                  }}
                />
                <View style={styles.text_container}>
                  <Text style={styles.card_title}>Christian</Text>
                </View>
              </TouchableOpacity>
              {showUser1(showSelf1, setSelf1)}
            </View>

            <View>
              <TouchableOpacity
                style={[styles.card_template, { marginLeft: 0 }]}
                onPress={() => setSelf(true)}
              >
                <Image
                  style={styles.card_image}
                  source={{
                    uri: IMGS.Franc,
                  }}
                />
                <View style={styles.text_container}>
                  <Text style={styles.card_title}>Christian Franc</Text>
                </View>
              </TouchableOpacity>
              {showUser(showSelf, setSelf)}
            </View>

            <View>
              <TouchableOpacity
                style={[styles.card_template, { marginLeft: 0 }]}
                onPress={() => setSelf2(true)}
              >
                <Image
                  style={styles.card_image}
                  source={{
                    uri: IMGS.alex,
                  }}
                />
                <View style={styles.text_container}>
                  <Text style={styles.card_title}>Alex</Text>
                </View>
              </TouchableOpacity>
              {showUser2(showSelf2, setSelf2)}
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    width: "100%",
  },
  lineStyle_CUSTOM: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    width: "95%",
    marginTop: 20,
    marginLeft: 5,
  },
  rootBg: {
    width: "100%",
    height: "100%",
  },
  container: {
    // flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
  card_template: {
    // marginTop: 10,
    width: 110,
    height: 110,
    margin: 3,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    // borderWidth: 2,
  },
  card_image: {
    width: 110,
    height: 110,
    borderRadius: 10,
    borderWidth: 4,
    // borderColor: "green",
    alignItems: "center",
    alignContent: "center",
  },
  text_container: {
    position: "absolute",
    width: 110,
    height: 40,
    bottom: 0,
    padding: 5,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  header: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginHorizontal: -20,
    marginVertical: -20,
  },
  header_PROFILE: {
    width: "100%",
    height: 40,
    marginTop: -25,
    marginEnd: -20,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
