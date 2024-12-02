import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import icons from Expo

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const ProductDescription = () => {
  const { productName, productPrice, productImage } = useLocalSearchParams();

  // Ensure productImage is a string or provide a fallback
  const imageUri = typeof productImage === "string" ? productImage : null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productDescContainer}>
        <View style={styles.imageWrapper}>
          {/* Icons container */}
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="share-social" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <Text style={styles.placeholder}>No Image Available</Text>
          )}
        </View>
        <Text style={styles.title}>{productName}</Text>
        <Text style={styles.price}>{productPrice}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  productDescContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  imageWrapper: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.45,
    borderRadius: 24,
    overflow: "hidden",
    padding: 10,
    marginBottom: 6,
  },
  iconsContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
    padding:10,
  },
  iconButton: {
    backgroundColor: "#a1a0a0",
    padding: 8,
    borderRadius: 16,
    elevation: 3, // For a subtle shadow
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10, // Adds some extra rounding for the image itself
  },
  price: {
    fontSize: 20,
    color: "green",
  },
  placeholder: {
    fontSize: 16,
    color: "gray",
    marginBottom: 16,
    textAlign: "center",
  },
});
