import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ModeToggle({ darkMode, onToggle }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onToggle}>
      <Text style={styles.text}>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    alignItems: "center",
  },
  text: { color: "#fff", fontWeight: "bold" },
});
