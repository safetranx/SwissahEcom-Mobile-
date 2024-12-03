import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

const Toast = ({
  visible,
  message,
  onDismiss,
}: {
  visible: boolean;
  message: string;
  onDismiss: () => void;
}) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Fade animation value

  useEffect(() => {
    if (visible) {
      // Fade in the toast
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Automatically dismiss after 2 seconds
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(onDismiss);
        }, 2000);
      });
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.toast, { opacity: fadeAnim }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 50,
    left: "10%",
    right: "10%",
    backgroundColor: "black",
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});
