import { createContext, useContext, useEffect, useState } from "react";
import { getExpenses } from "../actions/getExpenses";

// Create a context
const ExpenseContext = createContext();

// Create a provider component
export const ExpenseProvider = ({ children }) => {
  const [allExpenses, setAllExpenses] = useState(null);
  const [expenses, setExpenses] = useState(null);
  const [advances, setAdvances] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchExpenses() {
      setLoading(true);
      const expenses = await getExpenses();

      if (expenses) {
        const filteredAdvances = expenses.expense.expenses.filter(
          (expense) => expense.type === "advance"
        );
        const filteredExpenses = expenses.expense.expenses.filter(
          (expense) => expense.type === "expense"
        );
        setAllExpenses(expenses.expense.expenses);
        setAdvances(filteredAdvances);
        setExpenses(filteredExpenses);
      }
      setLoading(false);
    }

    fetchExpenses();
  }, []);

  const revalidate = async () => {
    setLoading(true);
    const expenses = await getExpenses();

    if (expenses) {
      const filteredAdvances = expenses.expense.expenses.filter(
        (expense) => expense.type === "advance"
      );
      const filteredExpenses = expenses.expense.expenses.filter(
        (expense) => expense.type === "expense"
      );
      setAllExpenses(expenses.expense.expenses);
      setAdvances(filteredAdvances);
      setExpenses(filteredExpenses);
    }
    setLoading(false);
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, advances, allExpenses, revalidate, loading }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

// Create a custom hook to use the context
export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpense must be used within a ExpenseProvider");
  }
  return context;
};
