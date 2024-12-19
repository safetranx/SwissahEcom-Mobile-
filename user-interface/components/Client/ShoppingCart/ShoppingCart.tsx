import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { useCart } from "@/Context/CartContext";
import { Ionicons } from "@expo/vector-icons";
import Toast from "@/components/Alert/Toast";


interface CartItem {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ShoppingCart = () => {
  const { cartItems, removeItemFromCart }:any = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const showToast = (message: string, type: "success" | "error") => {
    setToastMessage(message);
    setToastType(type);
    setToastVisible(true);
  };

  const handleDelete = (itemName: string) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this item from your cart?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            removeItemFromCart(itemName);
            showToast("Item has been deleted!", "error");
          },
        },
      ]
    );
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.name)}
        >
          <Ionicons name="trash-outline" size={20} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <View style={styles.header}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.rating}>⭐ 4.5</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.price}>{item.price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Text style={styles.emptyMessage}>Your cart is empty!</Text>
      )}
      <Toast
        visible={toastVisible}
        message={toastMessage}
        type={toastType}
        onDismiss={() => setToastVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
    paddingHorizontal: 16,
    paddingVertical: 17,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 26,
    padding: 12,
    marginBottom: 12,
    borderBottomWidth: 2,
    borderColor: "#f6f6f6",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "white",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  rating: {
    fontSize: 14,
    color: "#FFD700",
    marginTop: 4,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  quantity: {
    fontSize: 16,
    color: "#333",
  },
  emptyMessage: {
    fontSize: 18,
    color: "#B0B0B0",
    textAlign: "center",
    marginTop: 20,
  },
});

export default ShoppingCart;
