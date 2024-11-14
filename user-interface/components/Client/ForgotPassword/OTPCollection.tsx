import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

const OTPCollection = () => {
  return (
    <SafeAreaView>
      <View style={styles.reset}>
        <Icon
          name="chevron-back"
          size={35}
          color="#000"
          onPress={() => {
            router.back();
          }}
        />
        <Text style={styles.resetText}>Confirm Your Email</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.para}>
          We’ve sent a 6-digit verification code to your email. Enter it below
          to confirm your account
        </Text>
      </View>

      <View style={styles.resetEmail}>
        <Text style={styles.emailLabel}>Enter Verification Code</Text>
        <TextInput
          style={styles.input}
          placeholder="XXXXXX"
          keyboardType="number-pad"
          keyboardAppearance="default"
        ></TextInput>
      </View>
      <View style={styles.conBtn}>
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => {
            router.push("/createNewPassword");
          }}
        >
          <Text style={styles.authButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTPCollection;

const styles = StyleSheet.create({
  reset: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 20,
  },

  resetText: {
    fontSize: 24,
  },
  paragraph: {
    padding: 20,
  },
  para: {
    fontSize: 16,
  },
  resetEmail: {
    padding: 20,
    height: "100%",
  },
  emailLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  authButton: {
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    borderRadius: 20,
    position: "relative",
    bottom: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  authButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },

  conBtn: {
    position: "absolute",
    bottom: 180,
    width: "100%",
    paddingHorizontal: 20,
  },
});
