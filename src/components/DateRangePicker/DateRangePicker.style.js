import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  list_container: {
    marginVertical: 20,
  },
  eventItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    width: 380,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#161616",
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
    color: "#5D67D3",
  },
  center: {
    fontSize: 13,
    color: "#696C91",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  dateText: {
    textAlign: "center",
    marginVertical: 1,
    opacity: 0.3,
  },
  modalContainer: {
    flex: 1,
    marginBottom: 300,
    marginTop: 300,
    marginLeft: 100,
    marginRight: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  paperButton: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#313131",
    backgroundColor: "#202020",
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row-reverse",
    width: 130,
  },
});
