import React from "react";
import { ExpenseProvider } from "../context/ExpenseContext";
import { EmployeeProvider } from "../context/EmployeeContext";

const Providers = ({ children }) => {
  return (
    <ExpenseProvider>
      <EmployeeProvider>{children}</EmployeeProvider>
    </ExpenseProvider>
  );
};

export default Providers;
