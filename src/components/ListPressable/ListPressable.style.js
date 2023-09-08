import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
  eventItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    width: 380,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: globalStyle.itemBackground,
  },
  avatar: {
    resizeMode: "contain",
    width: "25%",
    margin: 10,
    height: "85%",
    borderRadius: 15,
  },
  description: {
    width: "65%",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: globalStyle.textColorBlack,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: globalStyle.primary,
    fontSize: 16,
  },
  center: {
    fontSize: 13,
    color: globalStyle.textColorGrey,
  },
});
