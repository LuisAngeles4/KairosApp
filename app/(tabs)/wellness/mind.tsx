import { StyleSheet, Text, View } from "react-native";

export default function Mind() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mind & Balance</Text>

      {/* CONCEPTO */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🧠 Mind + Body</Text>

        <Text style={styles.text}>
          Your mental and physical health are deeply connected.
        </Text>

        <Text style={styles.text}>
          Taking care of both leads to better energy, mood, and focus.
        </Text>
      </View>

      {/* TIPS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>✨ Daily Balance Tips</Text>

        <Text style={styles.text}>• Sleep at least 7-8 hours</Text>
        <Text style={styles.text}>• Stay hydrated</Text>
        <Text style={styles.text}>• Move your body daily</Text>
        <Text style={styles.text}>• Take mental breaks</Text>
      </View>

      {/* REFLECTION */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📝 Reflection</Text>

        <Text style={styles.text}>Ask yourself:</Text>

        <Text style={styles.text}>
          • How do I feel today?{"\n"}• What do I need right now?{"\n"}• What
          can I improve tomorrow?
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
