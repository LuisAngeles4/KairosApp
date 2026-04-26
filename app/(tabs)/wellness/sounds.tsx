import { Audio } from "expo-av";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Sounds() {
  const [sound, setSound] = useState<any>(null);
  const [playing, setPlaying] = useState<string | null>(null);

  const sounds = [
    {
      name: "Rain",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      name: "Ocean",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      name: "Forest",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ];

  const playSound = async (item: any) => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: item.url },
      { shouldPlay: true, isLooping: true },
    );

    setSound(newSound);
    setPlaying(item.name);
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setPlaying(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calming Sounds</Text>
      <Text style={styles.subtitle}>Choose a sound to relax your mind</Text>

      {sounds.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => playSound(item)}
        >
          <Text style={styles.cardText}>{item.name}</Text>
          <Text style={styles.small}>
            {playing === item.name ? "Playing..." : "Tap to play"}
          </Text>
        </TouchableOpacity>
      ))}

      {/* STOP */}
      <TouchableOpacity style={styles.stopBtn} onPress={stopSound}>
        <Text style={styles.stopText}>Stop</Text>
      </TouchableOpacity>

      {/* CLOSE */}
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
    marginBottom: 5,
  },

  subtitle: {
    color: "#666",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  cardText: {
    fontWeight: "bold",
  },

  small: {
    fontSize: 12,
    color: "#666",
  },

  stopBtn: {
    backgroundColor: "#ef4444",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  stopText: {
    color: "white",
    fontWeight: "bold",
  },

  closeBtn: {
    backgroundColor: "#e5e7eb",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  closeText: {
    fontWeight: "bold",
  },
});
