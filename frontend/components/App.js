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

  const logReport = () => {
    console.log(expenses)
  }

  return (
    <div>
      <button className="button is-primary" onClick={logReport}>Submit Report</button>
      <Report addExpense={addExpense} expenses={expenses} />
    </div>
  )
}