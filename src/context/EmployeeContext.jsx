import { createContext, useContext, useEffect, useState } from "react";
import { getEmployees } from "../actions/getEmployees";

// Create a context
const EmployeeContext = createContext();

// Create a provider component
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchEmployees() {
      setLoading(true);
      const employees = await getEmployees();
      if (employees) {
        setEmployees(employees.employees);
      }
      setLoading(false);
    }

    fetchEmployees();
  }, []);

  const revalidate = async () => {
    setLoading(true);
    const employees = await getEmployees();

    if (employees) {
      setEmployees(employees.employees);
    }
    setLoading(false);
  };

  return (
    <EmployeeContext.Provider value={{ employees, revalidate, loading }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Create a custom hook to use the context
export const useEmployee = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployee must be used within a EmployeeProvider");
  }
  return context;
};
