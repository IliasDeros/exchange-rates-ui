import { ExpenseRow } from "./ExpenseRow"
import { ExpenseInputRow } from "./ExpenseInputRow"

export function Report({ addExpense, expenses }) {
  const total = expenses.reduce((acc, cur) => acc + cur.valueCAD, 0)
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
        {expenses.map((expense,i) => (<ExpenseRow expense={expense} key={`${i}-${expense.description}`} />))}
        {expenses.length < 5 && <ExpenseInputRow submitExpense={addExpense} />}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">Total</td>
          <td>{total}</td>
        </tr>
      </tfoot>
    </table>
  )
}