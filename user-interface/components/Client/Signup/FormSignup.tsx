import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const FormSignup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your first name" />
      </View>
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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.showpass}>
          <TextInput placeholder="Confirm password" secureTextEntry />
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
      <TouchableOpacity style={styles.authButton}>
        <Text style={styles.authButtonText}>
          Sign Up
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default FormSignup;

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
    backgroundColor: "#f1f1f1",
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
  },
  authButton: {
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    borderRadius: 20,
    position:"relative",
    top:140,
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
});
