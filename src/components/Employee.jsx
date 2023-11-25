import React from "react";
import { Text, View } from "react-native";
import { useExpense } from "../context/ExpenseContext";

const Employee = ({ index, length, employee }) => {
  const { advances } = useExpense();
  const isOddIndex = index % 2 !== 1;
  const isLastChild = length - 1 === index;

  const employeeAdvances = advances.filter(
    (advance) => advance.employeeId === employee._id
  );

  const totalEmployeeAdvances = employeeAdvances.reduce((acc, val) => {
    return val.amount + acc;
  }, 0);

  return (
    <View
      className={`bg-emerald-300 border-2 border-emerald-500 rounded-lg p-4 ${
        isOddIndex ? "mr-4" : null
      } ${
        isLastChild ? "mr-0" : null
      } mb-4 flex min-w-[150px] flex-1 items-center`}
    >
      <Text className="text-2xl font-bold text-emerald-950 mb-3">
        {employee.name}
      </Text>
      <View className="flex items-center">
        <View className="flex flex-row items-center bg-emerald-800 rounded-md px-2 mb-2">
          <Text className="text-2xl font-extrabold text-white">
            {employee.weeklyHours}
          </Text>
          <Text className="ml-1 text-white">Hrs/Week</Text>
        </View>
        <View className="flex flex-row items-center px-2">
          <Text className="text-2xl font-extrabold text-emerald-900">
            ${employee.weeklyPay - totalEmployeeAdvances}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Employee;
