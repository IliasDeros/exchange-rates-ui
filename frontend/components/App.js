import { useState } from "react";
import { Report } from "./Report"

const baseExpanses = [
  { description: "My First Expense", valueCAD: 10 },
  { description: "My Second Expense", valueCAD: 50 },
]

export function App() {
  const [expenses, setExpenses] = useState(baseExpanses)
  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
    return true // Success!
}

  return <Report addExpense={addExpense} expenses={expenses} />;
}