import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GlobalContext } from "../context/GlobalState";
import styles from "./Header.style";
import { Icon } from "react-native-elements";

export default function Header() {
  const [basketItems] = useContext(GlobalContext);

  return (
    <View style={styles.header_container}>
      <Text style={styles.header}>patikastore</Text>
      <TouchableOpacity style={{ position: "relative" }}>
        <Icon
          style={styles.shopping_cart}
          size={35}
          name="shopping-cart"
          type="material"
          color="#800080"
        />
        <View style={styles.badge}>
          <Text style={styles.badge_text}>{basketItems.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
