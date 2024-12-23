import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { ExternalLink } from "@/components/ExternalLink";
import { router } from "expo-router";
import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const VenderLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSignIn = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      router.push("/(vendors)/dashboard");
      setIsModalVisible(false);
    }, 3000);
  };

  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.showpass}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <MaterialIcons
              name={passwordVisible ? "visibility" : "visibility-off"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.otherOptions}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setKeepSignedIn(!keepSignedIn)}
          >
            <MaterialIcons
              name={keepSignedIn ? "check-box" : "check-box-outline-blank"}
              size={24}
              color="#d0d0d0"
            />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>Keep me signed in</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.replace("/forgot");
          }}
        >
          <Text>Forgot password</Text>
        </TouchableOpacity>
      </View>

      {/* Auth Button */}
      <TouchableOpacity style={styles.authButton} onPress={handleSignIn}>
        <Text style={styles.authButtonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.connetWith}>
        <Text style={{ textAlign: "center", color: "#969aa8" }}>
          You can connect with
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.authButtonSocials}>
          <Text style={styles.authButtonText}>Sign up with E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.authButtonSocials}>
          <Text style={styles.authButtonText}>Sign up with Apple</Text>
        </TouchableOpacity>
      </View>

      {/* Full Screen Modal */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require("@/assets/images/G.png")} />
            <Text style={styles.modalText}>Login successfully</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default VenderLogin;

const styles = StyleSheet.create({
  form: {
    flex: 1, // Use flex to make it stretch across the screen
    paddingHorizontal: width * 0.08, // Adjust padding relative to screen width
    paddingTop: height * 0.005,
  },
  inputContainer: {
    marginBottom: height * 0.015, // Relative margin
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: height * 0.02, // Dynamic padding
    fontSize: height * 0.02,
  },
  authButton: {
    backgroundColor: "#fcd400",
    paddingVertical: height * 0.02,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: height * 0.015,
  },
  authButtonSocials: {
    backgroundColor: "#fff",
    paddingVertical: height * 0.02,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fcd400",
    alignItems: "center",
    marginVertical: height * 0.015,
  },
  authButtonText: {
    fontSize: height * 0.022,
    fontWeight: "bold",
    color: "#000",
  },
  checkboxText: {
    fontSize: height * 0.018,
    color: "#abb3bb",
  },
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: width * 100,
    height: height * 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: height * 0.02,
  },
  modalText: {
    fontSize: height * 0.03,
    fontWeight: "bold",
    marginTop: height * 0.02,
    textAlign: "center",
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

  showpass: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#f1f1f1",
  },
  otherOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  connetWith: {
    paddingVertical: 20,
  },
  label: {
    fontSize: height * 0.018,
    paddingVertical: 3,
  },
});
