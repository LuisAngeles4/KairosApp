import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <LinearGradient colors={["#9333ea", "#2563eb"]} style={styles.header}>
        <Text style={styles.title}>KairosApp</Text>
        <Text style={styles.subtitle}>
          Your personal mental wellness companion
        </Text>

        <Ionicons
          name="settings-outline"
          size={20}
          color="white"
          style={styles.settings}
        />
      </LinearGradient>

      {/* CONTENIDO VACÍO POR AHORA */}
      <View style={styles.content}>
        <Text>Contenido pendiente...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#e5e7eb",
    fontSize: 12,
    marginTop: 4,
  },

  settings: {
    position: "absolute",
    right: 20,
    top: 60,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
