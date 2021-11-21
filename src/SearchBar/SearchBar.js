import React, { useContext, useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import { GlobalContext } from "../context/GlobalState";
import patistore_data from "../patistore_data.json";
import styles from "./SearchBar.style";

function SearchBar() {
  const { shopStates } = useContext(GlobalContext);
  const { setShopItems } = shopStates;

  const searchFilterFunction = (text) => {
    const newData = patistore_data.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    setShopItems(newData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => searchFilterFunction(text)}
        style={styles.textInput}
        placeholder="Ara..."
      />
    </View>
  );
}

export default SearchBar;
