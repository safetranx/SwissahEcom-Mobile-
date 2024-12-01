import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const Landing = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [showPicker, setShowPicker] = useState(false); // For iOS modal

  const handleNext = () => {
    if (selectedRole) {
      router.push({ pathname: "/onboard", params: { role: selectedRole } });
    } else {
      alert("Please select a role.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/icon2.png")}
        style={styles.image}
      />
      {/* Common Title */}
      <Text style={styles.title}>Select Your Role</Text>

      {Platform.OS === "ios" ? (
        // iOS Picker
        <>
          <TouchableOpacity
            style={styles.dropdownTrigger}
            onPress={() => setShowPicker(true)}
          >
            <Text style={styles.dropdownText}>
              {selectedRole ? selectedRole : "Choose your role"}
            </Text>
          </TouchableOpacity>

          <Modal
            visible={showPicker}
            animationType="slide"
            transparent
            onRequestClose={() => setShowPicker(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedRole}
                  onValueChange={(itemValue) => setSelectedRole(itemValue)}
                >
                  <Picker.Item label="Choose your role" value="" />
                  <Picker.Item label="Buyer" value="Buyer" />
                  <Picker.Item label="Seller" value="Seller" />
                </Picker>

                <TouchableOpacity
                  style={styles.doneButton}
                  onPress={() => {
                    if (selectedRole) {
                      setShowPicker(false);
                      console.log("Selected Role:", selectedRole); // Debug log
                    } else {
                      alert("Please select a role.");
                    }
                  }}
                >
                  <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        // Android Picker
        <View style={styles.dropcon}>
          <Picker
            selectedValue={selectedRole}
            onValueChange={(itemValue) => setSelectedRole(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Choose your Role" value="" enabled={false} />
            <Picker.Item label="Buyer" value="buyer" />
            <Picker.Item label="Seller" value="seller" />
          </Picker>
        </View>
      )}

      {/* Next Button */}
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  dropdownTrigger: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    width: width * 0.7,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  doneButton: {
    alignSelf: "flex-end",
    padding: 10,
    marginTop: 10,
  },
  doneButtonText: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
  dropcon: {
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    width: "80%",
    paddingHorizontal: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding:12,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    height: 50,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  nextButtonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#fcd400",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: width * 0.8,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
