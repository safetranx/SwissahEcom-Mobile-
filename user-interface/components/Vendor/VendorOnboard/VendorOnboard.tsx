import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const VendorOnboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { role } = useLocalSearchParams();

  const slides = [
    {
      text: "Reach More Customers Faster",
      description:
        "List your products and connect with customers actively looking for what you sell",
      image: require("@/assets/images/one.jpeg"),
    },
    {
      text: "Smooth, Stress-Free Shipping",
      description:
        "From tracking orders to coordinating delivery, spend less time on logistics and more time growing your business",
      image: require("@/assets/images/two.jpeg"),
    },
    {
      text: "Earnings Straight to Your Account",
      description:
        "Receive payments securely with fast transfers and be in control of your cash flow",
      image: require("@/assets/images/three.jpeg"),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      if (role === "seller") {
        router.push("/sellerlogin");
      } else {
        router.replace("/userlogin");
      }
    }
  };

  const skipSlides = () => {
    router.push("/sellerlogin");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={slides[currentSlide].image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Indicator Section */}
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlide === index && styles.activeIndicator,
              ]}
            />
          ))}
        </View>

        {/* Text Content Section */}
        <View style={styles.content}>
          <Text style={styles.title}>{slides[currentSlide].text}</Text>
          <Text style={styles.description}>
            {slides[currentSlide].description}
          </Text>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={skipSlides}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
            <Text style={styles.nextButtonText}>
              {currentSlide === slides.length - 1
                ? role === "seller"
                  ? "Start Selling"
                  : "Start Shopping"
                : "Next"}
            </Text>
            <Icon name="chevron-forward" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VendorOnboard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 15,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  indicator: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
  activeIndicator: {
    backgroundColor: "#000",
  },
  content: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 22,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  skipButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  skipButtonText: {
    fontSize: 16,
    color: "#999",
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fcd400",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  nextButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginRight: 5,
  },
});
