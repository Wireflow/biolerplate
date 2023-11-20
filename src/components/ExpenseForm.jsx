import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm } from "../hooks/useForm";
import Button from "./Button";
import Input from "./Input";
import { getCurrentWeek, getCurrentYear } from "../utils/utils";
import AvoidKeyboard from "./AvoidKeyboard";

const ExpenseForm = ({ setModalVisible }) => {
  const { handleChange, handleSubmit, reset, errors, loading } = useForm({
    defaultValues: {
      title: "",
      amount: 0,
      reason: "",
      paymentType: "",
      yearWeek: getCurrentWeek(),
      year: getCurrentYear(),
      date: Date.now(),
    },

    onSubmit: async (data) => {
      try {
        const response = await fetch("https://192.168.1.159:3000/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    require: {
      title: true,
      amount: true,
    },
  });

  return (
    <AvoidKeyboard>
      <View className="bg-white flex-1 p-6 relative">
        <Text className="mt-10 font-bold text-2xl">Add Expense</Text>
        <View>
          <Input
            name="title"
            label="Title"
            handleChange={handleChange}
            error={errors?.title}
          />
          <Input
            name="amount"
            label="Amount - ($)"
            handleChange={handleChange}
            keyboardType="numeric"
            error={errors?.amount}
          />
          <Input
            name="paymentType"
            label="Payment Type"
            handleChange={handleChange}
          />
          <Input
            name="reason"
            label="Reason"
            handleChange={handleChange}
            multiline
            numberOfLines={4}
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
            Save
          </Button>
        </View>
      </View>
    </AvoidKeyboard>
  );
};

export default ExpenseForm;
