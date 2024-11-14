import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/Ionicons";


const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileDisplay}>
        <View style={styles.greetingDisplay}>
          <Image source={require("@/assets/images/G3.png")} />
          <View style={styles.greetContainer}>
            <Text style={styles.welcomeBack}>Welcome Back</Text>
            <Text style={styles.UserName}>User</Text>
          </View>
        </View>

        <View style={styles.greetingDisplay1}>
          <Icon name="notifications-outline" size={34} color="#111" />
          <Image
            source={require("@/assets/images/avatar.jpeg")}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
          <Icon name="search" size={25}></Icon>
          <TextInput placeholder="Search any product..." />
          </View>
          <Icon name="mic" size={25}></Icon>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  profileDisplay: {
    paddingTop: 27,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  greetContainer: {
    flexDirection: "column",
  },
  greetingDisplay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  greetingDisplay1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  welcomeBack: {
    color: "#8C8C8C",
  },
  UserName: {
    color: "#111111",
    fontSize: 18,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  searchSection:{
    paddingHorizontal:20,
  },
});