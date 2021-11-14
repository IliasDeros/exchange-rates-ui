import Select from "react-select"

export function CurrencySelect({ currencies, setCurrency, selected }) {
  return (
    <Select 
      options={currencies}
      onChange={setCurrency}
      value={selected}
    />
  )
}