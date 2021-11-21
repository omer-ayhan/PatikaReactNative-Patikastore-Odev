import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "50%",
    margin: 8,
    padding: 15,
    backgroundColor: "#eceff1",
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get("window").height / 4,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#000",
  },
  price: {
    fontSize: 20,
    color: "#888",
  },
  button: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
  },
  inStock: {
    fontSize: 20,
    color: "#f44336",
    fontWeight: "bold",
  },
});

export default styles;
