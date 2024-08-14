import React from "react";
import { Tabs } from "expo-router";

import { TabBarIcon } from "@/src/components/atoms";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Animated",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "aperture" : "aperture-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Native",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
