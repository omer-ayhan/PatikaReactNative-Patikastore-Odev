import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { GlobalContext } from "../context/GlobalState";
import { Icon } from "react-native-elements";
import styles from "./CardItem.style";

function CardItem({ cards }) {
  const { basketState } = useContext(GlobalContext); // global basketState variable
  const { basketItems, setBasketItems } = basketState; // destructuring global basketState variable

  // set the basketItems to the new value without duplicates
  // Set will help us to avoid duplicates
  const addToBasket = () =>
    setBasketItems([...new Set([...basketItems, cards])]);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Icon
          raised
          name="add-shopping-cart"
          type="material"
          color="#800080"
          onPress={addToBasket}
        />
      </View>
      <Image style={styles.image} source={{ uri: cards.imgURL }} />
      <Text style={styles.title}>{cards.title}</Text>
      <Text style={styles.price}>{cards.price}</Text>
      {!cards.inStock && <Text style={styles.inStock}>Stokta Yok</Text>}
    </View>
  );
}
export default CardItem;
