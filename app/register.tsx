import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
<<<<<<< HEAD
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { auth } from "../firebase/config";
import { getErrorMessage } from "../utils/errors";

=======
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase/config";
import { getErrorMessage } from "../utils/errors";
console.log("ESTOY EN REGISTER");
>>>>>>> 2475a76 (Resolviendo bug de register)
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = async () => {
    if (password !== confirm) {
      return alert("Las contraseñas no coinciden");
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace("/(tabs)");
    } catch (error: any) {
      alert(getErrorMessage(error.code));
    }
  };

  return (
    <LinearGradient colors={["#7c3aed", "#2563eb"]} style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="sparkles" size={30} color="#9333ea" />
        </View>

        <Text style={styles.title}>Bienvenido a KairosApp</Text>
        <Text style={styles.subtitle}>
          Tu compañero personal de bienestar mental
        </Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Crear Cuenta</Text>
        <Text style={styles.cardSubtitle}>
          Completa el formulario para registrarte
        </Text>

        {/* NOMBRE */}
        <Text style={styles.label}>Nombre completo</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#9ca3af" />
          <TextInput
            placeholder="Tu nombre"
            style={styles.input}
            onChangeText={setName}
          />
        </View>

        {/* EMAIL */}
        <Text style={styles.label}>Correo electrónico</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#9ca3af" />
          <TextInput
            placeholder="tu@email.com"
            style={styles.input}
            onChangeText={setEmail}
          />
        </View>

        {/* PASSWORD */}
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#9ca3af" />
          <TextInput
            placeholder="••••••••"
            secureTextEntry
            style={styles.input}
            onChangeText={setPassword}
          />
        </View>

        {/* CONFIRM */}
        <Text style={styles.label}>Confirmar contraseña</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#9ca3af" />
          <TextInput
            placeholder="••••••••"
            secureTextEntry
            style={styles.input}
            onChangeText={setConfirm}
          />
        </View>

        {/* BOTÓN */}
        <TouchableOpacity onPress={handleRegister}>
          <LinearGradient colors={["#9333ea", "#2563eb"]} style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* DIVIDER */}
        <Text style={styles.divider}>O continúa con</Text>

        {/* SOCIAL */}
        <View style={styles.socialContainer}>
          <View style={styles.socialButton}>
            <FontAwesome name="google" size={18} />
            <Text> Google</Text>
          </View>

          <View style={styles.socialButton}>
            <Ionicons name="logo-apple" size={18} />
            <Text> Apple</Text>
          </View>
        </View>

        {/* LOGIN LINK */}
        <Text style={styles.register}>
          ¿Ya tienes una cuenta?{" "}
          <Text style={styles.link} onPress={() => router.push("/login")}>
            Inicia sesión
          </Text>
        </Text>

        {/* TÉRMINOS */}
        <Text style={styles.terms}>
          Al registrarte, aceptas nuestros{" "}
          <Text style={styles.link}>Términos de Servicio</Text> y{" "}
          <Text style={styles.link}>Política de Privacidad</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  iconContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#e5e7eb",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  cardSubtitle: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 15,
  },

  label: {
    marginTop: 10,
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 5,
  },

  input: {
    marginLeft: 10,
    flex: 1,
  },

  button: {
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  divider: {
    textAlign: "center",
    marginVertical: 15,
    color: "#6b7280",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  socialButton: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    width: "48%",
    justifyContent: "center",
  },

  register: {
    textAlign: "center",
    marginTop: 15,
  },

  link: {
    color: "#9333ea",
    fontWeight: "bold",
  },

  terms: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 12,
    color: "#6b7280",
  },
});
