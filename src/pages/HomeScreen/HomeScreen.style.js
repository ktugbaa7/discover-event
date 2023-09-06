import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  itemContainer: {
    marginTop: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  itemImg: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: "contain",
    backgroundColor: "#040D12",
    opacity: 0.6,
  },
  description: {
    zIndex: 99,
    paddingTop: 200,
    position: "absolute",
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
  },
  itemCenter: {
    color: "white",
    textAlign: "center",
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "900",
    marginHorizontal: 15,
    paddingVertical: 20,
    color: "#4A52AC",
  },
  past_text: {
    color: "#4A52AC",
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 15,
    marginBottom: 20,
  },
});
