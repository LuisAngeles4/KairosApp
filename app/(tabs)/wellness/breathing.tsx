import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Breathing() {
  const [seconds, setSeconds] = useState(4);
  const [phase, setPhase] = useState("Inhale");

  useEffect(() => {
    let interval: any;

    interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          changePhase();
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  const changePhase = () => {
    setPhase((prev) => {
      if (prev === "Inhale") return "Hold";
      if (prev === "Hold") return "Exhale";
      if (prev === "Exhale") return "Hold 2";
      return "Inhale";
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Box Breathing</Text>

      {/* CÍRCULO */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.seconds}>{seconds}</Text>
          <Text style={styles.label}>seconds</Text>
        </View>
      </View>

      {/* FASE */}
      <Text style={styles.phase}>{phase}</Text>

      {/* PASOS */}
      <View style={styles.steps}>
        <Step number={1} text="Breathe in through your nose for 4 seconds" />
        <Step number={2} text="Hold your breath for 4 seconds" />
        <Step number={3} text="Breathe out slowly for 4 seconds" />
        <Step number={4} text="Repeat 5–10 times" />
      </View>

      {/* BOTÓN */}
      <TouchableOpacity style={styles.btn} onPress={() => router.back()}>
        <Text style={styles.btnText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const Step = ({ number, text }: any) => (
  <View style={styles.step}>
    <View style={styles.stepCircle}>
      <Text style={styles.stepNumber}>{number}</Text>
    </View>
    <Text style={styles.stepText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  circleContainer: {
    backgroundColor: "#cfe8f3",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 15,
  },

  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  seconds: {
    fontSize: 28,
    fontWeight: "bold",
  },

  label: {
    color: "#666",
  },

  phase: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
  },

  steps: {
    marginBottom: 20,
  },

  step: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5e7eb",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  stepNumber: {
    color: "white",
    fontWeight: "bold",
  },

  stepText: {
    flex: 1,
    fontSize: 13,
  },

  btn: {
    backgroundColor: "#e5e7eb",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  btnText: {
    fontWeight: "bold",
  },
});
