import React from "react";
import { Text, View } from "react-native";

const TasksHeader = () => {
  return (
    <>
      <Text className="text-3xl font-medium mb-1">Weekly Tasks</Text>
      <Text className="text-base">
        View all your weekly tasks, including making orders, going to the bank,
        and more.
      </Text>
    </>
  );
};

export default TasksHeader;
