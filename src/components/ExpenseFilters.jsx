import React from "react";
import { View } from "react-native";
import Button from "./Button";
import { useExpense } from "../context/ExpenseContext";

const ExpenseFilters = ({
  setCurrentFilter,
  currentFilter,
  setFilteredExpenses,
}) => {
  const { allExpenses, advances, expenses } = useExpense();
  const filterOptions = ["all", "products", "advances"];

  const handleExpensesFilter = (option) => {
    setCurrentFilter(option);
    switch (option) {
      case "all":
        setFilteredExpenses(allExpenses);
        break;
      case "products":
        setFilteredExpenses(expenses);
        break;
      case "advances":
        setFilteredExpenses(advances);
        break;
    }
  };

  return (
    <View className="flex flex-row my-2">
      {filterOptions.map((option, index) => (
        <Button
          key={index}
          onPress={() => {
            handleExpensesFilter(option);
          }}
          buttonStyle={`ml-0 bg-white border-black rounded-none ${
            currentFilter === option ? "bg-gray-800" : ""
          } ${
            index === 0
              ? "rounded-tl-lg rounded-bl-lg border-2"
              : index === filterOptions.length - 1
              ? "rounded-tr-lg rounded-br-lg border-2"
              : "border-t-2 border-b-2"
          } px-2 flex-1`}
          textStyle={`text-black ${
            currentFilter === option ? "text-white" : ""
          }`}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </View>
  );
};

export default ExpenseFilters;
