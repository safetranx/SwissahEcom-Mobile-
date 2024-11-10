import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";


const Onboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 

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

  // Move to the next slide
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Navigate to the next page when the last slide is reached
      router.push("/userlogin");
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

        {/* Skip Button */}
        <TouchableOpacity style={styles.skipButton} onPress={skipSlides}>
          <Text style={styles.skipButtonText}>Skip</Text>
          <Icon name="chevron-forward" size={18} color="#f2f2f2" />
        </TouchableOpacity>

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

        <View style={styles.bottonCon}>
         

          <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
            <Text style={styles.nextButtonText}>
              {currentSlide === slides.length - 1 ? "Start Shopping" : "Next"}
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
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 400,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    width:"100%"
  },
  skipButton: {
    position: "absolute",
    bottom: 30,
    left: 10,
    gap:10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "transparent",
  },
  skipButtonText: {
    color: "#f2f2f2",
    fontSize: 25,
    marginLeft: 5,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: 170,
    justifyContent: "center",
  },
  nextButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  bottonCon: {
    alignItems:"flex-end",
    paddingHorizontal:20,
    width:"100%",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 350,
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
