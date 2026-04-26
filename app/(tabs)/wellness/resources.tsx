import { router } from "expo-router";
import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Resources() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* TÍTULO */}
      <Text style={styles.title}>Helpful Resources</Text>

      {/* 🚨 CRISIS */}
      <View style={styles.crisisCard}>
        <Text style={styles.cardTitle}>Crisis Support</Text>

        <Text style={styles.text}>
          If you're in crisis or need immediate help:
        </Text>

        <Text style={styles.bold}>988 Suicide & Crisis Lifeline:</Text>
        <Text style={styles.text}>Call or text 988</Text>

        <Text style={styles.bold}>Crisis Text Line:</Text>
        <Text style={styles.text}>Text HOME to 741741</Text>

        <Text style={styles.bold}>Trevor Project (LGBTQ+):</Text>
        <Text style={styles.text}>1-866-488-7386</Text>
      </View>

      {/* 🧠 RECURSOS */}
      <View style={styles.resourceCard}>
        <Text style={styles.cardTitle}>Mental Health Resources</Text>

        <TouchableOpacity
          onPress={() => openLink("https://teenmentalhealth.org")}
        >
          <Text style={styles.link}>• Teen Mental Health</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink("https://www.activeminds.org")}
        >
          <Text style={styles.link}>• Active Minds</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://www.nami.org")}>
          <Text style={styles.link}>
            • NAMI (National Alliance on Mental Illness)
          </Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          • Your school counselor or trusted adult
        </Text>
      </View>

      {/* BOTÓN */}
      <TouchableOpacity style={styles.btn} onPress={() => router.back()}>
        <Text style={styles.btnText}>Close</Text>
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

  cardTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  crisisCard: {
    backgroundColor: "#fce7e7",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: "#ef4444",
  },

  resourceCard: {
    backgroundColor: "#dbeafe",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  text: {
    marginBottom: 5,
    color: "#444",
  },

  bold: {
    fontWeight: "bold",
    marginTop: 5,
  },

  link: {
    color: "#2563eb",
    marginBottom: 5,
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
