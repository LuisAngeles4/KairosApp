import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as AuthSession from "expo-auth-session";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase/config";
import { getErrorMessage } from "../utils/errors";
import { useGoogleAuth } from "../utils/googleAuth";
console.log(AuthSession.makeRedirectUri());

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { request, response, promptAsync } = useGoogleAuth();

  useEffect(() => {
    if (response?.type === "success") {
      const accessToken = response.authentication?.accessToken;

      console.log("ACCESS TOKEN:", accessToken);

      if (!accessToken) return;

      const credential = GoogleAuthProvider.credential(null, accessToken);

      signInWithCredential(auth, credential);
    }
  }, [response]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
        <Text style={styles.cardTitle}>Iniciar Sesión</Text>
        <Text style={styles.cardSubtitle}>
          Ingresa tus datos para continuar
        </Text>

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

        <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>

        {/* BOTÓN */}
        <TouchableOpacity onPress={handleLogin}>
          <LinearGradient colors={["#9333ea", "#2563eb"]} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* DIVIDER */}
        <Text style={styles.divider}>O continúa con</Text>

        {/* SOCIAL */}
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => promptAsync()}
          >
            <FontAwesome name="google" size={18} />
            <Text> Google</Text>
          </TouchableOpacity>

          <View style={styles.socialButton}>
            <Ionicons name="logo-apple" size={18} />
            <Text> Apple</Text>
          </View>
        </View>

        {/* REGISTER */}
        <Text style={styles.register}>
          ¿No tienes una cuenta?{" "}
          <Text style={{ color: "#9333ea", fontWeight: "bold" }}>
            Regístrate
          </Text>
        </Text>
      </View>

      <Text style={styles.footer}>🔒 Tus datos están seguros</Text>
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
  forgot: {
    textAlign: "right",
    color: "#9333ea",
    marginVertical: 10,
  },
  button: {
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
  footer: {
    textAlign: "center",
    color: "#e5e7eb",
    marginTop: 20,
  },
});
