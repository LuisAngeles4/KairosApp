import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../firebase/config";
import { saveDecision } from "../../services/decisionService";

export default function Decide() {
  const [decision, setDecision] = useState("");

  const [proInput, setProInput] = useState("");
  const [consInput, setConsInput] = useState("");

  const [pros, setPros] = useState<string[]>([]);
  const [cons, setCons] = useState<string[]>([]);

  const addPro = () => {
    if (!proInput.trim()) return;
    setPros([...pros, proInput]);
    setProInput("");
  };

  const addCon = () => {
    if (!consInput.trim()) return;
    setCons([...cons, consInput]);
    setConsInput("");
  };

  const handleSaveDecision = async () => {
    console.log("GUARDADO");

    const user = auth.currentUser;

    if (!user) {
      alert("No autenticado");
      return;
    }

    if (!decision.trim()) {
      alert("Escribe una decisión");
      return;
    }

    try {
      await saveDecision({
        decision,
        pros,
        cons,
        date: new Date().toISOString(),
        userId: user.uid,
      });

      alert("Guardado ✅");

      // limpiar campos
      setDecision("");
      setPros([]);
      setCons([]);
    } catch {
      alert("Error ❌");
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* TÍTULO */}
      <Text style={styles.title}>Decision Helper</Text>
      <Text style={styles.subtitle}>
        Make better choices with pros & cons analysis
      </Text>

      {/* DECISIÓN */}
      <View style={styles.card}>
        <Text style={styles.label}>What decision are you trying to make?</Text>
        <TextInput
          placeholder="e.g. Should I change careers?"
          value={decision}
          onChangeText={setDecision}
          style={styles.input}
        />
      </View>

      {/* PROS */}
      <View style={styles.card}>
        <Text style={styles.prosTitle}>Pros ({pros.length})</Text>

        <View style={styles.row}>
          <TextInput
            placeholder="Add a positive point..."
            value={proInput}
            onChangeText={setProInput}
            style={styles.inputFlex}
          />
          <TouchableOpacity style={styles.addBtn} onPress={addPro}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>

        {pros.map((p, i) => (
          <Text key={i} style={styles.item}>
            • {p}
          </Text>
        ))}
      </View>

      {/* CONS */}
      <View style={styles.card}>
        <Text style={styles.consTitle}>Cons ({cons.length})</Text>

        <View style={styles.row}>
          <TextInput
            placeholder="Add a negative point..."
            value={consInput}
            onChangeText={setConsInput}
            style={styles.inputFlex}
          />
          <TouchableOpacity style={styles.addBtnRed} onPress={addCon}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>

        {cons.map((c, i) => (
          <Text key={i} style={styles.item}>
            • {c}
          </Text>
        ))}
      </View>

      {/* BOTÓN GUARDAR */}
      <TouchableOpacity style={styles.addBtn} onPress={handleSaveDecision}>
        <Text style={styles.addText}>Guardar decisión</Text>
      </TouchableOpacity>

      {/* TIPS */}
      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>Decision-Making Tips</Text>
        <Text style={styles.tip}>• Trust your gut feeling</Text>
        <Text style={styles.tip}>• Talk to someone you trust</Text>
        <Text style={styles.tip}>• Think about your values and goals</Text>
        <Text style={styles.tip}>
          • Consider short-term and long-term effects
        </Text>
        <Text style={styles.tip}>• It's okay to change your mind later</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6ffff",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  subtitle: {
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
  },
  label: {
    marginBottom: 10,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#f3f4f6",
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputFlex: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 10,
    borderRadius: 10,
  },
  addBtn: {
    marginLeft: 10,
    backgroundColor: "#22c55e",
    padding: 10,
    borderRadius: 10,
  },
  addBtnRed: {
    marginLeft: 10,
    backgroundColor: "#ef4444",
    padding: 10,
    borderRadius: 10,
  },
  addText: {
    color: "white",
    fontWeight: "bold",
  },
  item: {
    marginTop: 5,
  },
  prosTitle: {
    fontWeight: "bold",
    color: "#22c55e",
    marginBottom: 10,
  },
  consTitle: {
    fontWeight: "bold",
    color: "#ef4444",
    marginBottom: 10,
  },
  tipCard: {
    backgroundColor: "#e0ecff",
    padding: 15,
    borderRadius: 16,
    marginTop: 10,
  },
  tipTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  tip: {
    marginTop: 3,
  },
});
