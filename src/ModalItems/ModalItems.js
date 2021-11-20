import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
import { GlobalContext } from "../context/GlobalState";
import styles from "./ModalItems.style";

export default function ModalItems({ modalData }) {
  const { basketState } = useContext(GlobalContext);
  const { basketItems, setBasketItems } = basketState;
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Icon
          raised
          name="delete"
          type="material"
          color="#800080"
          onPress={() =>
            // filter basketItems and set the new basketItems
            setBasketItems(
              basketItems.filter((item) => item.id !== modalData.id)
            )
          }
        />
      </View>
      <Image style={styles.image} source={{ uri: modalData.imgURL }} />
      <Text style={styles.title}>{modalData.title}</Text>
      <Text style={styles.price}>{modalData.price}</Text>
    </View>
  );
}
