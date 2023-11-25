import React from "react";
import { Text, View } from "react-native";
import { useEmployee } from "../context/EmployeeContext";
import { useForm } from "../hooks/useForm";
import { Axios } from "../services/Axios";
import AvoidKeyboard from "./AvoidKeyboard";
import Button from "./Button";
import Input from "./Input";

const EmployeeForm = ({ setModalVisible }) => {
  const { revalidate } = useEmployee();
  const { handleChange, handleSubmit, reset, errors, loading, getValue } =
    useForm({
      defaultValues: {
        name: "",
        weeklyHours: "",
        hourlyPay: "",
      },

      onSubmit: async (data) => {
        try {
          const response = await Axios.post("/employee", data);
          reset();
          await revalidate();
          setModalVisible(false);
        } catch (error) {
          console.error(error);
        }
      },
      require: {
        name: true,
        weeklyHours: true,
        hourlyPay: true,
      },
    });

  return (
    <AvoidKeyboard>
      <View className="bg-white flex-1 p-6 relative">
        <Text className="mt-10 font-bold text-2xl">Add Employee</Text>
        <View>
          <Input
            name="name"
            label="Employee Name"
            placeholder="ex. John Doe"
            handleChange={handleChange}
            error={errors?.name}
          />
          <Input
            name="weeklyHours"
            label="Weekly Hours"
            handleChange={handleChange}
            keyboardType="numeric"
            error={errors?.weeklyHours}
          />
          <Input
            name="hourlyPay"
            label={"Hourly Pay - ($)"}
            handleChange={handleChange}
            keyboardType="numeric"
            error={errors?.hourlyPay}
          />
        </View>
        <View className="absolute bottom-10 w-full right-8 flex flex-row items-center justify-between gap-x-5">
          <Button
            variant="danger"
            onPress={() => setModalVisible(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button onPress={handleSubmit} disabled={loading}>
            Add Employee
          </Button>
        </View>
      </View>
    </AvoidKeyboard>
  );
};

export default EmployeeForm;
