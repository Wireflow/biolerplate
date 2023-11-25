import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ExpenseModal from "./ExpenseModal";
import AdvanceModal from "./AdvanceModal";

const TodayActions = () => {
  return (
    <View className="flex flex-row mt-6 gap-x-2">
      <ExpenseModal />
      <AdvanceModal />
    </View>
  );
};

export default TodayActions;
