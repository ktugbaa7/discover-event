import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 250,
    marginBottom: 20,
  },
  item: {
    width: 200,
    height: "100%",
    backgroundColor: "#161616",
    borderRadius: 15,
  },
  text: {
    color: "#4A52AC",
    padding: 10,
  },
  textCenter: {
    color: "#454545",
    paddingHorizontal: 10,
  },
  itemImg: {
    width: "100%",
    height: 150,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    resizeMode: "cover",
  },
});
