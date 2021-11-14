import { useState } from "react";
import { Report } from "./Report"

const baseExpenses = []
const limitCAD = 1000

export function App() {
  const [expenses, setExpenses] = useState(baseExpenses)
  const total = expenses.reduce((acc, cur) => acc + cur.valueCAD, 0)
  const isTotalExceeded = total > limitCAD
  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
    return true // Success!
  }

  const logReport = () => {
    console.table([...expenses, { description: "Total", valueCAD: total }])
  }

  return (
    <div>
      <div className="block">
        <button 
          className="button is-primary" 
          onClick={logReport}
          disabled={isTotalExceeded}
        >
          Submit Report
        </button>
      </div>
      {isTotalExceeded && <div className="block"><span>Expense report of ${limitCAD} reached.</span></div>}
      <div className="block">
        <Report addExpense={addExpense} expenses={expenses} />
      </div>
    </div>
  )
}