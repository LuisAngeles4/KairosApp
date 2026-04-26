import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Physical() {
  // 💧 Agua
  const [water, setWater] = useState(0);
  const waterGoal = 8;

  // 🏃 Actividad
  const [minutes, setMinutes] = useState(0);
  const goal = 60;

  // 🍽️ Meals
  const [meals, setMeals] = useState({
    breakfast: true,
    lunch: true,
    dinner: false,
    snacks: true,
  });

  const toggleMeal = (key: string) => {
    setMeals({ ...meals, [key]: !meals[key as keyof typeof meals] });
  };

  const addWater = () => {
    if (water < waterGoal) setWater(water + 1);
  };

  const addMinutes = (min: number) => {
    setMinutes(minutes + min);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
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

      {/* QUICK EXERCISES */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Exercises (No Equipment!)</Text>

        <View style={styles.grid}>
          {[
            { title: "10 Jumping Jacks", time: "1 min", level: "High" },
            { title: "15 Squats", time: "2 min", level: "Medium" },
            { title: "1 min Plank", time: "1 min", level: "Medium" },
            { title: "20 Step-ups", time: "3 min", level: "High" },
            { title: "Stretch Routine", time: "5 min", level: "Low" },
            { title: "Dance Break", time: "5 min", level: "High" },
          ].map((ex, i) => {
            const colors: any = {
              High: "#fca5a5",
              Medium: "#93c5fd",
              Low: "#86efac",
            };

            return (
              <View key={i} style={styles.exercise}>
                <Text style={{ fontWeight: "bold" }}>{ex.title}</Text>
                <Text>{ex.time}</Text>

                <View
                  style={[styles.badge, { backgroundColor: colors[ex.level] }]}
                >
                  <Text>{ex.level}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      {/* MEALS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🍎 Balanced Meals</Text>
        <Text style={styles.text}>Check off meals you've eaten today</Text>

        {[
          { key: "breakfast", label: "Breakfast 🌅" },
          { key: "lunch", label: "Lunch ☀️" },
          { key: "dinner", label: "Dinner 🌙" },
          { key: "snacks", label: "Healthy Snacks 🍎" },
        ].map((item, i) => {
          const active = meals[item.key as keyof typeof meals];

          return (
            <TouchableOpacity
              key={i}
              onPress={() => toggleMeal(item.key)}
              style={[
                styles.meal,
                active && {
                  borderColor: "#22c55e",
                  backgroundColor: "#dcfce7",
                },
              ]}
            >
              <Text>
                {active ? "✅" : "⬜"} {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* DID YOU KNOW */}
      <View style={styles.funCard}>
        <Text style={styles.funTitle}>💜 Did You Know?</Text>
        <Text style={styles.funText}>
          Just 20 minutes of exercise can boost your mood for up to 12 hours!
        </Text>
      </View>

      {/* TIPS */}
      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>Healthy Habits Tips 🌟</Text>
        <Text style={styles.tip}>• Start small – even 10 minutes counts</Text>
        <Text style={styles.tip}>• Choose activities you enjoy</Text>
        <Text style={styles.tip}>• Eat regular meals</Text>
        <Text style={styles.tip}>• Stay hydrated</Text>
        <Text style={styles.tip}>• Movement reduces stress</Text>
      </View>
    </ScrollView>
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  exercise: {
    width: "48%",
    backgroundColor: "#f9fafb",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  badge: {
    marginTop: 5,
    padding: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  meal: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 8,
  },

  funCard: {
    backgroundColor: "#a855f7",
    padding: 15,
    borderRadius: 16,
    marginTop: 10,
  },

  funTitle: {
    color: "white",
    fontWeight: "bold",
  },

  funText: {
    color: "white",
  },

  tipCard: {
    backgroundColor: "#fef3c7",
    padding: 15,
    borderRadius: 16,
    marginTop: 10,
  },

  tipTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  tip: {
    marginTop: 3,
  },
});
