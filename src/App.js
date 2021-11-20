import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SearchBar from "./SearchBar/SearchBar";
import patistore_data from "./patistore_data.json";
import CardItem from "./CardItem";
import ContextProvider from "./context/GlobalState";
import Header from "./Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const renderCards = ({ item }) => <CardItem cards={item} />;
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <View style={styles.root}>
          <Header />
          <SearchBar />
          <FlatList
            numColumns={2}
            horizontal={false}
            keyExtractor={({ id }) => id.toString()}
            data={patistore_data}
            renderItem={renderCards}
          />
        </View>
      </SafeAreaProvider>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
