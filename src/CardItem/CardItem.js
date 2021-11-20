import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { GlobalContext } from "../context/GlobalState";
import { Icon } from "react-native-elements";
import styles from "./CardItem.style";

function CardItem({ cards }) {
  const [basketItems, setBasketItems] = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Icon
          raised
          name="add-shopping-cart"
          type="material"
          color="#800080"
          onPress={() => {
            // set the basketItems to the new value without duplicates
            setBasketItems([...new Set([...basketItems, cards])]);
          }}
        />
      </View>
      <Image style={styles.image} source={{ uri: cards.imgURL }} />
      <Text style={styles.title}>{cards.title}</Text>
      <Text style={styles.price}>{cards.price}</Text>
    </View>
  );
}
export default CardItem;
