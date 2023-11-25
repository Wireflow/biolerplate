import React from "react";
import { Text, View } from "react-native";

const Expense = ({ expense }) => {
  return (
    <View className=" bg-blue-200 border-2 border-blue-300 rounded-lg p-4 my-2 flex flex-row items-center justify-between">
      <View>
        <Text className="text-lg font-semibold ">{expense.title}</Text>
        <Text className=" ">
          Paid with:{" "}
          <Text className="capitalize italic font-semibold">
            {expense.paymentType}
          </Text>
        </Text>
      </View>
      <Text className="text-xl font-bold">-${expense.amount}</Text>
    </View>
  );
};

export default Expense;
