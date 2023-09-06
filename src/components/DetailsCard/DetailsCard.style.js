import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card_container: {
    padding: 15,
    backgroundColor: "#161616",
    marginHorizontal: 15,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    borderRadius: 15,
  },
  starRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_title: {
    color: "#C9C9C9",
    fontSize: 22,
    marginTop: 20,
  },
  center: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 8,
    alignItems: "center",
  },
  place: {
    fontSize: 24,
    color: "#42499A",
  },
  text_center: {
    color: "#C9C9C9",
    fontSize: 20,
  },
  text: {
    color: "#C9C9C9",
    fontSize: 15,
  },
  rocket: {
    fontSize: 22,
    color: "#42499A",
    marginRight: 10,
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
    color: "#C9C9C9",
    fontSize: 20,
  },
  calendar: {
    color: "#42499A",
    fontSize: 22,
    marginRight: 10,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
