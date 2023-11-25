import React from "react";
import { ScrollView, Text, View } from "react-native";
import Employee from "./Employee";
import { useEmployee } from "../context/EmployeeContext";

const Employees = () => {
  const { employees } = useEmployee();

  console.log(employees);

  return (
    <ScrollView>
      <View className="flex flex-row flex-wrap mt-4">
        {employees?.length ? (
          employees?.map((employee, index) => (
            <Employee
              index={index}
              key={employee._id}
              length={employees?.length}
              employee={employee}
            />
          ))
        ) : (
          <Text>No Current Employees</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Employees;
