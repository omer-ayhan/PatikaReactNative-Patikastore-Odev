import React from "react";
import { View, TextInput } from "react-native";
import styles from "./SearchBar.style";

function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Ara..." />
    </View>
  );
}

export default SearchBar;
