import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export function Task({ task, deleteTask }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.trashButton}
        onPress={deleteTask}
      >
        <FontAwesome name="trash" size={20} color="#22272e" />
      </TouchableOpacity>

      <Text>{task.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    marginTop: 12,
    padding: 12,
    borderRadius: 4,
  },
  trashButton: {
    marginRight: 8,
  },
});
