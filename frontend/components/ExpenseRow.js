export function ExpenseRow({ expense }) {
  return (
    <tr>
      <td colSpan="3">{expense.description}</td>
      <td>
        {expense.valueCAD}
      </td>
    </tr>
  )
}