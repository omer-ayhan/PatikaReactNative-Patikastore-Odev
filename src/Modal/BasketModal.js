import React from "react";
import {
  View,
  Text,
  Modal,
  FlatList,
  Pressable,
  Alert,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import ModalItems from "../ModalItems/ModalItems";
import styles from "./Modal.style";
import empty_logo from "./empty-cart.png";

export default function BasketModal({
  setModalVisible,
  modalVisible,
  basketItems,
  setBasketItems,
}) {
  const renderItem = ({ item }) => <ModalItems modalData={item} />; //render function for modal items

  return (
    <Modal
      animationType="slide" //modal animation type
      transparent={true} //modal background transparency
      visible={modalVisible} //modal visibility status
      onRequestClose={() => {
        setModalVisible(!modalVisible); //set modal visibility status
      }}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        // set modal visibility status to false when user taps outside of modal
        onPressOut={() => setModalVisible(false)}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            {/* if basketItems is empty, it will show an illustration instead of blank space */}
            {basketItems.length > 0 ? (
              <FlatList
                data={basketItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <View style={styles.empty_container}>
                <Image
                  resizeMode="contain"
                  style={styles.empty_logo}
                  source={empty_logo}
                />
                <Text style={styles.empty_text}>
                  Sepette Herhangi Bir Ürün Yok
                </Text>
              </View>
            )}
            <View style={styles.button_container}>
              {/* button for hiding modal */}
              <Pressable
                style={[styles.button, { backgroundColor: "#f0f0f0" }]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={[styles.button_text, { color: "#000" }]}>
                  Pencereyi Gizle
                </Text>
              </Pressable>
              {/* button for clearing modal items */}
              <Pressable
                style={[styles.button]}
                onPress={() => {
                  if (basketItems.length > 0) {
                    setBasketItems([]);
                    setModalVisible(!modalVisible);
                    Alert.alert("Ödeme Yapıldı ✅");
                  } else {
                    Alert.alert(
                      "Satın alma işlemi için lütfen sepete ürün ekleyiniz"
                    );
                  }
                }}>
                <Text style={styles.button_text}>Ödeme Yap</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
