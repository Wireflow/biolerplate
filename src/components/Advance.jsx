import React from "react";
import { Text, View } from "react-native";
import { useEmployee } from "../context/EmployeeContext";

const Advance = ({ expense }) => {
  const { employees } = useEmployee();
  const employee = employees.filter(
    (employee) => employee._id === expense.employeeId
  );

  return (
    <View className=" bg-red-200 border-2 border-red-300 rounded-lg p-4 my-2 flex flex-row items-center justify-between">
      <View>
        <Text className="text-lg font-semibold ">{employee[0]?.name}</Text>
        {employee[0]?.reason ? <Text>{employee[0]?.reason}</Text> : null}
      </View>
      <Text className="text-xl font-bold">-${expense.amount}</Text>
    </View>
  );
};

export default Advance;
