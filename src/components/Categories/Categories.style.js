import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: globalStyle.itemBackground,
    marginHorizontal:15,
    marginVertical:20,
    borderRadius:15
  },
  categoriesContainer: {
    gap: 10,
  },
  card: {
    flex: 1,
    borderRadius:15
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#C9C9C9",
    borderRadius: 15,
  },
  button: {
    backgroundColor: globalStyle.primary,
  },
  textHead:{
    color: globalStyle.textColorBlack,
    fontWeight: "bold",
    fontSize: 20
  },
  name:{
    color: globalStyle.textColorBlack
  }
});
