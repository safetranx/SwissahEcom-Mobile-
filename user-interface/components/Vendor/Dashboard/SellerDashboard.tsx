import { Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");


const SellerDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.profileDisplay}>
        <View style={styles.greetingDisplay}>
          <Image source={require("@/assets/images/G3.png")} />
          <View>
            <Text style={styles.welcomeBack}>Welcome Back</Text>
            <Text style={styles.UserName}>Ragna Bristol</Text>
          </View>
        </View>
        <View style={styles.greetingDisplay1}>
          <Icon name="notifications-outline" size={28} color="#111" />
          <Image
            source={require("@/assets/images/avatar.jpeg")}
            style={styles.avatar}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SellerDashboard

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
  },

   // Profile Section
  profileDisplay: {
    paddingTop: screenHeight * 0.00,
    paddingHorizontal: screenWidth * 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetContainer: {
    flexDirection: "column",
  },
  greetingDisplay: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth * 0.03,
  },
  greetingDisplay1: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth * 0.03,
  },
  welcomeBack: {
    fontSize: screenWidth * 0.04,
    color: "#8C8C8C",
  },
  UserName: {
    fontSize: screenWidth * 0.05,
    fontWeight: "600",
    color: "#111",
  },
  avatar: {
    width: screenWidth * 0.09,
    height: screenWidth * 0.09,
    borderRadius: screenWidth * 0.06,
  },
})