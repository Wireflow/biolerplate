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

const ExpenseForm = ({ setModalVisible }) => {
  const { revalidate } = useExpense();
  const { handleChange, handleSubmit, reset, errors, loading, getValue } =
    useForm({
      defaultValues: {
        title: "",
        amount: 0,
        reason: "",
        paymentType: "",
        type: "expense",
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
        title: true,
        amount: true,
      },
    });

  const options = [
    { label: "Cash", value: "cash" },
    { label: "Check", value: "check" },
  ];

  return (
    <AvoidKeyboard>
      <View className="bg-white flex-1 p-6 relative">
        <Text className="mt-10 font-bold text-2xl">Add Expense</Text>
        <View>
          <Input
            name="title"
            label="Title"
            placeholder="Budwiser delivery"
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
          <Dropdown
            options={options}
            name="paymentType"
            label={"Payment Type"}
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
            Add Expense
          </Button>
        </View>
      </View>
    </AvoidKeyboard>
  );
};

export default ExpenseForm;
