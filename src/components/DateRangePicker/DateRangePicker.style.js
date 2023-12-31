import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  list_container: {
    marginVertical: 20,
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
  button: {
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: globalStyle.primary,
  },
  text: {
    color: globalStyle.itemBackground,
    paddingLeft: 10,
    paddingRight: 25,
  },
  date: {
    color: globalStyle.itemBackground,
    paddingLeft: 25,
    fontSize: 15,
  },
  noResultsText: {
    color: globalStyle.textColorGrey,
    paddingVertical: 10,
  },
  eventItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    width: 380,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: globalStyle.itemBackground,
  },
  avatar: {
    resizeMode: "contain",
    width: "25%",
    margin: 10,
    height: "85%",
    borderRadius: 15,
  },
  description: {
    width: "65%",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: globalStyle.textColorBlack,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: globalStyle.primary,
    fontSize: 16,
  },
  center: {
    fontSize: 13,
    color: globalStyle.textColorGrey,
  }
});
