import React from "react";
import { Text, View } from "react-native";
import { useForm } from "../hooks/useForm";
import { Axios } from "../services/Axios";
import { getCurrentWeek, getCurrentYear } from "../utils/utils";
import AvoidKeyboard from "./AvoidKeyboard";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Input from "./Input";
import { useExpense } from "../context/ExpenseContext";
import { useEmployee } from "../context/EmployeeContext";

const AdvanceForm = ({ setModalVisible }) => {
  const { revalidate } = useExpense();
  const { employees } = useEmployee();
  const { handleChange, handleSubmit, reset, errors, loading, getValue } =
    useForm({
      defaultValues: {
        amount: 0,
        employeeId: "",
        reason: "",
        type: "advance",
        yearWeek: getCurrentWeek(),
        year: getCurrentYear(),
        date: Date.now(),
      },

      onSubmit: async (data) => {
        try {
          const response = await Axios.post("/expense", data);
          await revalidate();
          setModalVisible(false);
        } catch (error) {
          console.error(error);
        }
      },
      require: {
        amount: true,
        employeeId: true,
      },
    });

  const options = employees.map((employee) => {
    return { label: employee.name, value: employee._id };
  });

  return (
    <AvoidKeyboard>
      <View className="bg-white flex-1 p-6 relative">
        <Text className="mt-10 font-bold text-2xl">Add Advance</Text>
        <View className="mt-4">
          <Dropdown
            options={options}
            name="employeeId"
            label={"Employee"}
            handleChange={handleChange}
            error={errors?.employeeId}
          />
          <Input
            name="amount"
            label="Amount - ($)"
            handleChange={handleChange}
            keyboardType="numeric"
            error={errors?.amount}
          />

          <Input
            name="reason"
            label="Reason"
            handleChange={handleChange}
            multiline
            numberOfLines={4}
            error={errors?.reason}
          />
        </View>
        <View className="absolute bottom-10 w-full right-8 flex flex-row items-center justify-between gap-x-5">
          <Button
            variant="danger"
            onPress={() => setModalVisible(false)}
            disabled={loading}
          >
            Close
          </Button>
          <Button onPress={handleSubmit} disabled={loading}>
            Add Expense
          </Button>
        </View>
      </View>
    </AvoidKeyboard>
  );
};

export default AdvanceForm;
