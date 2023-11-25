import React from "react";
import { Text, View } from "react-native";
import { useForm } from "../hooks/useForm";
import { Axios } from "../services/Axios";
import AvoidKeyboard from "./AvoidKeyboard";
import Button from "./Button";
import Input from "./Input";
import Dropdown from "./Dropdown";

const TaskForm = ({ setModalVisible }) => {
  //   const { revalidate } = useTasks();
  const { handleChange, handleSubmit, reset, errors, loading, getValue } =
    useForm({
      defaultValues: {
        title: "",
        type: "",
        day: "",
        company: "",
      },

      onSubmit: async (data) => {
        try {
          const response = await Axios.post("/task", data);
          reset();
          await revalidate();
          setModalVisible(false);
        } catch (error) {
          console.error(error);
        }
      },
      require: {
        title: true,
        type: true,
        day: true,
      },
    });

  const days = [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
    { label: "Sunday", value: "sunday" },
  ];

  const taskTypes = [
    { label: "Order", value: "order" },
    { label: "Bank", value: "bank" },
    { label: "Inventory", value: "inventory" },
    { label: "Other", value: "other" },
  ];

  return (
    <AvoidKeyboard>
      <View className="bg-white flex-1 p-6 relative">
        <Text className="mt-10 font-bold text-2xl">Add Task</Text>
        <View>
          <Input
            name="title"
            label="Task Title"
            placeholder="ex. Make order"
            handleChange={handleChange}
            error={errors?.title}
          />
          <Dropdown
            options={taskTypes}
            name="type"
            label="Type of Task"
            handleChange={handleChange}
            error={errors?.type}
          />
          <Dropdown
            options={days}
            name="day"
            label="Due Day"
            handleChange={handleChange}
            error={errors?.day}
          />
          <Input
            name="company"
            label="Associated Company"
            handleChange={handleChange}
            error={errors?.company}
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
            Add Task
          </Button>
        </View>
      </View>
    </AvoidKeyboard>
  );
};

export default TaskForm;
