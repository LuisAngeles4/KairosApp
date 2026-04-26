import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Affirmations() {
  const affirmations = [
    "It's okay to ask for help when I need it",
    "I am stronger than I think",
    "I can handle whatever comes my way",
    "My feelings are valid",
    "I am doing my best, and that is enough",
    "I deserve peace and happiness",
    "I am proud of my progress",
    "I choose to focus on what I can control",
    "Every day is a new opportunity",
    "I believe in myself",
  ];

  const [index, setIndex] = useState(0);

  const nextAffirmation = () => {
    let newIndex;

    do {
      newIndex = Math.floor(Math.random() * affirmations.length);
    } while (newIndex === index); // evita repetir la misma

    setIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Positive Affirmations</Text>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.text}>"{affirmations[index]}"</Text>
      </View>

      {/* BOTÓN NEXT */}
      <TouchableOpacity style={styles.btnPink} onPress={nextAffirmation}>
        <Text style={styles.btnText}>Next Affirmation</Text>
      </TouchableOpacity>

      {/* BOTÓN CLOSE */}
      <TouchableOpacity style={styles.btnGray} onPress={() => router.back()}>
        <Text style={styles.btnGrayText}>Close</Text>
      </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#f3cbd3",
    padding: 30,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },

  btnPink: {
    backgroundColor: "#ec4899",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
  },

  btnGray: {
    backgroundColor: "#e5e7eb",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  btnGrayText: {
    fontWeight: "bold",
  },
});
