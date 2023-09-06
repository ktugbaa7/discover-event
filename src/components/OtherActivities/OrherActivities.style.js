import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 30,
  },
  contant: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#202020",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  text: {
    color: "#42499A",
    fontSize: 16,
  },
  pressable: {
    color: "#C9C9C9",
    marginLeft: 5,
    fontSize: 16,
  },
  eventItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    width: 380,
    borderRadius: 15,
    backgroundColor: "#0F0F0F",
    borderWidth: 0.4,
    borderColor: "#222222",
    marginTop: 15,
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
