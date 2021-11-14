import { useState } from "react"
import { ExpenseRow } from "./ExpenseRow"
import { ExpenseInputRow } from "./ExpenseInputRow"

export function Report({ addExpense, expenses }) {
 
  return (
    <table className="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th></th>
          <th></th>
          <th>CAD$</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map(expense => (<ExpenseRow expense={expense} key={expense.description} />))}
        <ExpenseInputRow submitExpense={addExpense} />
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">Total</td>
          <td>0.00</td>
        </tr>
      </tfoot>
    </table>
  )
}