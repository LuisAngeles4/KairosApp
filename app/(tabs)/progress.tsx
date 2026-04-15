import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { auth } from "../../firebase/config";
import { getDecisions, getMoods } from "../../services/decisionService";

export default function Progress() {
  const [moods, setMoods] = useState<any[]>([]);
  const [decisions, setDecisions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const screenWidth = Dimensions.get("window").width;

  // 🔥 valores
  const moodValues: any = {
    happy: 5,
    loved: 5,
    okay: 3,
    sad: 2,
    stressed: 1,
  };

  // 🔄 FETCH DATA
  const fetchData = async () => {
    const user = auth.currentUser;
    if (!user) return;

    setLoading(true);

    try {
      const moodsData = await getMoods(user.uid);
      const decisionsData = await getDecisions(user.uid);

      setMoods(Array.isArray(moodsData) ? moodsData : []);
      setDecisions(Array.isArray(decisionsData) ? decisionsData : []);
    } catch (error) {
      console.log("ERROR:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 📊 GRÁFICA REAL
  const getWeekData = () => {
    const today = new Date();

    const start = new Date(today);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    start.setDate(diff);

    const week: number[] = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);

      const dateStr = d.toISOString().split("T")[0];

      const found = moods.find((m) => m.date?.startsWith(dateStr));

      week.push(found ? moodValues[found.mood] || 0 : 0);
    }

    return week;
  };

  const safeData = getWeekData();

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{ data: safeData }],
  };

  // 📈 PROMEDIO
  const avg = safeData.reduce((a, b) => a + b, 0) / 7 || 0;

  // 🔥 STREAK
  const getStreak = () => {
    const dates = [...new Set(moods.map((m) => m.date?.split("T")[0]))]
      .filter(Boolean)
      .sort()
      .reverse();

    let streak = 0;
    let current = new Date();

    for (let d of dates) {
      const today = current.toISOString().split("T")[0];

      if (d === today) {
        streak++;
        current.setDate(current.getDate() - 1);
      } else break;
    }

    return streak;
  };

  const streak = getStreak();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Your Progress</Text>
      <Text style={styles.subtitle}>Track your mental wellness journey</Text>

      {/* 🔄 REFRESH */}
      <View style={styles.refreshContainer}>
        <TouchableOpacity style={styles.refreshBtn} onPress={fetchData}>
          <Text style={styles.refreshText}>
            {loading ? "Actualizando..." : "Refresh"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 STREAK */}
      <View style={styles.streakCard}>
        <View style={styles.rowCenter}>
          <Ionicons name="flame-outline" size={18} color="white" />
          <Text style={styles.streakTitle}> Current Streak</Text>
        </View>

        <Text style={styles.streakNumber}>{streak}</Text>
        <Text style={styles.streakText}>days in a row! Keep it up!</Text>
      </View>

      {/* 📊 STATS */}
      <View style={styles.row}>
        <View style={styles.statCard}>
          <Ionicons name="calendar-outline" size={20} />
          <Text style={styles.statNumber}>{moods.length}</Text>
          <Text style={styles.statLabel}>Days Active</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="book-outline" size={20} />
          <Text style={styles.statNumber}>{decisions.length}</Text>
          <Text style={styles.statLabel}>Decisions</Text>
        </View>
      </View>

      {/* 📈 CHART */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>This Week's Mood</Text>

        <LineChart
          data={chartData}
          width={screenWidth - 40}
          height={200}
          withShadow
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0,
            color: () => "#7c3aed",
            labelColor: () => "#6b7280",
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#7c3aed",
            },
            propsForBackgroundLines: {
              strokeDasharray: "6 6",
              stroke: "#a78bfa",
            },
            fillShadowGradient: "#a78bfa",
            fillShadowGradientOpacity: 0.3,
          }}
          bezier
          style={{ borderRadius: 16, marginTop: 10 }}
        />

        <View style={styles.avgBox}>
          <Text style={styles.avgText}>Average mood: {avg.toFixed(1)}/5</Text>
        </View>
      </View>

      {/* 😊 MOODS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recent Moods</Text>

        {moods.length === 0 ? (
          <Text>No moods yet</Text>
        ) : (
          moods
            .slice(-5)
            .reverse()
            .map((m) => (
              <View key={m.id} style={styles.listItem}>
                <Text style={styles.itemTitle}>{m.mood}</Text>
                <Text style={styles.itemDate}>
                  {new Date(m.date).toLocaleDateString()}
                </Text>
              </View>
            ))
        )}
      </View>

      {/* 🧠 DECISIONES */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recent Decisions</Text>

        {decisions.length === 0 ? (
          <Text>No decisions yet</Text>
        ) : (
          decisions
            .slice(-5)
            .reverse()
            .map((d) => (
              <View key={d.id} style={styles.listItem}>
                <Text style={styles.itemTitle}>{d.decision}</Text>

                <Text style={styles.itemSub}>
                  {d.pros.length} pros | {d.cons.length} cons
                </Text>

                <Text style={styles.itemDate}>
                  {new Date(d.date).toLocaleDateString()}
                </Text>
              </View>
            ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },

  refreshContainer: {
    alignItems: "center",
    marginBottom: 10,
  },

  refreshBtn: {
    backgroundColor: "#7c3aed",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  refreshText: {
    color: "white",
    fontWeight: "600",
  },

  streakCard: {
    backgroundColor: "#fb7185",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },

  streakTitle: {
    color: "white",
    fontWeight: "600",
  },

  streakNumber: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

  streakText: {
    color: "white",
  },

  row: {
    flexDirection: "row",
  },

  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  statCard: {
    backgroundColor: "white",
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },

  statLabel: {
    fontSize: 12,
    color: "#666",
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 16,
    marginTop: 15,
  },

  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  avgBox: {
    backgroundColor: "#ede9fe",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  avgText: {
    color: "#6d28d9",
    textAlign: "center",
  },

  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 8,
  },

  itemTitle: {
    fontWeight: "600",
  },

  itemSub: {
    color: "#666",
    fontSize: 12,
  },

  itemDate: {
    fontSize: 11,
    color: "#999",
  },
});
