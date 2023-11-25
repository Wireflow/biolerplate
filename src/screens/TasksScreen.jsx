import React from "react";
import { ScrollView, Text, View } from "react-native";
import TasksHeader from "../components/TasksHeader";
import TaskModal from "../components/TaskModal";

const TasksScreen = () => {
  return (
    <View className="flex-1 bg-white px-6 pt-4">
      <TasksHeader />
      <TaskModal />
    </View>
  );
};

export default TasksScreen;
