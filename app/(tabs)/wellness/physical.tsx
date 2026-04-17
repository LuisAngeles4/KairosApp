import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Physical() {
  // 💧 Agua
  const [water, setWater] = useState(0);
  const waterGoal = 8;

  // 🏃 Actividad
  const [minutes, setMinutes] = useState(0);
  const goal = 60;

  const addWater = () => {
    if (water < waterGoal) setWater(water + 1);
  };

  const addMinutes = (min: number) => {
    setMinutes(minutes + min);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Physical Wellness</Text>

      {/* GOALS */}
      <View style={styles.goalCard}>
        <View style={styles.goalBox}>
          <Text style={styles.goalNumber}>
            {water}/{waterGoal}
          </Text>
          <Text style={styles.goalText}>Glasses of water</Text>
        </View>

        <View style={styles.goalBox}>
          <Text style={styles.goalNumber}>
            {minutes}/{goal}
          </Text>
          <Text style={styles.goalText}>Active minutes</Text>
        </View>
      </View>

      {/* WATER */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>💧 Water Intake</Text>

        <View style={styles.row}>
          {Array.from({ length: waterGoal }).map((_, i) => (
            <View
              key={i}
              style={[styles.waterBox, i < water && styles.waterFilled]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.btnBlue} onPress={addWater}>
          <Text style={styles.btnText}>+ Add Glass</Text>
        </TouchableOpacity>

        {water === waterGoal && (
          <Text style={styles.success}>
            🎉 Great job! You hit your water goal!
          </Text>
        )}
      </View>

      {/* ACTIVITY */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏃 Physical Activity</Text>

        <View style={styles.progressBar}>
          <View
            style={[
              styles.progress,
              { width: `${Math.min((minutes / goal) * 100, 100)}%` },
            ]}
          />
        </View>

        <Text style={styles.text}>
          {minutes} min / Goal: {goal} min
        </Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.activityBtn}
            onPress={() => addMinutes(15)}
          >
            <Text>Walking 15m</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.activityBtn}
            onPress={() => addMinutes(30)}
          >
            <Text>Workout 30m</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.activityBtn}
            onPress={() => addMinutes(20)}
          >
            <Text>Cycling 20m</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.activityBtn}
            onPress={() => addMinutes(15)}
          >
            <Text>Yoga 15m</Text>
          </TouchableOpacity>
        </View>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
    color: "#444",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#a855f7",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  goalCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    gap: 10,
  },
  goalBox: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
  },
  goalNumber: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  goalText: {
    fontSize: 12,
    color: "#666",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 10,
  },
  waterBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#3b82f6",
  },
  waterFilled: {
    backgroundColor: "#3b82f6",
  },
  btnBlue: {
    marginTop: 10,
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  progressBar: {
    height: 10,
    backgroundColor: "#e5e7eb",
    borderRadius: 5,
    marginBottom: 10,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#3b82f6",
  },
  activityBtn: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  success: {
    marginTop: 10,
    fontSize: 14,
    color: "#22c55e",
    fontWeight: "bold",
    textAlign: "center",
  },
});
