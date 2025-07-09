import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseList() {
    
    const {state} = useBudget()
    
    const isEmpty = useMemo(()=> state.expenses.length === 0, [state.expenses])
    
  
    return (
        <section className="mt-10">
            {isEmpty ? 
                
                <p className="text-gray-400 font-bold text-2xl text-center p-5">Aún no hay gastos registrados</p>
                : (
                    <>
                    <h2 className="text-3xl font-bold text-cyan-700 text-center py-5">Lista de gastos</h2>
                    {state.expenses.map(expense => (
                        <ExpenseDetails
                        key={expense.id}
                        expense={expense}
                        />
                    ))}
                    </>

            )} 
        </section>
    )
}
