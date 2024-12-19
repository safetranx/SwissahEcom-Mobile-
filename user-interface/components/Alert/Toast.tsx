import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

const Toast = ({
  visible,
  message,
  type = "success",
  onDismiss,
}: {
  visible: boolean;
  message: string;
  type?: "success" | "error";
  onDismiss: () => void;
}) => {
  const [fadeAnim] = useState(new Animated.Value(0)); 

  useEffect(() => {
    if (visible) {
     
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        
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
    <Animated.View
      style={[
        styles.toast,
        {
          backgroundColor: type === "error" ? "red" : "black",
          opacity: fadeAnim,
        },
      ]}
    >
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
