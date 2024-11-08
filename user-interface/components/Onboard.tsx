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

const Onboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

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
        "Secure checkout, verified sellers, and real-time tracking to keep you in control at every step. ",
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
      // If on the last slide, navigate to the next page
      // router.push("/nextPage");
      console.log("/nextPage");
    }
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

        <View style={styles.bottonCon}>
          <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
            <Text style={styles.nextButtonText}>
              {currentSlide === slides.length - 1 ? "Finish" : "Next"}
            </Text>
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
    width:"100%",
    
  },

  nextButton: {
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    width: 200,
  },
  nextButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottonCon: {
    alignItems: "flex-end",
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
