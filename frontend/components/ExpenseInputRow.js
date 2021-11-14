import { useState } from 'react'
import { CurrencySelect } from "./CurrencySelect"

const currencies = [
  { value: 'CAD', label: 'CAD' }
]

export function ExpenseInputRow({ submitExpense }) {
  const [draftExpense, setDraftExpense] = useState({ description: "", value: "", valueCAD: 0 })

  const isExpenseValid = draftExpense.description && draftExpense.valueCAD
  const setDescription = (e) => setDraftExpense({ ...draftExpense, description: e.target.value })
  const setValue = (e) => {
    const { value } = e.target
    setDraftExpense({ ...draftExpense, value, valueCAD: +value })
  }
  
  const submit = () => {
    if (!submitExpense(draftExpense)) {
      return
    }

    setDraftExpense({ description: "", value: "", valueCAD: 0 })
  }

  return (
    <tr>
      <td>
        <input type="text" className="input" placeholder="Description" onChange={setDescription} value={draftExpense.description} />
      </td>
      <td><CurrencySelect currencies={currencies} /></td>
      <td>
        <div className="block">
          <input type="number" className="input" placeholder="0.00" onChange={setValue} value={draftExpense.value} />
        </div>
        <div className="block">
          <button className="button is-light is-primary" onClick={submit} disabled={!isExpenseValid}>Submit</button>
        </div>
      </td>
      <td>
        <span className="light">{draftExpense.valueCAD}</span>
      </td>
    </tr>
  )
}