import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/Context/CartContext"; // Adjust path if needed

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  badgeCount?: number;
}) {
  return (
    <View style={{ position: "relative" }}>
      <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />
      {props.badgeCount ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{props.badgeCount}</Text>
        </View>
      ) : null}
    </View>
  );
}

export default function TabLayout() {
  const { cartCount } = useCart(); // Access cart count

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="planet-outline" color={color} />
          ),
        }}
      />

      
    </Tabs>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 2,
    minWidth: 18,
    minHeight: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
