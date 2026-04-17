import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Mental() {
  const [breathing, setBreathing] = useState(false);

  const startBreathing = () => {
    setBreathing(true);

    setTimeout(() => {
      setBreathing(false);
    }, 8000); // ciclo simple
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mental Wellness</Text>

      {/* BREATHING */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🧘 Breathing Exercise</Text>
        <Text style={styles.text}>
          Follow the rhythm: Inhale → Hold → Exhale
        </Text>

        <TouchableOpacity style={styles.btn} onPress={startBreathing}>
          <Text style={styles.btnText}>
            {breathing ? "Breathing..." : "Start"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* AFFIRMATIONS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>💬 Positive Affirmations</Text>

        <Text style={styles.text}>• I am doing my best</Text>
        <Text style={styles.text}>• I can handle this</Text>
        <Text style={styles.text}>• I am improving every day</Text>
      </View>

      {/* GROUNDING */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌿 Grounding 5-4-3-2-1</Text>

        <Text style={styles.text}>
          5 things you see{"\n"}4 things you feel{"\n"}3 things you hear{"\n"}2
          things you smell{"\n"}1 thing you taste
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
});
