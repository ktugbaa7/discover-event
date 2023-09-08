import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.secondary,
  },
  itemContainer: {
    marginTop: 20,
    height: 300,
    borderRadius: 10,
  },
  itemImg: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "contain",
  },
  button: {
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: globalStyle.primary,
  },
  slider: {
    padding: 10,
    
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: globalStyle.itemBackground
  },
  text: {
    fontSize: 20,
    color: globalStyle.textColorBlack,
    fontWeight: "bold"
  },
  contant: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: globalStyle.itemBackground,
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal:15
  },
  textHead: {
    color: globalStyle.textColorBlack,
    fontSize: 16,
  },
  pressable: {
    color: globalStyle.primary,
    marginLeft: 5,
    fontSize: 16,
  },
  share:{
    fontSize:22,
    color: globalStyle.secondary
  },
  eventText:{
    color: globalStyle.textColorGrey,
    marginHorizontal:20,
    marginBottom:10
  }
});
