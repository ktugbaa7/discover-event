import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 250,
    marginVertical: 20,
  },
  item: {
    width: 200,
    height: "100%",
    borderRadius: 15,
    backgroundColor: globalStyle.itemBackground,
  },
  text: {
    color: globalStyle.textColorBlack,
    padding: 10,
    fontWeight: "bold",
  },
  itemImg: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    resizeMode: "cover",
  },
});
