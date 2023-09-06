import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },
  list_container: {
    flex: 1,
  },
  title: {
    color: "#5D67D3",
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
    marginTop: 20,
  },
  switch: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 15,
  },
  switch_text: {
    color: "#5D67D3",
  },
  flatlist: {
    marginHorizontal: 15,
    marginBottom: 30,
  },
  errorText: {
    color: "white",
    fontSize: 20,
  },
  eventItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    width: 380,
    borderRadius: 15,
    backgroundColor: "#0F0F0F",
  },
  avatar: {
    resizeMode: "cover",
    width: "25%",
    height: "100%",
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  description: {
    width: "75%",
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A52AC",
  },
  center: {
    fontSize: 13,
    color: "#42499A",
  },
});
