import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
      <View style={styles.slideShow}>
        <View style={{padding:20,}}>
          <Text style={styles.mainTopic}>Get Pixel 7 and Pixel 7 Pro</Text>
          <Text style={styles.subMainTopic}>Full speed ahead</Text>
          <TouchableOpacity style={styles.shopBtn}>
            <Text style={{color:"white", textAlign:"center"}}>Shop now</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("@/assets/images/phone.png")}
          style={styles.phoneImg}
        />
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
  searchSection: {
    paddingHorizontal: 20,
  },
  slideShow: {
    backgroundColor: "#ffda2d",
    marginTop: 30,
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phoneImg: {
    width: 170,
  },
  mainTopic: {
    fontSize: 30,
    width: 250,
    fontWeight: "bold",
  },
  subMainTopic: {
    fontSize: 20,
  },
  shopBtn:{
    backgroundColor:"#000",
    width:150,
    padding:10,
    borderRadius:20,
    marginTop:13,

  },
});