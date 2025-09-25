import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function SearchBar({ value, onChange, placeholder = "Search by name or email" }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});
