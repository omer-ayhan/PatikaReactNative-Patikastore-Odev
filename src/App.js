import React, { useState } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import SearchBar from "./SearchBar/SearchBar";
import patistore_data from "./patistore_data.json";
import CardItem from "./CardItem";
import { GlobalContext } from "./context/GlobalState";
import Header from "./Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const renderCards = ({ item }) => <CardItem cards={item} />;
  // global state for basket items
  const [basketItems, setBasketItems] = useState([]);
  // global state for main patistore data
  const [shopItems, setShopItems] = useState(patistore_data);

  return (
    // provider will help us to use global states in all the child components
    <GlobalContext.Provider
      value={{
        basketState: { basketItems, setBasketItems },
        shopStates: { shopItems, setShopItems },
      }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <Header />
          <SearchBar />
          <FlatList
            numColumns={2} // 2 cards in a row
            horizontal={false} // must be if numColumns is used
            keyExtractor={({ id }) => id.toString()} // keyExtractor is used to identify each item
            data={shopItems} // source of the FlatList
            renderItem={renderCards} // renderCards is used to render each item
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
