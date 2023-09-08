import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
  containerMaps: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    backgroundColor: globalStyle.itemBackground,
    marginHorizontal:15,
    paddingBottom:20,
    borderRadius:15
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    paddingHorizontal:18,
  },
  text: {
    color: globalStyle.textColorBlack,
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical:10,
    marginLeft:5
  },
  map: {
    width: 345,
    height: 300
  },
  icon: {
    color: globalStyle.primary,
    fontSize:20
  }
});
