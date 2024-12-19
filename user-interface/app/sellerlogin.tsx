import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import VendorAuth from "@/components/Vendor/Auth/VendorAuth";


const userlogin = () => {
  return (
    <View style={styles.container}>
      <VendorAuth />
    </View>
  );
};

export default userlogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
