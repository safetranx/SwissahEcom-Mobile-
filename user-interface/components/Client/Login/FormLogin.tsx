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
import { ExternalLink } from "@/components/ExternalLink";

const FormLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
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
          <TextInput placeholder="Enter your password" secureTextEntry />
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
        <TouchableOpacity>
        <Text>Forgot password</Text>
        </TouchableOpacity>
      </View>

      {/* Auth Button */}
      <TouchableOpacity style={styles.authButton}>
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
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 15,
  },
  authButton: {
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 10,
  },

  authButtonSocials: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 20,
    borderWidth:2,
    borderColor:"#fcd400",
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
    paddingVertical: 50,
  },
});
