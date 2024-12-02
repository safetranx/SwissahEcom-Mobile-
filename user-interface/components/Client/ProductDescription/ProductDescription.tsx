import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const ProductDescription = () => {
  const { productName, productPrice, productImage } = useLocalSearchParams();
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0); // State to manage user rating

  const imageUri = typeof productImage === "string" ? productImage : null;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productDescContainer}>
        <View style={styles.imageWrapper}>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.goBack()}
            >
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

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{productName}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={decreaseQuantity}
            >
              <Ionicons name="remove" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={increaseQuantity}
            >
              <Ionicons name="add" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.priceCon}>
        <Text style={styles.price}>{productPrice}</Text>
      </View>

      {/* Rating Section */}
      <View style={styles.ratingSection}>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setRating(index + 1)} // Set the rating based on star clicked
            >
              <Ionicons
                name={index < rating ? "star" : "star-outline"} // Filled star if rating is greater than index
                size={16}
                color={index < rating ? "gold" : "gray"} // Gold for active, gray for inactive
                style={styles.star}
              />
            </TouchableOpacity>
          ))}
          <Text style={{ color: "#a4a9b3" }}>567737</Text>
        </View>
      </View>

      {/* Description section */}
      <View style={styles.DescrptionContainer}>
        <Text style={{ textAlign: "justify" }}>
          Its simple and elegant shape makes it perfect for those of you who
          like you who want minimalist clothes{" "}
        </Text>
      </View>

      <View style={styles.sizeContainer}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Choose size</Text>
          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text>S</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quantityButton}>
              <Text>M</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quantityButton}>
              <Text>L</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quantityButton}>
              <Text>XL</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Color</Text>
          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text>S</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quantityButton}>
              <Text>M</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quantityButton}>
              <Text>L</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quantityButton}>
              <Text>XL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal:16, marginTop: 20}}>
        <TouchableOpacity style={styles.authButton}>
          <Text style={styles.authButtonText}>Add to cart</Text>
        </TouchableOpacity>
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
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SCREEN_WIDTH * 0.9,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    padding: 8,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderRadius: 20,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
    fontWeight: "bold",
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
    padding: 10,
  },
  iconButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 16,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
  placeholder: {
    fontSize: 16,
    color: "gray",
    marginBottom: 16,
    textAlign: "center",
  },
  priceCon: {
    paddingHorizontal: 16,
  },
  ratingSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },

  ratingLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  star: {
    marginHorizontal: 6, // Space between stars
  },
  DescrptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  sizeContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  authButton: {
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    borderRadius: 20,
    // position: "relative",
    // top: 140,
    alignItems: "center",
    marginVertical: 10,
  },
  authButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
