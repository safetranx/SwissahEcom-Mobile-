import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform, PixelRatio, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const Onboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { role } = useLocalSearchParams();

  // Array of slides for easy management
  const slides = [
    {
      text: "Discover Everything You Need in One Place",
      description:
        "Explore a world of products tailored to you all in one place. We’ve got you covered.",
      image: require("@/assets/images/one.jpeg"),
    },
    {
      text: "Shop Easy, Pay with Confidence",
      description:
        "Secure checkout, verified sellers, and real-time tracking to keep you in control at every step.",
      image: require("@/assets/images/two.jpeg"),
    },
    {
      text: "Tracked orders from Checkout to Doorstep",
      description:
        "Stay in the loop from start to finish with real-time tracking, easy returns, and secure payment.",
      image: require("@/assets/images/three.jpeg"),
    },
  ];


  useEffect(() => {
    console.log("Current Slide:", currentSlide);
  }, [currentSlide]);

  // Move to the next slide
const nextSlide = () => {
  
  if (currentSlide < slides.length - 1) {
    setCurrentSlide(currentSlide + 1);
  } else {
  setTimeout(() => {
    router.replace("/userlogin");
  }, 0);


  }
};



  // Skip to the last slide
  const skipSlides = () => {
    router.push("/userlogin");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={slides[currentSlide].image} style={styles.image}>
        {/* LinearGradient overlay to darken the image */}
        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 0.6)",
            "rgba(0, 0, 0, 0.2)",
            "rgba(0, 0, 0, 0.6)",
          ]}
          style={styles.overlay}
        />

        {/* Circle Indicators */}
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

        <View style={styles.content}>
          <Text style={styles.text}>{slides[currentSlide].text}</Text>
          <Text style={{ color: "white" }}>
            {slides[currentSlide].description}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          {/* Skip Button */}
          <TouchableOpacity style={styles.skipButton} onPress={skipSlides}>
            <Text style={styles.skipButtonText}>Skip</Text>
            <Icon name="chevron-forward" size={18} color="#f2f2f2" />
          </TouchableOpacity>

          {/* Next Button */}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={nextSlide}
            activeOpacity={0.7} // Adjust touch sensitivity
          >
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
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Fallback background
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: height * 0.4, 
  },
  text: {
    color: "#fff",
    fontSize: PixelRatio.getFontScale() * 24, 
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    lineHeight: 32, 
  },
  onboardButtons: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios"? 16 : 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%", // Leave some padding on sides
    alignSelf: "center",
  },
  skipButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "transparent",
  },
  skipButtonText: {
    color: "#f2f2f2",
    fontSize: 18,
    marginLeft: 5,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 27,
    justifyContent: "center",
  },
  nextButtonText: {
    color: "#000",
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "bold",
    marginRight: 5,
  },

  bottonCon: {
    alignItems: "flex-end",
    paddingHorizontal: 20,
    width: "100%",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: height * 0.35, 
    width: "100%",
  },
  indicator: {
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
  activeIndicator: {
    backgroundColor: "#fcd400",
  },
});
