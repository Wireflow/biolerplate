import React from "react";
import { Text, View } from "react-native";
import { getToday } from "../utils/utils";
import { useExpense } from "../context/ExpenseContext";

const TodayHeader = () => {
  const { allExpenses } = useExpense();
  const currentDate = getToday();

  const totalExpenses = allExpenses
    ? allExpenses?.reduce((accumulator, expense) => {
        return accumulator + expense.amount;
      }, 0)
    : 0;

  return (
    <View className="flex flex-row w-full justify-between items-center">
      <View>
        <Text className="text-3xl font-medium mb-1">Today</Text>
        <View className="flex flex-row items-center gap-1">
          <View className="bg-red-900 rounded-3xl px-2 py-0.5">
            <Text className="text-base text-white">{currentDate.weekday}</Text>
          </View>
          <View className="bg-black rounded-3xl px-2 py-0.5">
            <Text className="text-base text-white">{currentDate.date}</Text>
          </View>
        </View>
      </View>
      <View className="p-2 rounded-lg border-2 border-black px-4">
        <Text className="text-center text-base font-light">Total</Text>
        <Text className="text-2xl font-bold">${totalExpenses}</Text>
      </View>
    </View>
  );
};

export default TodayHeader;
