import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Wellness() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Wellness Hub</Text>
        <Text style={styles.subtitle}>Take care of your mind and body</Text>
      </View>

      {/* MENTAL WELLNESS */}
      <TouchableOpacity
        onPress={() => router.push("./wellness/mental")}
        activeOpacity={0.8}
      >
        <LinearGradient colors={["#a855f7", "#3b82f6"]} style={styles.card}>
          <Text style={styles.cardTitle}>Mental Wellness</Text>
          <Text style={styles.cardText}>
            Breathing exercises, positive affirmations, grounding techniques,
            and helpful resources
          </Text>
          <Text style={styles.link}>Explore tools →</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* PHYSICAL WELLNESS */}
      <TouchableOpacity
        onPress={() => router.push("./wellness/physical")}
        activeOpacity={0.8}
      >
        <LinearGradient colors={["#22c55e", "#10b981"]} style={styles.card}>
          <Text style={styles.cardTitle}>Physical Wellness</Text>
          <Text style={styles.cardText}>
            Track activity, water intake, nutrition, and discover quick
            exercises you can do anywhere
          </Text>
          <Text style={styles.link}>Start tracking →</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* BALANCE */}
      <TouchableOpacity
        onPress={() => router.push("./wellness/mind")}
        activeOpacity={0.8}
      >
        <LinearGradient colors={["#ec4899", "#a855f7"]} style={styles.card}>
          <Text style={styles.cardTitle}>Mind + Body = Balance</Text>
          <Text style={styles.cardText}>
            Your mental and physical health are connected. Taking care of both
            helps you feel your best! ✨
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* TIPS */}
      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>Today's Wellness Tips</Text>

        <Text style={styles.tip}>
          <MaterialIcons name="self-improvement" size={22} color="green" />
          Take 5 deep breaths when you feel overwhelmed
        </Text>
        <Text style={styles.tip}>
          💧 Drink water regularly - dehydration affects mood
        </Text>
        <Text style={styles.tip}>
          🚶 A 10-minute walk can boost your energy and focus
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  header: {
    marginBottom: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#666",
    marginTop: 5,
  },

  card: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  cardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  cardText: {
    color: "white",
    marginBottom: 10,
  },

  link: {
    color: "white",
    fontWeight: "600",
  },

  tipCard: {
    backgroundColor: "#e0ecff",
    padding: 15,
    borderRadius: 16,
    marginTop: 10,
  },

  tipTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  tip: {
    marginBottom: 5,
    color: "#1e40af",
  },
});
