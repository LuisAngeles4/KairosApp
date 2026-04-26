import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Grounding() {
  const Item = ({ title, desc, color }: any) => (
    <View style={[styles.item, { borderLeftColor: color }]}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDesc}>{desc}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>5-4-3-2-1 Grounding</Text>
      <Text style={styles.subtitle}>
        This technique helps you stay present when feeling anxious
      </Text>

      {/* LISTA */}
      <Item
        title="Name 5 things you can see"
        desc="Look around and identify 5 objects"
        color="#f59e0b"
      />

      <Item
        title="Name 4 things you can touch"
        desc="Feel textures around you"
        color="#f97316"
      />

      <Item
        title="Name 3 things you can hear"
        desc="Listen to sounds in your environment"
        color="#ef4444"
      />

      <Item
        title="Name 2 things you can smell"
        desc="Notice any scents"
        color="#a855f7"
      />

      <Item
        title="Name 1 thing you can taste"
        desc="Focus on taste in your mouth"
        color="#3b82f6"
      />

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
    marginBottom: 10,
  },

  subtitle: {
    marginBottom: 15,
    color: "#555",
  },

  item: {
    backgroundColor: "#f9fafb",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderLeftWidth: 5,
  },

  itemTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  itemDesc: {
    color: "#666",
    fontSize: 13,
  },

  btn: {
    marginTop: 15,
    backgroundColor: "#e5e7eb",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  btnText: {
    fontWeight: "bold",
  },
});
