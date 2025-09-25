import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function UserDetail() {
  const { user } = useLocalSearchParams();
  const data = JSON.parse(user);
  const router = useRouter();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <Image source={{ uri: data.picture.large }} style={styles.avatar} />
        <Text style={styles.name}>
          {data.name.title} {data.name.first} {data.name.last}
        </Text>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{data.email}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>{data.phone}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>{data.location.city}, {data.location.country}</Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f9f9f9", flexGrow: 1, alignItems: "center" },
  backButton: { alignSelf: "flex-start", marginBottom: 10 },
  backText: { fontSize: 16, color: "#007AFF", fontWeight: "500" },
  card: {
    width: "100%", backgroundColor: "#fff", borderRadius: 16, padding: 20,
    alignItems: "center", shadowColor: "#000", shadowOpacity: 0.1,
    shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 5,
  },
  avatar: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  infoSection: { width: "100%", marginBottom: 15 },
  label: { fontSize: 14, color: "#888", marginBottom: 4 },
  value: { fontSize: 16, fontWeight: "500", color: "#333" },
});
