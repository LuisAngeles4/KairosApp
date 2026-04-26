import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Mental() {
  const Card = ({ title, desc, onPress }: any) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{desc}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coping Tools</Text>
      <Text style={styles.subtitle}>
        Quick exercises to help manage stress and anxiety
      </Text>

      <View style={styles.grid}>
        <Card
          title="Breathing Exercise"
          desc="Calm your mind with guided breathing"
          onPress={() => router.push("/wellness/breathing")}
        />

        <Card
          title="Positive Affirmations"
          desc="Boost your confidence and mood"
          onPress={() => router.push("/wellness/affirmations")}
        />

        <Card
          title="Grounding Technique"
          desc="5-4-3-2-1 method for anxiety"
          onPress={() => router.push("/wellness/grounding")}
        />

        <Card
          title="Calming Sounds"
          desc="Relaxing ambient music"
          onPress={() => router.push("/wellness/sounds")}
        />

        <Card
          title="Helpful Resources"
          desc="Articles and crisis helplines"
          onPress={() => router.push("/wellness/resources")}
        />

        <Card
          title="Talk to Someone"
          desc="Find support when you need it"
          onPress={() => router.push("/wellness/talk")}
        />
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipText}>
          <MaterialIcons name="self-improvement" size={20} />
          Remember: It's brave to use coping tools. Taking care of your mental
          health is important!
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
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitle: {
    marginBottom: 15,
    color: "#666",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 16,
    marginBottom: 10,
  },

  cardTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  cardText: {
    color: "#666",
    fontSize: 12,
  },

  tip: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#d1fae5",
    borderRadius: 12,
  },

  tipText: {
    color: "#065f46",
  },
});
