import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* HEADER GLOBAL */}
      <LinearGradient colors={["#9333ea", "#2563eb"]} style={styles.header}>
        <Text style={styles.title}>KairosApp</Text>
        <Text style={styles.subtitle}>
          Your personal mental wellness companion
        </Text>

        <Ionicons
          name="settings-outline"
          size={20}
          color="white"
          style={styles.settings}
        />
      </LinearGradient>

      {/* TABS */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="journal"
          options={{
            title: "Journal",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="wellness"
          options={{
            title: "Wellness",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="sparkles-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="decide"
          options={{
            title: "Decide",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="help-circle-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="progress"
          options={{
            title: "Progress",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="trending-up-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 25,
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#e5e7eb",
    fontSize: 12,
    marginTop: 4,
  },

  settings: {
    position: "absolute",
    right: 20,
    top: 60,
  },
});
