import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.secondary,
  },
  itemContainer: {
    marginTop: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  itemImg: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: "contain",
    backgroundColor: "#040D12",
  },
  description: {
    zIndex: 99,
    width: "100%",
    position: "absolute",
    height:40,
    top:170,
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    justifyContent: "center"
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
    paddingVertical: 20,
    color: globalStyle.textColorBlack,
  },
  past_text: {
    color: globalStyle.textColorBlack,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
});
