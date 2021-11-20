import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  header_container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 33,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#800080",
  },
  shopping_cart: {
    position: "relative",
  },
  badge: {
    width: 23,
    height: 23,
    backgroundColor: "#ff0000",
    position: "absolute",
    top: -5,
    left: -8,
    borderRadius: 50,
  },
  badge_text: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
