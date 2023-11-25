import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { useExpense } from "../context/ExpenseContext";
import Advance from "./Advance";
import Expense from "./Expense";
import ExpenseFilters from "./ExpenseFilters";

const TodayExpenses = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { allExpenses, revalidate } = useExpense();
  const [currentFilter, setCurrentFilter] = useState("all");
  const [filteredExpenses, setFilteredExpenses] = useState(allExpenses ?? []);

  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      await revalidate();
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    setFilteredExpenses(allExpenses ?? []);
  }, [allExpenses]);

  return (
    <View className="flex-1 mt-6">
      <Text className="text-xl font-semibold">Expenses</Text>
      <ExpenseFilters
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
        setFilteredExpenses={setFilteredExpenses}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {filteredExpenses?.length ? (
          filteredExpenses?.map((expense) =>
            expense.type === "expense" ? (
              <Expense expense={expense} key={expense._id} />
            ) : (
              <Advance expense={expense} key={expense._id} />
            )
          )
        ) : (
          <Text>No expenses today</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default TodayExpenses;
