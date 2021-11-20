import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GlobalContext } from "../context/GlobalState";
import styles from "./Header.style";
import { Icon } from "react-native-elements";
import BasketModal from "../Modal/BasketModal";

export default function Header() {
  const { basketState } = useContext(GlobalContext);
  const { basketItems, setBasketItems } = basketState;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.header_container}>
      <BasketModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setBasketItems={setBasketItems}
        basketItems={basketItems}
      />
      <Text style={styles.header}>patikastore</Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ position: "relative" }}>
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
