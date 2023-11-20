import React from "react";
import { ScrollView, Text, View } from "react-native";
import { todayExpenses } from "../data/today";

const TodayExpenses = () => {
  return (
    <View className="flex-1 mt-6">
      <Text className="text-xl font-semibold">Expenses</Text>
      <ScrollView>
        {todayExpenses.map((expense) => {
          return (
            <View key={expense.id} className=" bg-black rounded-lg p-4 my-2">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-base font-semibold text-white">
                  {expense.title}
                </Text>
                <Text className="text-base  text-white">${expense.amount}</Text>
              </View>
              <Text className=" text-white">
                Paid with:{" "}
                <Text className="capitalize italic font-semibold">
                  {expense.paymentType}
                </Text>
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TodayExpenses;
