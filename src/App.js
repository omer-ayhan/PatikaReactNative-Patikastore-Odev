import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SearchBar from "./SearchBar/SearchBar";
import patistore_data from "./patistore_data.json";
import CardItem from "./CardItem";
import { GlobalContext } from "./context/GlobalState";
import Header from "./Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const renderCards = ({ item }) => <CardItem cards={item} />;
  const [basketItems, setBasketItems] = useState([]);
  const [shopItems, setShopItems] = useState(patistore_data);

  return (
    <GlobalContext.Provider
      value={{
        basketState: { basketItems, setBasketItems },
        shopStates: { shopItems, setShopItems },
      }}>
      <SafeAreaProvider>
        <View style={styles.root}>
          <Header />
          <SearchBar />
          <FlatList
            numColumns={2}
            horizontal={false}
            keyExtractor={({ id }) => id.toString()}
            data={shopItems}
            renderItem={renderCards}
          />
        </View>
      </SafeAreaProvider>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
