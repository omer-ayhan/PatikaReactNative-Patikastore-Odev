import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 8,
    padding: 15,
    backgroundColor: "#eceff1",
    borderRadius: 10,
  },
  image: {
    width: Dimensions.get("window").width / 1.8,
    height: Dimensions.get("window").height / 3,
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
});

export default styles;
