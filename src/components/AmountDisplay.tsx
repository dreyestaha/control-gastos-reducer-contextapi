import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string
    amount: number
}

export default function AmountDisplay({label, amount} : AmountDisplayProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mx-auto">
      {label && <p className="text-xl ">{label}: </p>} 
      <span className="text-xl font-bold text-cyan-700">{formatCurrency(amount)}</span>
    </div>
  )
}
