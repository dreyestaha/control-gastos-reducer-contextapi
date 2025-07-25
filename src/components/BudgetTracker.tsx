import { useMemo } from "react"
import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"


export default function BudgetTracker() {
  
  const {state, totalExpenses, budgetRemaining} = useBudget()

  //Todos los estado de los gastos. Medio innecesario pero para que esté todo en un solo lugar:
  const totalBudget = state.budget
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Gráfico de presupuesto" />
      </div>
      <div className="flex flex-col justify-center gap-4 p-5">
        <AmountDisplay
            label={"Presupuesto"}
            amount={totalBudget}
        />
        
        <AmountDisplay
            label={"Disponible"}
            amount={budgetRemaining}
        />
        
        <AmountDisplay
            label={"Gastado"}
            amount={totalExpenses}
        />
        <div className="flex justify center">
          <button className="bg-pink-600 w-full text-2xl text-center p-4 mt-10 m-4 rounded-lg text-gray-50">Reset App</button>
        </div>
      </div>
      
    </div>
  )
}
