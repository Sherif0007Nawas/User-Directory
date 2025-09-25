import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { fetchUsers } from "../services/api";
import SearchBar from "../components/SearchBar";
import ModeToggle from "../components/ModeToggle";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchUsers(20);
      setUsers(data);
      setFiltered(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadUsers();
    setRefreshing(false);
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const lower = text.toLowerCase();
    setFiltered(
      users.filter(
        (u) =>
          `${u.name.first} ${u.name.last}`.toLowerCase().includes(lower) ||
          u.email.toLowerCase().includes(lower)
      )
    );
  };

  const styles = darkMode ? darkStyles : lightStyles;

  // Simple native skeleton
  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        {[...Array(8)].map((_, i) => (
          <View key={i} style={styles.skeletonRow}>
            <View style={styles.skeletonCircle} />
            <View style={{ marginLeft: 10 }}>
              <View style={styles.skeletonLineShort} />
              <View style={styles.skeletonLineLong} />
            </View>
          </View>
        ))}
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      <SearchBar value={search} onChange={handleSearch} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.login.uuid}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.userRow}
            onPress={() => router.push({ pathname: "details", params: { user: JSON.stringify(item) } })}
          >
            <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  userRow: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontSize: 16, fontWeight: "bold", color: "#333" },
  email: { color: "#555" },
  skeletonRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  skeletonCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: "#ddd" },
  skeletonLineShort: { width: 120, height: 20, borderRadius: 4, backgroundColor: "#ddd", marginBottom: 6 },
  skeletonLineLong: { width: 180, height: 15, borderRadius: 4, backgroundColor: "#eee" },
});

const darkStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1c1c1e" },
  userRow: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#333" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  email: { color: "#aaa" },
  skeletonRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  skeletonCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: "#333" },
  skeletonLineShort: { width: 120, height: 20, borderRadius: 4, backgroundColor: "#444", marginBottom: 6 },
  skeletonLineLong: { width: 180, height: 15, borderRadius: 4, backgroundColor: "#555" },
});
