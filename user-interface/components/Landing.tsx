import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";

const Landing = () => {
  const [role, setRole] = useState("buyer");

  return (
    <View style={styles.container}>
      <View style={styles.imagecon}>
        <Image
          source={require("@/assets/images/icon2.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.dropcon}>
        <Text style={styles.text}>Select Your Role</Text>

        <TouchableOpacity style={styles.pickerWrapper}>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Role" value="" enabled={false} />
            <Picker.Item label="Buyer" value="buyer" />
            <Picker.Item label="Seller" value="seller" />
          </Picker>
        </TouchableOpacity>
      </View>

      {/* Next Button at the Bottom */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => router.push({ pathname: "/onboard", params: { role } })}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "space-between",
  },
  image: {
    width: 200,
    height: 200,
  },
  imagecon: {
    alignItems: "center",
    width: "100%",
    paddingTop: 50,
  },
  dropcon: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 50,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  pickerWrapper: {
    width: "100%",
    overflow: "hidden",
    marginVertical: 30,
  },
  picker: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
  },

  nextButton: {
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  nextButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
