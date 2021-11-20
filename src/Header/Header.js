import React, { useContext } from "react";
import { View, Text } from "react-native";
import { GlobalContext } from "../context/GlobalState";
import styles from "./Header.style";

export default function Header() {
  const [basketItems] = useContext(GlobalContext);

  return (
    <View style={styles.header_container}>
      <Text style={styles.header}>patikastore</Text>
      <Text style={styles.header}>Sepet: {basketItems.length}</Text>
    </View>
  );
}
