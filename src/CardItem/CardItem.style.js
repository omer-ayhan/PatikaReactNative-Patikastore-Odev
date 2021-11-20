import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 0,
    left: 0,
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
});

export default styles;
