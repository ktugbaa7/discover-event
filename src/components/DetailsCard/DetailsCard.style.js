import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
  card_container: {
    padding: 15,
    backgroundColor: globalStyle.itemBackground,
    marginHorizontal: 15,
    borderRadius: 15,
    marginTop:10
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    borderRadius: 15,
  },
  starRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_title: {
    color: globalStyle.textColorBlack,
    fontSize: 22,
    marginTop: 20,
    fontWeight: "bold"
  },
  center: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 8,
    alignItems: "center"
  },
  place: {
    fontSize: 24,
    color: globalStyle.primary,
  },
  text_center: {
    color: globalStyle.textColorBlack,
    fontSize: 20,
  },
  text: {
    color: globalStyle.textColorBlack,
    fontSize: 15,
  },
  ticket: {
    fontSize: 23,
    color: globalStyle.primary,
    marginRight: 10,
  },
  type:{
    color: globalStyle.textColorGrey,
  },
  tag:{
    fontSize:15,
    color: globalStyle.primary,
    marginRight:10
  },
  free: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
  },
  date: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text_time: {
    color: globalStyle.textColorBlack,
    fontSize: 15,
  },
  calendar: {
    color: globalStyle.primary,
    fontSize: 22,
    marginRight: 10,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
