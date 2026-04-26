import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebase/config";
import { saveDecision } from "../../services/decisionService";

const moods = [
  { label: "Happy", value: "happy", icon: "happy-outline" },
  { label: "Loved", value: "loved", icon: "heart-outline" },
  { label: "Okay", value: "okay", icon: "remove-circle-outline" },
  { label: "Sad", value: "sad", icon: "sad-outline" },
  { label: "Stressed", value: "stressed", icon: "alert-circle-outline" },
];

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const [checks, setChecks] = useState({
    morning: true,
    daily: true,
    evening: true,
  });

  const toggleCheck = (key: string) => {
    setChecks({ ...checks, [key]: !checks[key as keyof typeof checks] });
  };

  const handleSelectMood = async (mood: string) => {
    const user = auth.currentUser;
    if (!user) return;

    setSelectedMood(mood);

    try {
      await saveDecision({
        type: "mood",
        mood,
        date: new Date().toISOString(),
        userId: user.uid,
      });
    } catch {
      alert("Error ❌");
    }
  };

  return (
    <View style={styles.container}>
      {/* CARD SALUDO */}
      <View style={styles.card}>
        <Text style={styles.title}>Hey there! 👋</Text>
        <Text style={styles.subtitle}>How are you feeling today?</Text>
      </View>

      {/* CARD MOODS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Today's Mood</Text>

        <View style={styles.moodRow}>
          {moods.map((m) => {
            const isActive = selectedMood === m.value;

            return (
              <TouchableOpacity
                key={m.value}
                style={styles.moodItem}
                onPress={() => handleSelectMood(m.value)}
              >
                <View
                  style={[styles.iconBox, isActive && styles.iconBoxActive]}
                >
                  <Ionicons
                    name={m.icon as any}
                    size={22}
                    color={isActive ? "white" : "#555"}
                  />
                </View>
                <Text style={styles.moodText}>{m.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* CARD WELLNESS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Daily Wellness Check</Text>

        {/* Morning */}
        <TouchableOpacity
          style={checks.morning ? styles.checkItemActive : styles.checkItem}
          onPress={() => toggleCheck("morning")}
        >
          <Ionicons
            name={checks.morning ? "checkmark-circle" : "ellipse-outline"}
            size={20}
            color={checks.morning ? "#22c55e" : "#aaa"}
          />
          <Text style={styles.checkText}>Morning Routine</Text>
        </TouchableOpacity>

        {/* Daily */}
        <TouchableOpacity
          style={checks.daily ? styles.checkItemActive : styles.checkItem}
          onPress={() => toggleCheck("daily")}
        >
          <Ionicons
            name={checks.daily ? "checkmark-circle" : "ellipse-outline"}
            size={20}
            color={checks.daily ? "#22c55e" : "#aaa"}
          />
          <Text style={styles.checkText}>Daily Check-in</Text>
        </TouchableOpacity>

        {/* Evening */}
        <TouchableOpacity
          style={checks.evening ? styles.checkItemActive : styles.checkItem}
          onPress={() => toggleCheck("evening")}
        >
          <Ionicons
            name={checks.evening ? "checkmark-circle" : "ellipse-outline"}
            size={20}
            color={checks.evening ? "#22c55e" : "#aaa"}
          />
          <Text style={styles.checkText}>Evening Reflection</Text>
        </TouchableOpacity>
      </View>

      {/* CARD TIP */}
      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>Today's Tip 💡</Text>
        <Text style={styles.tipText}>
          Take 5 deep breaths when you feel overwhelmed. Breathe in for 4, hold
          for 4, and exhale for 4.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  subtitle: {
    marginTop: 5,
    color: "#666",
  },

  sectionTitle: {
    fontWeight: "600",
    marginBottom: 10,
  },

  moodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  moodItem: {
    alignItems: "center",
  },

  iconBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },

  moodText: {
    fontSize: 12,
    color: "#444",
  },

  checkItemActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e7f9ee",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },

  checkItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },

  checkText: {
    marginLeft: 10,
  },

  tipCard: {
    backgroundColor: "#7c3aed",
    padding: 15,
    borderRadius: 16,
  },

  tipTitle: {
    color: "white",
    fontWeight: "bold",
  },

  tipText: {
    color: "white",
    marginTop: 5,
  },
  iconBoxActive: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },
});
