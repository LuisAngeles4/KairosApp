import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../firebase/config";
import { getJournals, saveJournal } from "../../services/decisionService";

export default function Journal() {
  const [entries, setEntries] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [tags, setTags] = useState<string>("");

  const fetchData = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const data = await getJournals(user.uid);
    setEntries(data.reverse());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;

    if (!text.trim()) return alert("Escribe algo");

    await saveJournal({
      text,
      tags: tags.split(",").map((t) => t.trim()),
      date: new Date().toISOString(),
      userId: user.uid,
    });

    setText("");
    setTags("");

    fetchData();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Emotion Journal</Text>

        <TouchableOpacity style={styles.btn} onPress={handleSave}>
          <Text style={styles.btnText}>+ New Entry</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Track your feelings and thoughts</Text>

      {/* INPUT */}
      <TextInput
        placeholder="Write your thoughts..."
        value={text}
        onChangeText={setText}
        style={styles.input}
        multiline
      />

      <TextInput
        placeholder="tags (happy, sad, etc)"
        value={tags}
        onChangeText={setTags}
        style={styles.input}
      />

      {/* LISTA */}
      <Text style={styles.section}>Recent Entries</Text>

      {entries.map((e) => (
        <View key={e.id} style={styles.card}>
          <Text style={styles.date}>{new Date(e.date).toLocaleString()}</Text>

          <Text style={styles.text}>{e.text}</Text>

          <View style={styles.tags}>
            {e.tags.map((t: string, i: number) => (
              <Text key={i} style={styles.tag}>
                {t}
              </Text>
            ))}
          </View>
        </View>
      ))}

      {/* TIP */}
      <View style={styles.tip}>
        <Text>Journaling helps you understand your emotions better.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  btn: {
    backgroundColor: "#9333ea",
    padding: 10,
    borderRadius: 10,
  },

  btnText: {
    color: "white",
  },

  subtitle: {
    marginBottom: 15,
    color: "#666",
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  section: {
    marginTop: 15,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 16,
    marginTop: 10,
  },

  date: {
    fontSize: 12,
    color: "#666",
  },

  text: {
    marginTop: 5,
  },

  tags: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
  },

  tag: {
    backgroundColor: "#ddd",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 5,
    marginTop: 5,
  },

  tip: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#dbeafe",
    borderRadius: 10,
  },
});
