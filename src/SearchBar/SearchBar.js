import React, { useContext, useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import { GlobalContext } from "../context/GlobalState";
import patistore_data from "../patistore_data.json";
import styles from "./SearchBar.style";

function SearchBar() {
  const { shopStates } = useContext(GlobalContext); // global shopStates variable
  const { setShopItems } = shopStates; // destructuring global shopStates variable

  const searchFilterFunction = (text) => {
    const newData = patistore_data.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`; // turning item title to uppercase for case-insensitive search
      const textData = text.toUpperCase(); // turning text parameter to uppercase for case-insensitive search
      return itemData.includes(textData); // returns true if itemData includes textData or if textData is an empty string
    });
    setShopItems(newData); // after filter process is done, set newData to shopStates
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => searchFilterFunction(text)} // onChangeText is a callback function that gives input text as a parameter
        style={styles.textInput}
        placeholder="Ara..."
      />
    </View>
  );
}

export default SearchBar;
