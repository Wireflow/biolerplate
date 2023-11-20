import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ExpenseModal from "./ExpenseModal";

const TodayActions = () => {
  return (
    <View className="flex flex-row mt-6 gap-x-2">
      <ExpenseModal />

      <TouchableOpacity className="bg-red-200 px-3 py-2 pb-2.5 rounded-lg flex flex-row gap-1 items-center justify-center">
        <AntDesign name="plus" size={15} color={"black"} />
        <Text>Advance</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodayActions;
