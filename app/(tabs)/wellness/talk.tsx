import { router } from "expo-router";
import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Talk() {
  const callNumber = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const sendSMS = (phone: string) => {
    Linking.openURL(`sms:${phone}`);
  };

  return (
    <View style={styles.container}>
      {/* TÍTULO */}
      <Text style={styles.title}>Talk to Someone</Text>
      <Text style={styles.subtitle}>
        You don’t have to go through this alone 💙
      </Text>

      {/* MÉXICO */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🇲🇽 Mexico</Text>

        <Text style={styles.bold}>Línea de la Vida</Text>
        <Text style={styles.text}>24/7 emotional support</Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btnGreen}
            onPress={() => callNumber("8009112000")}
          >
            <Text style={styles.btnText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnBlue}
            onPress={() => sendSMS("8009112000")}
          >
            <Text style={styles.btnText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* INTERNACIONAL */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌎 International</Text>

        <Text style={styles.bold}>988 Suicide & Crisis Lifeline</Text>
        <Text style={styles.text}>USA - Call or text 988</Text>

        <TouchableOpacity
          style={styles.btnGreen}
          onPress={() => callNumber("988")}
        >
          <Text style={styles.btnText}>Call</Text>
        </TouchableOpacity>
      </View>

      {/* PERSONAL */}
      <View style={styles.tip}>
        <Text style={styles.tipText}>
          💡 Tip: Reach out to a friend, family member, or someone you trust.
          Talking can make a big difference.
        </Text>
      </View>

      {/* BOTÓN */}
      <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
        <Text style={styles.closeText}>Close</Text>
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
  },

  subtitle: {
    color: "#666",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    color: "#555",
    marginBottom: 5,
  },

  bold: {
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
  },

  btnGreen: {
    backgroundColor: "#22c55e",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  btnBlue: {
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 10,
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
  },

  tip: {
    backgroundColor: "#e0f2fe",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  tipText: {
    color: "#0369a1",
  },

  closeBtn: {
    backgroundColor: "#e5e7eb",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  closeText: {
    fontWeight: "bold",
  },
});
