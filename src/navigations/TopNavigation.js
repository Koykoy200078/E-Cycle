import { TopNav } from "react-native-rapi-ui";
// import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Searchbar from "../components/Searchbar";
import { Image } from "react-native";
import { IMGS } from "../constants";

export default ({ navigation, source = {}, title }) => {
  //   const dispatch = useDispatch();

  function logout() {
    // dispatch(userLogOut());
  }

  return (
    <TopNav
      middleContent={title}
      rightContent={
        <MaterialCommunityIcons name={"exit-to-app"} size={22} color={"#000"} />
      }
      rightAction={() => logout()}
      //   leftContent={
      //     <MaterialCommunityIcons
      //       name={"email-outline"}
      //       size={22}
      //       color={"#000"}
      //     />
      //   }
      leftContent={
        <Image
          source={source}
          style={{ width: 50, height: 50, borderRadius: 30, marginTop: -5 }}
        />
      }
      leftAction={() => null}
    />
  );
};
