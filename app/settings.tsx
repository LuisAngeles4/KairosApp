import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase/config";

export default function Settings() {
  // 🔔 switches
  const [allNotif, setAllNotif] = useState(true);
  const [moodNotif, setMoodNotif] = useState(true);
  const [waterNotif, setWaterNotif] = useState(true);
  const [activityNotif, setActivityNotif] = useState(false);

  // 🎯 goals
  const [waterGoal, setWaterGoal] = useState(9);
  const [activityGoal, setActivityGoal] = useState(60);

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* 🔔 NOTIFICATIONS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🔔 Notifications</Text>

          {/* Row */}
          <View style={styles.row}>
            <View>
              <Text>All Notifications</Text>
              <Text style={styles.desc}>Enable or disable all reminders</Text>
            </View>
            <Switch value={allNotif} onValueChange={setAllNotif} />
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          <View style={styles.row}>
            <View>
              <Text>Mood Check-in Reminders</Text>
              <Text style={styles.desc}>Daily at 9:00 AM & 8:00 PM</Text>
            </View>
            <Switch value={moodNotif} onValueChange={setMoodNotif} />
          </View>

          <View style={styles.row}>
            <View>
              <Text>Water Reminders</Text>
              <Text style={styles.desc}>Every 2 hours</Text>
            </View>
            <Switch value={waterNotif} onValueChange={setWaterNotif} />
          </View>

          <View style={styles.row}>
            <View>
              <Text>Activity Reminders</Text>
              <Text style={styles.desc}>Daily at 5:00 PM</Text>
            </View>
            <Switch value={activityNotif} onValueChange={setActivityNotif} />
          </View>
        </View>

        {/* 🎯 GOALS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🎯 Daily Goals</Text>

          <Text>Water Goal: {waterGoal} glasses</Text>
          <Slider
            minimumValue={1}
            maximumValue={12}
            step={1}
            value={waterGoal}
            onValueChange={setWaterGoal}
          />

          <Text style={{ marginTop: 10 }}>
            Activity Goal: {activityGoal} minutes
          </Text>
          <Slider
            minimumValue={10}
            maximumValue={120}
            step={5}
            value={activityGoal}
            onValueChange={setActivityGoal}
          />
        </View>

        {/* 🌙 APPEARANCE */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🌙 Appearance</Text>

          <View style={styles.row}>
            <View>
              <Text>Dark Mode</Text>
              <Text style={styles.desc}>Coming soon</Text>
            </View>
            <Switch value={false} disabled />
          </View>
        </View>

        {/* 🔒 PRIVACY */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🔒 Privacy & Data</Text>

          <TouchableOpacity style={styles.item}>
            <Text>Export My Data</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Text>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        {/* 🚨 CRISIS */}
        <View style={styles.crisisCard}>
          <Text style={styles.sectionTitle}>🚨 Crisis Resources</Text>

          <Text style={styles.bold}>
            988 Suicide & Crisis Lifeline: Call or text 988
          </Text>
          <Text style={styles.bold}>Crisis Text Line: Text HOME to 741741</Text>
          <Text style={styles.bold}>
            Trevor Project (LGBTQ+): 1-866-488-7386
          </Text>

          <TouchableOpacity style={styles.crisisBtn}>
            <Text style={styles.crisisText}>📞 Quick Access Crisis Help</Text>
          </TouchableOpacity>
        </View>

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="red" />
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 15,
    padding: 15,
  },

  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  desc: {
    color: "#666",
    fontSize: 12,
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },

  item: {
    paddingVertical: 10,
  },

  crisisCard: {
    backgroundColor: "#fee2e2",
    margin: 15,
    padding: 15,
    borderRadius: 15,
  },

  crisisBtn: {
    backgroundColor: "#ef4444",
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  crisisText: {
    color: "white",
    fontWeight: "bold",
  },

  bold: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  logout: {
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },

  logoutText: {
    color: "red",
    fontWeight: "bold",
  },
});
