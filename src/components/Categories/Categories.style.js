import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  categoriesContainer: {
    gap: 5,
    marginBottom: 16,
  },
  card: {
    flex: 1,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#C9C9C9",
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#42499A",
  },
});
