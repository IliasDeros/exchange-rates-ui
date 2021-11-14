import Select from "react-select"

export function CurrencySelect({ currencies }) {
  return (
    <Select 
      options={currencies}
    />
  )
}