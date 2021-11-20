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
          name="shopping-basket"
          type="font-awesome"
          color="#f50"
          onPress={() => {
            // set the basketItems to the new value without duplicates
            setBasketItems([...new Set([...basketItems, cards])]);
          }}
        />
      </View>
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Add To Basket</Text>
      </TouchableOpacity> */}
      <Image
        // resizeMode="contain"
        style={styles.image}
        source={{ uri: cards.imgURL }}
      />
      <Text style={styles.title}>{cards.title}</Text>
      <Text style={styles.price}>{cards.price}</Text>
    </View>
  );
}
export default CardItem;
