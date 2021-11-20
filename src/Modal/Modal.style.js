import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
  },
  modalView: {
    margin: 50,
    marginBottom: 90,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: "#800080",
  },
  button_text: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  empty_container: {
    justifyContent: "center",
    alignItems: "center",
    width: "65%",
  },
  empty_logo: {
    width: "100%",
    height: Dimensions.get("window").height / 3,
  },
  empty_text: {
    margin: -25,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
