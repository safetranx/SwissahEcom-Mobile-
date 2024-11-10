import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import FormLogin from "./Login/FormLogin";
import FormSignup from "./Signup/FormSignup";

const Auth = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />

      {/* Welcome Message */}
      <View style={styles.welcome}>
        <Text style={styles.bigWelcome}>
          {isLogin ? "Welcome Back" : "Create an Account"}
        </Text>
        <Text>
          {isLogin
            ? "Let’s login and continue shopping"
            : "Create your account and Start Shopping"}
        </Text>
      </View>

      {/* Switch Button for Login/Sign Up */}
      <View style={styles.switchMain}>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={[styles.switchButton, isLogin && styles.activeButton]}
            onPress={() => setIsLogin(true)}
          >
            <Text
              style={[
                styles.switchButtonText,
                isLogin && styles.activeButtonText,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.switchButton, !isLogin && styles.activeButton]}
            onPress={() => setIsLogin(false)}
          >
            <Text
              style={[
                styles.switchButtonText,
                !isLogin && styles.activeButtonText,
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {isLogin?
      <>
      <FormLogin/>
      </>
      :
      <>
      <FormSignup/>
      </>
    }

   
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  welcome: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  bigWelcome: {
    fontSize: 30,
    fontWeight: "bold",
  },
  switchMain: {
    paddingHorizontal: 20,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    borderWidth: 1,
    width: "100%",
    borderColor: "#fff",
    borderRadius: 40,
    marginVertical: 20,
    backgroundColor: "#f1f1f1",
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  switchButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#f1f1f1",
    borderRadius: 20,
    marginHorizontal: 5,
    width: 155,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#fcd400",
    borderColor: "#fcd400",
  },
  switchButtonText: {
    color: "#888",
    fontSize: 16,
  },
  activeButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
    marginLeft: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
  },
  authButton: {
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  authButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 16,
    color: "#abb3bb",
  },
  showpass:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
  },
});
