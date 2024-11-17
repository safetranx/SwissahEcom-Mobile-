import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

// Component for rendering TabBar icons
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
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
            <TabBarIcon name="home" color={color} /> 
          ),
        }}
      />
    </Tabs>
  );
}
