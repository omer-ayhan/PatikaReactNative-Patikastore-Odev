import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { GlobalContext } from "../context/GlobalState";
import styles from "./CardItem.style";

function CardItem({ cards }) {
  const [setBasketItems] = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: cards.imgURL }}
      />
      <Text style={styles.title}>{cards.title}</Text>
      <Text style={styles.price}>{cards.price}</Text>
    </View>
  );
}
export default CardItem;
