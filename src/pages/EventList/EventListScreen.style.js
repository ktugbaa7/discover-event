import { StyleSheet } from "react-native";
import { globalStyle } from "../../assets/variable";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.secondary,
    paddingTop:10
  },
  list_container: {
    flex: 1,
  },
  switch: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 15,
  },
  flatlist: {
    marginHorizontal: 15,
    marginBottom: 30,
  },
  eventItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    width: 380,
    borderRadius: 15,
    backgroundColor: globalStyle.itemBackground,
    marginBottom: 5,
  },
  avatar: {
    resizeMode: "contain",
    width: "25%",
    margin: 10,
    height: "85%",
    borderRadius: 15,
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
  tabButton: {
    width: "50%",
    backgroundColor: globalStyle.textColorGrey,
    borderRadius: 15,
    paddingVertical: 3,
  },
  activeTab: {
    width: "50%",
    backgroundColor: globalStyle.primary,
    borderRadius: 15,
    paddingVertical: 3,
  },
  tabButtons: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 8,
  },
  tabButtonText: {
    color: "white",
    padding: 5,
    textAlign: "center",
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
