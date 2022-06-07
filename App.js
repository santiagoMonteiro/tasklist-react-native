import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const [taskName, setTaskName] = useState("");

function handleAddingTask() {
  alert(taskName);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite sua tarefa..."
          style={styles.taskInput}
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
        <TouchableOpacity
          style={styles.addTaskButton}
          onPress={handleAddingTask}
        >
          <FontAwesome name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22272e",
    paddingTop: 28,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#FFF",
    marginTop: "5%",
    paddingStart: "5%",
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  taskInput: {
    width: "75%",
    backgroundColor: "#FBFBFB",
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  addTaskButton: {
    width: "15%",
    height: 44,
    backgroundColor: "#73f7ff",
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
