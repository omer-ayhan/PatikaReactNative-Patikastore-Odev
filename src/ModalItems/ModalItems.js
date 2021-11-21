import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { GlobalContext } from "../context/GlobalState";
import styles from "./ModalItems.style";

// modalData prop is an array of objects
export default function ModalItems({ modalData }) {
  const { basketState } = useContext(GlobalContext); // global basketState variable
  const { basketItems, setBasketItems } = basketState; // destructuring global basketState variable

  const deleteBasketItem = () => {
    // filter basketItems and set the new basketItems
    // delete functionality for each basket item
    setBasketItems(basketItems.filter((item) => item.id !== modalData.id));
  };

  return (
    // activeOpacity={1} will keep opacity at 1 in all cases
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <View style={styles.button}>
        <Icon
          raised
          name="delete"
          type="material"
          color="#800080"
          onPress={deleteBasketItem}
        />
      </View>
      <Image style={styles.image} source={{ uri: modalData.imgURL }} />
      <Text style={styles.title}>{modalData.title}</Text>
      <Text style={styles.price}>{modalData.price}</Text>
    </TouchableOpacity>
  );
}
